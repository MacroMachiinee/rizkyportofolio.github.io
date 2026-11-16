import React, { useEffect } from 'react';
import { GalleryItem } from '../data/portfolioGalleryData';
import { SmartGalleryImage } from './SmartGalleryImage';
import { X } from 'lucide-react';

interface ProjectDetailModalProps {
  project: GalleryItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Simple Title & Category */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0B0F19] shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 mt-0.5">
              {project.category}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Showcase (Single Image) */}
        <div className="p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
          <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl">
            <SmartGalleryImage
              src={project.image}
              alt={project.title}
              title={project.title}
              category={project.category}
              aspectRatioClass="aspect-16/10 sm:aspect-16/9"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
