import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

interface SmartGalleryImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  year?: string;
  className?: string;
  aspectRatioClass?: string;
  onClick?: () => void;
}

export const SmartGalleryImage: React.FC<SmartGalleryImageProps> = ({
  src,
  alt,
  title,
  category,
  year,
  className = '',
  aspectRatioClass = 'aspect-16/10',
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resolvedSrc =
    src.startsWith('/') && !src.startsWith('//')
      ? `${import.meta.env.BASE_URL}${src.slice(1)}`
      : src;

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [resolvedSrc]);

  // If the image fails to load or hasn't been added yet, display a refined Swiss minimalist graphic composition
  if (hasError) {
    return (
      <div
        onClick={onClick}
        className={`relative w-full ${aspectRatioClass} bg-[#0A0E17] text-white p-6 flex flex-col justify-between overflow-hidden select-none border border-slate-200/10 dark:border-slate-800 ${className}`}
      >
        {/* Subtle Architectural Swiss Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Top Bar with category & year */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
          <span className="text-[#0052FF] font-semibold">{category.toUpperCase()}</span>
          <span>{year || '2024'}</span>
        </div>

        {/* Center Graphic Silhouette */}
        <div className="relative z-10 my-auto text-center px-4 py-3">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0052FF]">
            <Palette className="w-6 h-6" />
          </div>
          <div className="text-sm font-bold text-white tracking-wide truncate max-w-xs mx-auto">
            {title}
          </div>
          <div className="text-[11px] text-slate-400 font-mono-code mt-1">
            Visual Portfolio · Muhammad Rizky
          </div>
        </div>

        {/* Bottom Bar: Swiss Print Alignment Marks */}
        <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-slate-500">
          <span>VECTOR MASTER / CMYK</span>
          <span>YOGYAKARTA, ID</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-slate-900 ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <span className="text-xs font-mono-code text-slate-400">Memuat karya...</span>
        </div>
      )}

      <img
        src={resolvedSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        onClick={onClick}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] cursor-pointer ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
