import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Print Design' | 'Editorial' | 'Digital Design';
  image: string;
  createdAt?: string;
}

interface AdminSessionPayload {
  username: string;
  role: 'admin';
  exp: number;
}

const VALID_CATEGORIES = new Set([
  'Branding',
  'Packaging',
  'Print Design',
  'Editorial',
  'Digital Design',
]);

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'nusa-studio-branding',
    title: 'Nusa Studio Visual Identity',
    category: 'Branding',
    image: '/portfolio/branding/nusa-studio.jpg',
  },
  {
    id: 'kopi-merapi-packaging',
    title: 'Kopi Merapi Roast Packaging',
    category: 'Packaging',
    image: '/portfolio/packaging/kopi-merapi.jpg',
  },
  {
    id: 'art-tech-poster',
    title: 'Yogyakarta Art & Tech Poster',
    category: 'Editorial',
    image: '/portfolio/editorial/art-tech.jpg',
  },
  {
    id: 'arkadia-brochure',
    title: 'Arkadia Residence Brochure',
    category: 'Print Design',
    image: '/portfolio/print/arkadia-brochure.jpg',
  },
  {
    id: 'edutech-digital-campaign',
    title: 'EduTech Summit Campaign',
    category: 'Digital Design',
    image: '/portfolio/digital/edutech-summit.jpg',
  },
  {
    id: 'susu-merapi-label',
    title: 'Susu Pasteurisasi Merapi Label',
    category: 'Packaging',
    image: '/portfolio/packaging/susu-merapi.jpg',
  },
];

