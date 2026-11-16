export type GalleryCategory =
  | 'Branding'
  | 'Packaging'
  | 'Print Design'
  | 'Editorial'
  | 'Digital Design';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
}

export const GALLERY_CATEGORIES: { id: 'all' | GalleryCategory; label: string }[] = [
  { id: 'all', label: 'Semua' },
  { id: 'Branding', label: 'Branding' },
  { id: 'Packaging', label: 'Packaging' },
  { id: 'Print Design', label: 'Print Design' },
  { id: 'Editorial', label: 'Editorial' },
  { id: 'Digital Design', label: 'Digital Design' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
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
