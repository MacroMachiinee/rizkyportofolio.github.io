import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

interface QuickInquiryEstimatorProps {
  onDirectToContact: (scopeSummary: string) => void;
}

export const QuickInquiryEstimator: React.FC<QuickInquiryEstimatorProps> = ({ onDirectToContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<'design' | 'print' | 'packaging' | 'digital'>('design');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Logo Vektor & Brand Guide',
  ]);

  const scopeData = {
    design: [
      { id: 'logo', label: 'Logo Vektor & Brand Guide', est: '2-4 Hari' },
      { id: 'stationery', label: 'Alat Tulis Kantor (Kartu Nama, Kop, Map)', est: '1-2 Hari' },
      { id: 'vector-trace', label: 'Redraw / Tracing Logo Vektor Presisi', est: '1 Hari' },
      { id: 'brand-refresh', label: 'Rebranding & Penyegaran Identitas Visual', est: '3-5 Hari' },
    ],
    print: [
      { id: 'brochure', label: 'Brosur & Flyer Lipat Siap Cetak (300 DPI)', est: '1-2 Hari' },
      { id: 'banner', label: 'Banner, Spanduk & Backdrop Pameran', est: '1-2 Hari' },
      { id: 'catalog', label: 'Katalog Produk / Company Profile Cetak', est: '4-7 Hari' },
      { id: 'poster-cert', label: 'Poster Acara, ID Card & Sertifikat Cetak', est: '1-2 Hari' },
    ],
    packaging: [
      { id: 'pouch', label: 'Desain Standing Pouch & Pisau Pon (Die-Cut)', est: '3-5 Hari' },
      { id: 'box-packaging', label: 'Desain Kemasan Dus Box & Paper Bag', est: '3-5 Hari' },
      { id: 'label-sticker', label: 'Label Botol, Jar & Stiker Produk Kiss-Cut', est: '1-3 Hari' },
      { id: 'mockup-3d', label: 'Visualisasi 3D Product Mockup Realistis', est: '1-2 Hari' },
    ],
    digital: [
      { id: 'ig-carousel', label: 'Paket Feed & Carousel Instagram (10-15 Slide)', est: '2-3 Hari' },
      { id: 'story-template', label: 'Template Instagram Story & Konten Promosi', est: '1-2 Hari' },
      { id: 'marketplace-banner', label: 'Banner Toko Marketplace & Flyer WhatsApp', est: '1-2 Hari' },
      { id: 'event-visual', label: 'Key Visual Event, E-Sertifikat & Virtual BG', est: '2-3 Hari' },
    ],
  };

  const toggleItem = (label: string) => {
    setSelectedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const categoryLabels: Record<'design' | 'print' | 'packaging' | 'digital', string> = {
    design: 'Desain Grafis & Logo',
    print: 'Materi Cetak & Publikasi',
    packaging: 'Kemasan & Label Produk',
    digital: 'Konten Digital & Sosmed',
  };

  const handleProceed = () => {
    const summary = `Halo Muhammad Rizky, saya telah memilih estimasi kebutuhan proyek:
- Kategori: ${categoryLabels[selectedCategory]}
- Rincian: ${selectedItems.join(', ')}

Mohon konfirmasi ketersediaan dan detail langkah selanjutnya.`;
    onDirectToContact(summary);
  };

  return (
    <div className="my-16 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide">
            <Calculator className="w-3.5 h-3.5" />
            <span>Fitur Interaktif · Scope &amp; Estimasi Proyek</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
            Rencanakan Kebutuhan Desain Grafis &amp; Branding Anda
          </h3>
        </div>
        <div className="text-xs font-mono-code text-slate-400">
          Langkah 1 dari 2
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((catId) => (
          <button
            key={catId}
            type="button"
            onClick={() => {
              setSelectedCategory(catId);
              setSelectedItems([]);
            }}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === catId
                ? 'bg-[#0052FF] text-white font-semibold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {categoryLabels[catId]}
          </button>
        ))}
      </div>

      {/* Checkbox Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {scopeData[selectedCategory].map((item) => {
          const isChecked = selectedItems.includes(item.label);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.label)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                isChecked
                  ? 'border-[#0052FF] bg-blue-50/30 dark:bg-blue-950/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-transparent'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-xs border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                  isChecked
                    ? 'border-[#0052FF] bg-[#0052FF] text-white'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-900 dark:text-white">
                  {item.label}
                </div>
                <div className="text-[11px] font-mono-code text-slate-400 mt-0.5">
                  Estimasi pengerjaan: {item.est}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          Terpilih: <strong className="text-slate-900 dark:text-white">{selectedItems.length} item</strong> kebutuhan.
        </div>

        <button
          type="button"
          disabled={selectedItems.length === 0}
          onClick={handleProceed}
          className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          <span>Lanjutkan ke Form Kontak &amp; WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