const IS_VERCEL = Boolean(process.env.VERCEL);
const BUNDLED_DATA_FILE = path.resolve(process.cwd(), 'data', 'portfolio-items.json');
const DATA_DIR = IS_VERCEL ? '/tmp/mr-portfolio-data' : path.resolve(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'portfolio-items.json');
const UPLOADS_DIR = IS_VERCEL
  ? '/tmp/mr-portfolio-uploads'
  : path.resolve(process.cwd(), 'public', 'portfolio', 'uploads');

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'rizkyadmin2026';
const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  crypto
    .createHash('sha256')
    .update(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}:muhammad-rizky-portfolio`)
    .digest('hex');

const COOKIE_NAME = 'mr_admin_session';
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

function getSeedItems(): GalleryItem[] {
  if (fs.existsSync(BUNDLED_DATA_FILE)) {
    try {
      const raw = fs.readFileSync(BUNDLED_DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      // Fall back to default items
    }
  }
  return DEFAULT_GALLERY_ITEMS;
}

function ensureStorageReady() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(getSeedItems(), null, 2), 'utf-8');
  }
}

function readPortfolioItems(): GalleryItem[] {
  ensureStorageReady();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : getSeedItems();
  } catch {
    return getSeedItems();
  }
}

function writePortfolioItems(items: GalleryItem[]) {
  ensureStorageReady();
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), 'utf-8');
}

function safeCompare(a: string, b: string): boolean {
  const hashA = crypto.createHash('sha256').update(a).digest();
  const hashB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

function signSessionToken(username: string): string {
  const payload: AdminSessionPayload = {
    username,
    role: 'admin',
    exp: Date.now() + SESSION_TTL_MS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedPayload)
    .digest('base64url');
  return `${encodedPayload}.${signature}`;
}

function verifySessionToken(token: string | undefined | null): AdminSessionPayload | null {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [encodedPayload, providedSignature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedPayload)
    .digest('base64url');

  if (!safeCompare(providedSignature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf-8')
    ) as AdminSessionPayload;
    if (!payload || payload.role !== 'admin' || typeof payload.exp !== 'number') {
      return null;
    }
    if (Date.now() > payload.exp) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

function extractToken(req: Request): string | null {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const cookies = cookieHeader.split(';');
    for (const cookie of cookies) {
      const idx = cookie.indexOf('=');
      if (idx > -1) {
        const key = cookie.slice(0, idx).trim();
        const value = cookie.slice(idx + 1).trim();
        if (key === COOKIE_NAME) {
          return decodeURIComponent(value);
        }
      }
    }
  }
  return null;
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req);
  const session = verifySessionToken(token);
  if (!session) {
    res.status(401).json({ error: 'Akses ditolak. Silakan login sebagai admin terlebih dahulu.' });
    return;
  }
  next();
}

function slugify(input: string): string {
  return (
    input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48) || 'karya'
  );
}

export function createApiApp() {
  ensureStorageReady();

  const app = express();
  app.use(express.json({ limit: '15mb' }));

  // Serve uploaded portfolio images in dev, production, and Vercel /tmp fallback
  app.use('/portfolio/uploads', express.static(UPLOADS_DIR));

  // Auth routes
  app.post('/api/auth/login', (req: Request, res: Response) => {
    const { username, password } = req.body ?? {};
    if (typeof username !== 'string' || typeof password !== 'string') {
      res.status(400).json({ error: 'Username dan password wajib diisi.' });
      return;
    }

    const isValidUser =
      safeCompare(username.trim(), ADMIN_USERNAME) && safeCompare(password, ADMIN_PASSWORD);

    if (!isValidUser) {
      res.status(401).json({ error: 'Username atau password salah.' });
      return;
    }

    const token = signSessionToken(ADMIN_USERNAME);
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: SESSION_TTL_MS,
      path: '/',
    });

    res.json({
      token,
      user: { username: ADMIN_USERNAME, role: 'admin' },
    });
  });

  app.post('/api/auth/logout', (_req: Request, res: Response) => {
    res.clearCookie(COOKIE_NAME, { path: '/' });
    res.json({ ok: true });
  });

  app.get('/api/auth/me', (req: Request, res: Response) => {
    const session = verifySessionToken(extractToken(req));
    if (!session) {
      res.json({ authenticated: false });
      return;
    }
    res.json({
      authenticated: true,
      user: { username: session.username, role: session.role },
    });
  });

  // Portfolio routes
  app.get('/api/portfolio', (_req: Request, res: Response) => {
    const items = readPortfolioItems();
    res.json({ items });
  });

  app.post('/api/portfolio', requireAdmin, (req: Request, res: Response) => {
    const { title, category, imageBase64, imageUrl } = req.body ?? {};

    if (typeof title !== 'string' || title.trim().length < 2 || title.trim().length > 120) {
      res.status(400).json({ error: 'Nama project harus diisi (2–120 karakter).' });
      return;
    }

    if (typeof category !== 'string' || !VALID_CATEGORIES.has(category)) {
      res.status(400).json({ error: 'Kategori desain tidak valid.' });
      return;
    }

    const cleanTitle = title.trim();
    const typedCategory = category as GalleryItem['category'];
    let finalImagePath = '';

    if (typeof imageBase64 === 'string' && imageBase64.startsWith('data:image/')) {
      const match = imageBase64.match(/^data:image\/(png|jpeg|jpg|webp);base64,(.+)$/i);
      if (!match) {
        res.status(400).json({ error: 'Format gambar harus PNG, JPG, atau WebP.' });
        return;
      }

      const ext = match[1].toLowerCase() === 'jpeg' ? 'jpg' : match[1].toLowerCase();
      const buffer = Buffer.from(match[2], 'base64');

      if (buffer.byteLength > 10 * 1024 * 1024) {
        res.status(400).json({ error: 'Ukuran gambar maksimal 10MB.' });
        return;
      }

      if (IS_VERCEL) {
        // On Vercel serverless, store small images inline so they render reliably across instances
        finalImagePath = imageBase64;
      } else {
        const fileName = `${slugify(cleanTitle)}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
        const targetPath = path.join(UPLOADS_DIR, fileName);
        fs.writeFileSync(targetPath, buffer);
        finalImagePath = `/portfolio/uploads/${fileName}`;
      }
    } else if (
      typeof imageUrl === 'string' &&
      (imageUrl.trim().startsWith('/') ||
        imageUrl.trim().startsWith('https://') ||
        imageUrl.trim().startsWith('http://'))
    ) {
      finalImagePath = imageUrl.trim();
    } else {
      res.status(400).json({ error: 'Silakan unggah gambar karya atau masukkan URL gambar yang valid.' });
      return;
    }

    const newItem: GalleryItem = {
      id: `${slugify(cleanTitle)}-${crypto.randomUUID().slice(0, 6)}`,
      title: cleanTitle,
      category: typedCategory,
      image: finalImagePath,
      createdAt: new Date().toISOString(),
    };

    const existingItems = readPortfolioItems();
    const updatedItems = [newItem, ...existingItems];
    writePortfolioItems(updatedItems);

    res.status(201).json({ item: newItem });
  });

  app.delete('/api/portfolio/:id', requireAdmin, (req: Request, res: Response) => {
    const id = req.params.id;
    const existingItems = readPortfolioItems();
    const target = existingItems.find((item) => item.id === id);

    if (!target) {
      res.status(404).json({ error: 'Karya portofolio tidak ditemukan.' });
      return;
    }

    const remaining = existingItems.filter((item) => item.id !== id);
    writePortfolioItems(remaining);

    // Clean up uploaded file if stored in /portfolio/uploads/
    if (target.image.startsWith('/portfolio/uploads/')) {
      const fileName = path.basename(target.image);
      const fullPath = path.resolve(UPLOADS_DIR, fileName);
      if (fullPath.startsWith(UPLOADS_DIR) && fs.existsSync(fullPath)) {
        try {
          fs.unlinkSync(fullPath);
        } catch {
          // Ignore file deletion error
        }
      }
    }

    res.json({ ok: true });
  });

  return app;
}
