export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Graphic Design' | 'Branding' | 'Print Design' | 'Web & CMS' | 'IT Support';
  filterTag: 'graphic' | 'branding' | 'print' | 'web';
  year: string;
  tools: string[];
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  accentColor: string;
  mockupType: 'branding' | 'print' | 'poster' | 'web' | 'tech' | 'social';
  customImageUrl?: string;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    levelPercentage: number;
    description: string;
    tools: string[];
  }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  idealFor: string;
  tools: string[];
  inquiryCode: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  type: string;
  description: string;
  keyPoints: string[];
  skillsUsed: string[];
}

export const PERSONAL_INFO = {
  name: 'Muhammad Rizky',
  title: 'Graphic Designer · Brand & Visual Specialist',
  tagline: 'Mewujudkan Identitas Visual Modern dengan Presisi Grid & Estetika Editorial',
  degree: 'S1 Informatika',
  university: 'Universitas Alma Ata',
  location: 'Yogyakarta, Indonesia',
  timezone: 'Asia/Jakarta (WIB - UTC+7)',
  experienceYears: '3+ Tahun Freelance',
  bio: 'Seorang Graphic Designer berpengalaman yang menggabungkan kepekaan artistik desain visual dengan pemikiran terstruktur lulusan S1 Informatika Universitas Alma Ata. Berpengalaman lebih dari 3 tahun mengerjakan identitas brand, desain kemasan, materi cetak siap produksi, dan aset visual digital.',
  email: 'rizkymarkuntil@gmail.com',
  whatsapp: '+6288225130362',
  whatsappFormatted: '+62 882 2513 0362',
  instagram: 'https://www.instagram.com/rizky_winters/',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
};

