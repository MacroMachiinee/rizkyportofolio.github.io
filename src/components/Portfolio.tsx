import React, { useState, useEffect } from 'react';
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
  GalleryCategory,
} from '../data/portfolioGalleryData';
import { SmartGalleryImage } from './SmartGalleryImage';
import { ProjectDetailModal } from './ProjectDetailModal';
import { AddPortfolioModal } from './AddPortfolioModal';
import { ArrowUpRight, Plus, Trash2 } from 'lucide-react';

interface PortfolioProps {
  isAdmin: boolean;
  authToken: string | null;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  isAdmin,
  authToken,
}) => {
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryCategory>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/portfolio')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data && Array.isArray(data.items)) {
          setItems(data.items);
        }
      })
      .catch(() => {
        // Fallback to static GALLERY_ITEMS when offline
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleItemAdded = (newItem: GalleryItem) => {
    setItems((prev) => [newItem, ...prev]);
    setActiveFilter('all');
  };

  const handleDeleteItem = async (id: string) => {
    setDeletingId(id);
    try {
      const headers: Record<string, string> = {};
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }
      const res = await fetch(`/api/portfolio/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers,
      });
      if (res.ok) {
        setItems((prev) => prev.filter((item) => item.id !== id));
        if (selectedProject?.id === id) {
          setSelectedProject(null);
        }
      }
    } finally {
      setDeletingId(null);
      setConfirmDeleteId(null);
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Admin Add Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
              04. GALERI PORTOFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
              Karya Desain Pilihan
            </h2>
          </div>

          {isAdmin && (
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Portofolio</span>
              </button>
            </div>
          )}
        </div>

        {/* Clean Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200/80 dark:border-slate-800 mb-10 overflow-x-auto max-w-fit">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === cat.id
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimalist Visual Grid (Just Image, Title, and Category) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-xs flex flex-col justify-between relative"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <SmartGalleryImage
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                  category={item.category}
                  aspectRatioClass="aspect-4/3"
                  className="w-full h-full"
                />

                {/* Admin Delete Control */}
                {isAdmin && (
                  <div
                    className="absolute top-3 left-3 z-20 flex items-center gap-1.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {confirmDeleteId === item.id ? (
                      <div className="flex items-center gap-1 bg-black/85 backdrop-blur-md p-1 rounded-lg border border-white/15">
                        <button
                          type="button"
                          disabled={deletingId === item.id}
                          onClick={() => handleDeleteItem(item.id)}
                          className="px-2 py-1 text-[11px] font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded transition-colors"
                        >
                          {deletingId === item.id ? 'Menghapus...' : 'Hapus'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(null)}
                          className="px-2 py-1 text-[11px] font-medium text-slate-200 hover:text-white rounded transition-colors"
                        >
                          Batal
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(item.id)}
                        className="p-2 rounded-lg bg-black/70 hover:bg-rose-600 text-white backdrop-blur-md border border-white/10 transition-colors"
                        aria-label={`Hapus ${item.title}`}
                        title="Hapus karya ini"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                {/* Subtle Hover Overlay Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md text-white p-2 rounded-lg border border-white/10">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Minimal Card Footer: Just Name & Category */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0052FF] dark:group-hover:text-blue-400 transition-colors truncate">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono-code text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.category}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#0052FF] group-hover:border-blue-500/30 transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-400 font-mono-code text-sm">
            Tidak ada karya dalam kategori ini.
          </div>
        )}
      </div>

      {/* Visual Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Add Portfolio Modal (Admin Only) */}
      <AddPortfolioModal
        isOpen={isAddModalOpen}
        authToken={authToken}
        onClose={() => setIsAddModalOpen(false)}
        onAdded={handleItemAdded}
      />
    </section>
  );
};
