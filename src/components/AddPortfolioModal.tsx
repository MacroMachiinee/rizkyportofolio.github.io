import React, { useState, useEffect } from 'react';
import {
  GalleryCategory,
  GalleryItem,
  GALLERY_CATEGORIES,
} from '../data/portfolioGalleryData';
import { X, Upload, Image as ImageIcon, AlertCircle, Plus, Link as LinkIcon } from 'lucide-react';

interface AddPortfolioModalProps {
  isOpen: boolean;
  authToken: string | null;
  onClose: () => void;
  onAdded: (newItem: GalleryItem) => void;
}

export const AddPortfolioModal: React.FC<AddPortfolioModalProps> = ({
  isOpen,
  authToken,
  onClose,
  onAdded,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryCategory>('Branding');
  const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');
  const [imageBase64, setImageBase64] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryChoices = GALLERY_CATEGORIES.filter((c) => c.id !== 'all') as {
    id: GalleryCategory;
    label: string;
  }[];

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setCategory('Branding');
      setImageBase64('');
      setImageFileName('');
      setImageUrl('');
      setError(null);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileSelect = (file: File | undefined) => {
    if (!file) return;
    setError(null);

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Format gambar harus JPG, PNG, atau WebP.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Ukuran gambar maksimal 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageBase64(reader.result);
        setImageFileName(file.name);
      }
    };
    reader.onerror = () => {
      setError('Gagal membaca file gambar.');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || title.trim().length < 2) {
      setError('Nama project wajib diisi (minimal 2 karakter).');
      return;
    }

    if (uploadMode === 'file' && !imageBase64) {
      setError('Pilih gambar karya dari komputer terlebih dahulu.');
      return;
    }

    if (uploadMode === 'url' && !imageUrl.trim()) {
      setError('Masukkan path atau URL gambar yang valid.');
      return;
    }

    setIsSubmitting(true);
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          title: title.trim(),
          category,
          imageBase64: uploadMode === 'file' ? imageBase64 : undefined,
          imageUrl: uploadMode === 'url' ? imageUrl.trim() : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data?.error || 'Gagal menyimpan portofolio.');
        setIsSubmitting(false);
        return;
      }

      onAdded(data.item);
      onClose();
    } catch {
      setError('Terjadi kesalahan koneksi saat menyimpan karya.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewSrc = uploadMode === 'file' ? imageBase64 : imageUrl.trim();

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#070B12]">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Tambah Karya Portofolio
            </h3>
            <p className="text-xs font-mono-code text-slate-500 dark:text-slate-400">
              Unggah gambar karya, nama project &amp; kategori
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Project Title */}
          <div>
            <label
              htmlFor="portfolio-title"
              className="block text-xs font-bold font-mono-code text-slate-700 dark:text-slate-300 uppercase mb-1.5"
            >
              Nama Project
            </label>
            <input
              id="portfolio-title"
              type="text"
              required
              maxLength={120}
              placeholder="Contoh: Logo & Branding Kedai Kopi Jogja"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="portfolio-category"
              className="block text-xs font-bold font-mono-code text-slate-700 dark:text-slate-300 uppercase mb-1.5"
            >
              Kategori Desain
            </label>
            <select
              id="portfolio-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as GalleryCategory)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
            >
              {categoryChoices.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Image Source Toggle */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-mono-code text-slate-700 dark:text-slate-300 uppercase">
                Gambar Karya
              </span>
              <div className="inline-flex p-0.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px]">
                <button
                  type="button"
                  onClick={() => setUploadMode('file')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    uploadMode === 'file'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  Upload File
                </button>
                <button
                  type="button"
                  onClick={() => setUploadMode('url')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    uploadMode === 'url'
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  URL / Path
                </button>
              </div>
            </div>

            {uploadMode === 'file' ? (
              <label
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileSelect(e.dataTransfer.files?.[0]);
                }}
                className="flex flex-col items-center justify-center w-full min-h-[150px] p-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[#0052FF] dark:hover:border-blue-500 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-colors text-center"
              >
                {previewSrc ? (
                  <div className="w-full space-y-2">
                    <img
                      src={previewSrc}
                      alt="Preview karya"
                      className="max-h-44 mx-auto rounded-lg object-contain border border-slate-200 dark:border-slate-800"
                    />
                    <div className="text-xs font-mono-code text-slate-500 dark:text-slate-400 truncate">
                      {imageFileName} · Klik untuk ganti gambar
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#0052FF] mb-2">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Pilih atau seret gambar karya ke sini
                    </div>
                    <div className="text-[11px] font-mono-code text-slate-400 mt-1">
                      PNG, JPG, WebP (Maks. 10MB)
                    </div>
                  </>
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={(e) => handleFileSelect(e.target.files?.[0])}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="space-y-3">
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="/portfolio/branding/karya.jpg atau https://..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                  />
                </div>
                {previewSrc && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-2">
                    <img
                      src={previewSrc}
                      alt="Preview"
                      className="max-h-40 mx-auto object-contain rounded"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{isSubmitting ? 'Menyimpan...' : 'Simpan ke Portofolio'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