export const HIGHLIGHT_STATS = [
  { value: '3+', label: 'Tahun Pengalaman', detail: 'Freelance Graphic Design' },
  { value: '80+', label: 'Karya Desain Selesai', detail: 'Branding, Kemasan & Cetak' },
  { value: 'S1', label: 'Informatika', detail: 'Universitas Alma Ata Yogyakarta' },
  { value: '300', label: 'DPI Print Standard', detail: 'Pre-Press & Vector Master' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Brand Identity & Vector Design',
    tagline: 'Keahlian merancang identitas visual, logo vektor presisi, dan sistem tipografi brand.',
    iconName: 'Palette',
    skills: [
      {
        name: 'CorelDRAW Graphics Suite',
        level: 'Tingkat Ahli (Primary Vector)',
        levelPercentage: 95,
        description: 'Pembuatan logo vektor, tracing presisi, layout nota/formulir kantor, dan separasi warna siap cetak mesin offset & digital.',
        tools: ['CorelDRAW 2021/2024', 'Color Separation', 'Vector Tracing'],
      },
      {
        name: 'Adobe Illustrator',
        level: 'Tingkat Mahir',
        levelPercentage: 90,
        description: 'Penyusunan brand guidelines, ikonografi kustom, ilustrasi vektor modern, dan tipografi editorial berbasis grid.',
        tools: ['Brand Styleguides', 'Icon Design', 'Typography Hierarchy'],
      },
      {
        name: 'Logo & Visual Identity System',
        level: 'Tingkat Mahir',
        levelPercentage: 92,
        description: 'Perancangan identitas merek komprehensif mulai dari konsep monogram, palet warna brand, hingga aturan aplikasi visual.',
        tools: ['Monogram Grid', 'Color Palette', 'Stationery Design'],
      },
      {
        name: 'Editorial & Grid Layout',
        level: 'Tingkat Mahir',
        levelPercentage: 88,
        description: 'Penataan halaman publikasi, katalog produk, company profile, dan poster acara dengan hierarki visual yang bersih.',
        tools: ['Swiss Grid System', 'Catalog Layout', 'Company Profile'],
      },
    ],
  },
  {
    title: 'Digital Imaging & Campaign Visual',
    tagline: 'Olah foto komersial, pembuatan mockup realistis, dan desain konten kampanye digital.',
    iconName: 'Layers',
    skills: [
      {
        name: 'Adobe Photoshop',
        level: 'Tingkat Mahir',
        levelPercentage: 92,
        description: 'Manipulasi foto digital, retouching produk komersial, pembuatan mockup 3D realistis, dan visual promosi media sosial.',
        tools: ['Photo Retouching', '3D Mockup Creation', 'Color Grading'],
      },
      {
        name: 'Social Media & Campaign Assets',
        level: 'Tingkat Mahir',
        levelPercentage: 90,
        description: 'Desain template feed Instagram carousel bersambung, story, banner promosi digital, dan materi kampanye acara.',
        tools: ['Instagram Carousel', 'Digital Flyer', 'Event Backdrop'],
      },
      {
        name: 'Visual Key & Poster Art Direction',
        level: 'Tingkat Mahir',
        levelPercentage: 88,
        description: 'Pengembangan key visual utama untuk seminar, pameran, maupun peluncuran produk yang konsisten di seluruh media.',
        tools: ['Key Visual', 'Typography Poster', 'E-Certificate'],
      },
      {
        name: 'Product Presentation & Mockup',
        level: 'Tingkat Mahir',
        levelPercentage: 90,
        description: 'Penyajian pratinjau desain di atas media nyata (kemasan, stationery, billboard, dan merchandise) sebelum diproduksi.',
        tools: ['Smart Object', 'Lighting Realism', 'Brand Presentation'],
      },
    ],
  },
  {
    title: 'Print & Packaging Production',
    tagline: 'Standarisasi file pra-cetak profesional untuk memastikan hasil produksi tajam dan akurat.',
    iconName: 'Printer',
    skills: [
      {
        name: 'Pre-Press & Color Separation',
        level: 'Tingkat Ahli',
        levelPercentage: 94,
        description: 'Standarisasi file cetak: bleed line, crop marks, profil warna CMYK, resolusi 300 DPI, dan penyesuaian material kertas.',
        tools: ['CMYK Standard', 'Bleed & Crop Marks', '300 DPI Press-Ready'],
      },
      {
        name: 'Packaging & Label Design',
        level: 'Tingkat Mahir',
        levelPercentage: 90,
        description: 'Desain standing pouch, dus kemasan produk, dan stiker label botol lengkap dengan garis pisau pon (die-cut).',
        tools: ['Die-Cut Line', 'Standing Pouch', 'Sticker Kiss-Cut'],
      },
      {
        name: 'Promotional Print Collateral',
        level: 'Tingkat Mahir',
        levelPercentage: 92,
        description: 'Penyusunan brosur lipat dua/tiga, flyer promosi, roll-up banner, spanduk outdoor, dan kartu nama siap cetak.',
        tools: ['Tri-Fold Brochure', 'Roll-Up Banner', 'Outdoor Spanduk'],
      },
      {
        name: 'Finishing & Material Spec',
        level: 'Tingkat Kompeten',
        levelPercentage: 86,
        description: 'Penyiapan layer khusus untuk efek finishing percetakan seperti Spot UV, emboss, maupun hot foil stamping.',
        tools: ['Spot UV Mask', 'Foil Stamping', 'Offset & Digital Print'],
      },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design & Visual Identity',
    shortDesc: 'Desain identitas brand komprehensif, logo vektor berkarakter, pedoman warna, dan stationery perusahaan.',
    deliverables: [
      'Logo Vektor Master (AI, CDR, SVG, PNG Transparan)',
      'Brand Guidelines (Palet Warna & Panduan Tipografi)',
      'Desain Kartu Nama, Kop Surat & Map Perusahaan',
      'Konsep Visual Unik & Orisinal sesuai Karakter Brand',
      'Revisi fleksibel hingga hasil maksimal',
    ],
    idealFor: 'Pelaku usaha baru (UMKM), startup, profesional, dan personal branding.',
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Adobe Photoshop'],
    inquiryCode: 'DESAIN_GRAFIS',
  },
  {
    id: 'print-layout',
    title: 'Print & Publication Layout',
    shortDesc: 'Penyusunan materi cetak siap produksi dengan standar percetakan profesional (resolusi tinggi & warna akurat).',
    deliverables: [
      'Brosur, Flyer, & Leaflet Pemasaran (Tri-fold / Bi-fold)',
      'Banner, Spanduk Outdoor, & Roll-up Banner Acara',
      'Katalog Produk, Company Profile, & Buku Panduan',
      'Poster Acara, Sertifikat Cetak, & ID Card Panitia',
      'File Siap Cetak (PDF Press-Quality 300 DPI dengan Bleed)',
    ],
    idealFor: 'Penyelenggara acara, restoran/kafe, institusi, dan kantor korporat.',
    tools: ['CorelDRAW', 'Photoshop', 'Adobe Illustrator'],
    inquiryCode: 'PRINT_LAYOUT',
  },
  {
    id: 'packaging-design',
    title: 'Packaging & Product Label Design',
    shortDesc: 'Perancangan kemasan produk dan stiker label yang menarik secara visual sekaligus presisi untuk proses potong mesin.',
    deliverables: [
      'Desain Kemasan Standing Pouch, Box Dus, & Paper Bag',
      'Desain Label Botol, Jar, & Stiker Produk Waterproof',
      'Garis Pisau Pon (Die-Cut / Kiss-Cut) Presisi Pabrik',
      'Penataan Tabel Komposisi, Barcode, & Informasi Produk',
      'Pratinjau 3D Mockup Produk Realistis',
    ],
    idealFor: 'Brand F&B, kopi sangrai, produk kecantikan, dan UMKM ritel.',
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Adobe Photoshop'],
    inquiryCode: 'PACKAGING_DESIGN',
  },
  {
    id: 'digital-design',
    title: 'Social Media & Digital Campaign',
    shortDesc: 'Paket aset visual digital yang rapi dan konsisten untuk meningkatkan daya tarik promosi online bisnis Anda.',
    deliverables: [
      'Desain Feed Instagram & Carousel Bersambung',
      'Template Instagram Story & Konten Promosi Rutin',
      'Flyer Digital WhatsApp & Banner Promosi Marketplace',
      'E-Sertifikat Acara & Virtual Background Webinar',
      'File Master Editable agar Mudah Digunakan Kembali',
    ],
    idealFor: 'Bisnis online, penyelenggara webinar/event, dan kreator konten.',
    tools: ['Adobe Photoshop', 'CorelDRAW', 'Adobe Illustrator'],
    inquiryCode: 'DIGITAL_DESIGN',
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'nusa-studio-branding',
    title: 'Nusa Studio Brand Identity',
    subtitle: 'Sistem Identitas Visual & Pedoman Brand Kreatif',
    category: 'Branding',
    filterTag: 'branding',
    year: '2024',
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Adobe Photoshop'],
    client: 'Nusa Creative Studio (Klien Desain)',
    summary: 'Pengembangan identitas visual menyeluruh untuk studio kreatif berbasis di Yogyakarta, mencakup perancangan logo geometri, pemilihan palet warna kontemporer, dan aplikasi pada alat tulis kantor serta kemasan merchandise.',
    challenge: 'Menciptakan simbol visual yang fleksibel digunakan pada skala mikro (ikon aplikasi) maupun skala makro (neon sign) dengan gaya modern dan tidak cepat usang.',
    solution: 'Membangun monogram berbasis grid geometris Swiss yang solid, didukung palet warna netral dengan aksen electric blue yang memberi kesan dinamis dan profesional.',
    deliverables: [
      'Monogram Vector Master (.CDR, .AI, .SVG)',
      'Buku Panduan Brand (40 Halaman PDF)',
      'Mockup Stationery (Kartu Nama, Map, Kop Surat)',
      'Template Media Sosial Instagram Feed & Story',
    ],
    accentColor: '#0052FF',
    mockupType: 'branding',
  },
  {
    id: 'art-tech-poster',
    title: 'Yogyakarta Art & Tech Exhibition',
    subtitle: 'Poster Acara & Katalog Editorial Cetak',
    category: 'Print Design',
    filterTag: 'print',
    year: '2024',
    tools: ['CorelDRAW', 'Adobe Photoshop'],
    client: 'Pameran Kolaborasi Seni & Komputasi',
    summary: 'Perancangan materi promosi cetak berupa poster ukuran A1 dan buku panduan pameran dengan tata letak tipografi editorial Swiss Modernist yang bersih dan berbobot.',
    challenge: 'Mengakomodasi data kuratorial yang padat dan daftar 30 seniman/kreator tanpa membuat halaman terasa sempit dan melelahkan untuk dibaca.',
    solution: 'Menggunakan grid 12 kolom dengan whitespace luas, kontras ukuran tipografi yang tegas, serta garis pembatas rambut (hairline) untuk segregasi informasi.',
    deliverables: [
      'Poster Pameran A1 Siap Cetak (300 DPI CMYK + Bleed 3mm)',
      'Buku Katalog Pameran 24 Halaman',
      'Brosur Lipat Tiga (Tri-Fold Pamphlet)',
      'Banner Roll-up Display Foyer',
    ],
    accentColor: '#10B981',
    mockupType: 'poster',
  },
  {
    id: 'kopi-merapi-packaging',
    title: 'Kopi Merapi Roast Packaging',
    subtitle: 'Desain Kemasan Pouch Kopi & Label Spesifikasi',
    category: 'Print Design',
    filterTag: 'print',
    year: '2023',
    tools: ['CorelDRAW', 'Adobe Photoshop', 'Illustrator'],
    client: 'Kedai Kopi Lokal Yogyakarta',
    summary: 'Perancangan label kemasan standing pouch kopi sangrai khas lereng Merapi dengan informasi tasting notes, varietas, proses roasting, dan barcode scanner.',
    challenge: 'Memastikan garis potong pisau (die-cut line) presisi di mesin cetak kemasan foil dan teks informasi kecil tetap terbaca tajam.',
    solution: 'Membuat file master CorelDRAW dengan separasi layer khusus die-cut, menggunakan tipografi sans-serif berkejelasan tinggi pada teks deskripsi kopi.',
    deliverables: [
      'Artwork Label Depan & Belakang Kemasan 250gr & 1kg',
      'Separasi Warna Spot UV & Garis Pon (Die-Cut Mask)',
      '3D Realistic Product Mockup Photoshop',
      'Stiker Segel Kualitas (Quality Seal Sticker)',
    ],
    accentColor: '#D97706',
    mockupType: 'print',
  },
  {
    id: 'sinergi-tekno-web',
    title: 'Sinergi Tekno Solusi Web Portal',
    subtitle: 'Administrasi & Pembangunan Portal WordPress',
    category: 'Web & CMS',
    filterTag: 'web',
    year: '2024',
    tools: ['WordPress', 'cPanel', 'MySQL', 'Custom CSS'],
    client: 'CV Sinergi Tekno Solusi',
    summary: 'Instalasi, kustomisasi arsitektur halaman, dan administrasi berkelanjutan untuk website profil perusahaan penyedia solusi IT di Indonesia.',
    challenge: 'Memerlukan website yang cepat dibuka pada jaringan seluler, mudah diperbarui oleh admin non-programmer, dan terlindungi dari spam form serta brute-force.',
    solution: 'Membangun arsitektur WordPress ringan, mengaktifkan proteksi Cloudflare DNS, konfigurasi caching Litespeed, dan menyusun dashboard posting yang ramah pengguna.',
    deliverables: [
      'Struktur Halaman Responsif (Home, Layanan, Studi Kasus, Kontak)',
      'Setup Email Bisnis Domain pada cPanel',
      'Sistem Backup Mingguan Otomatis ke Google Drive',
      'Panduan Penggunaan Singkat (PDF Manual Admin)',
    ],
    accentColor: '#2563EB',
    mockupType: 'web',
  },
  {
    id: 'edutech-digital-campaign',
    title: 'EduTech National Summit Assets',
    subtitle: 'Kampanye Visual Multi-Kanal & Promosi Media',
    category: 'Graphic Design',
    filterTag: 'graphic',
    year: '2023',
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Photoshop'],
    client: 'Inisiatif Seminar Teknologi Pendidikan',
    summary: 'Penyusunan paket visual promosi lengkap untuk rangkaian webinar nasional, mencakup sertifikat digital peserta, poster Instagram, dan backdrop panggung.',
    challenge: 'Konsistensi gaya visual lintas 15 materi turunan dengan tenggat waktu eksekusi yang cepat.',
    solution: 'Membuat master visual kit dan palet panduan terlebih dahulu di CorelDRAW, lalu mengeksekusi turunan aset secara paralel dengan template terstruktur.',
    deliverables: [
      'Sertifikat Digital Otomatisasi Nama Peserta',
      'Set Feed & Story Instagram Promosi (12 Desain)',
      'Virtual Background Zoom & Backdrop Panggung 4x3 Meter',
      'Name Tag Panitia & ID Card Pembicara',
    ],
    accentColor: '#8B5CF6',
    mockupType: 'social',
  },
  {
    id: 'almaata-lab-maintenance',
    title: 'Computer Lab Overhaul & Deployment',
    subtitle: 'Pemeliharaan Hardware & Standarisasi OS Komputer',
    category: 'IT Support',
    filterTag: 'web',
    year: '2023',
    tools: ['Hardware Diagnostics', 'Disk Cloning', 'LAN Cabling', 'Windows 11'],
    client: 'Lingkungan Akademik & Laboratorium',
    summary: 'Proyek perawatan preventif, diagnosa hardware, pembersihan termal, serta deployment serentak sistem operasi pada unit workstation komputer.',
    challenge: 'Memastikan puluhan unit komputer siap pakai dengan stabilitas tinggi untuk praktikum pemrograman dan desain tanpa lag atau crash sistem.',
    solution: 'Melakukan pembersihan fisik mendalam, penggantian thermal paste berkualitas tinggi, pembuatan master image sistem teroptimasi, dan pengujian stress-test.',
    deliverables: [
      'Standarisasi Sistem Operasi & Driver Bersih',
      'Inspeksi & Pengujian Kelayakan RAM dan Storage SSD',
      'Manajemen Kabel Daya & Jaringan LAN Meja Komputer',
      'Dokumentasi Checklist Pemeliharaan Berkala',
    ],
    accentColor: '#0284C7',
    mockupType: 'tech',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: '2021 — Sekarang (3+ Tahun)',
    role: 'Freelance Graphic Designer & Brand Specialist',
    institution: 'Praktik Mandiri & Klien Proyek',
    location: 'Yogyakarta & Remote',
    type: 'Pekerjaan Freelance',
    description: 'Bekerja secara independen dengan berbagai pemilik usaha, UMKM, institusi acara, dan komunitas untuk merancang identitas visual, materi cetak siap produksi, serta aset media sosial.',
    keyPoints: [
      'Mendesain lebih dari 80+ proyek visual menggunakan CorelDRAW, Adobe Photoshop, dan Illustrator.',
      'Menguasai proses pra-cetak (pre-press) untuk menjamin hasil cetak bebas salah warna dan resolusi pecah.',
      'Membangun komunikasi langsung dengan klien, mendengarkan kebutuhan, dan memberikan solusi visual solutif.',
    ],
    skillsUsed: ['CorelDRAW', 'Photoshop', 'Illustrator', 'Pre-Press', 'Branding Design'],
  },
  {
    period: '2022 — Sekarang',
    role: 'IT Support & Hardware Maintenance Specialist',
    institution: 'Layanan Mandiri & Dukungan Teknis',
    location: 'Yogyakarta',
    type: 'Layanan Teknis',
    description: 'Menangani perbaikan teknis komputer, perakitan PC, diagnosa kerusakan komponen, instalasi sistem operasi, dan optimasi performa perangkat kerja.',
    keyPoints: [
      'Menyelesaikan berbagai kendala teknis PC seperti gagal booting, thermal overheating, dan kerusakan sistem.',
      'Melakukan perakitan PC rakitan spesifikasi desain grafis dan kebutuhan komputasi harian.',
      'Penyusunan jaringan lokal (LAN), crimping kabel UTP RJ45, dan setup perangkat pendukung kantor.',
    ],
    skillsUsed: ['Hardware Troubleshooting', 'OS Deployment', 'PC Assembly', 'LAN Cabling', 'Thermal Management'],
  },
  {
    period: '2023 — Sekarang',
    role: 'Web Administrator & CMS Operator',
    institution: 'Klien Bisnis & UMKM',
    location: 'Yogyakarta & Remote',
    type: 'Pekerjaan Proyek',
    description: 'Mengelola situs web berbasis WordPress, memastikan keamanan, melakukan pembaruan plugin/tema, dan menjaga keteraturan konten perusahaan.',
    keyPoints: [
      'Pengelolaan hosting melalui cPanel, konfigurasi DNS domain, dan penyiapan akun email profesional.',
      'Menerapkan skema backup otomatis dan optimasi kecepatan akses melalui kompresi gambar dan caching.',
      'Mendampingi pemilik bisnis dalam mempublikasikan pembaruan produk dan artikel informasi berkala.',
    ],
    skillsUsed: ['WordPress Core', 'cPanel', 'DNS & SSL', 'Speed Optimization', 'Database Basics'],
  },
  {
    period: '2020 — 2024',
    role: 'Pendidikan S1 Informatika',
    institution: 'Universitas Alma Ata',
    location: 'Yogyakarta, Indonesia',
    type: 'Latar Belakang Pendidikan',
    description: 'Menempuh pendidikan sarjana ilmu komputer dengan fokus pada Rekayasa Perangkat Lunak, Jaringan Komputer, Arsitektur Sistem Komputer, dan Basis Data.',
    keyPoints: [
      'Memperoleh fondasi logika komputasi kuat yang melandasi pemecahan masalah teknis IT dan struktur web.',
      'Aktif memadukan keahlian desain grafis dengan proyek akademik komputasi dan multimedia.',
      'Berhasil menyelesaikan studi dengan pemahaman komprehensif mengenai teknologi informasi modern.',
    ],
    skillsUsed: ['Computer Science', 'Software Engineering', 'Computer Networks', 'Database Systems'],
  },
];
