import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { X, Printer, MapPin, Mail, Phone, GraduationCap, CheckCircle } from 'lucide-react';

interface CVResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVResumeModal: React.FC<CVResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#0B0F19] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070B12]">
          <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500 dark:text-slate-400">
            <span className="text-[#0052FF] font-semibold">CURRICULUM VITAE</span>
            <span aria-hidden="true">/</span>
            <span>MUHAMMAD RIZKY</span>
            <span aria-hidden="true">/</span>
            <span>YOGYAKARTA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Sheet */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto text-slate-900 dark:text-white print:p-0 print:max-h-none">
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-3xl font-extrabold tracking-tight">{PERSONAL_INFO.name}</h2>
            <div className="text-sm font-semibold text-[#0052FF] dark:text-blue-400 mt-1">
              Graphic Designer · Brand &amp; Visual Specialist
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-500 dark:text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                {PERSONAL_INFO.whatsappFormatted}
              </span>
            </div>
          </div>

          {/* Profil Ringkas */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono-code uppercase text-slate-400 tracking-wider">
              Ringkasan Profesional
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Pendidikan */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono-code uppercase text-slate-400 tracking-wider">
              Pendidikan Formal
            </h3>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.degree} (Sarjana Komputer)
                  </div>
                  <div className="text-xs text-[#0052FF] font-semibold mt-0.5">
                    {PERSONAL_INFO.university} — Yogyakarta
                  </div>
                </div>
                <span className="text-xs font-mono-code text-slate-500">2020 — 2024</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                Fokus bidang: Rekayasa Perangkat Lunak, Jaringan Komputer, Arsitektur Sistem Komputer, dan Basis Data.
              </p>
            </div>
          </div>

          {/* Pengalaman */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono-code uppercase text-slate-400 tracking-wider">
              Pengalaman Kerja &amp; Praktik
            </h3>
            <div className="space-y-3">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20"
                >
                  <div className="flex items-baseline justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">{item.role}</span>
                    <span className="font-mono-code text-slate-400">{item.period.split('(')[0].trim()}</span>
                  </div>
                  <div className="text-xs text-[#0052FF] mb-1.5">{item.institution} ({item.location})</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono-code text-slate-500">
                    {item.skillsUsed.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian Utama */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono-code uppercase text-slate-400 tracking-wider">
              Keahlian Teknis &amp; Software
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">Brand &amp; Vector</div>
                <div className="text-slate-600 dark:text-slate-400 space-y-0.5">
                  <div>CorelDRAW (Master)</div>
                  <div>Adobe Illustrator</div>
                  <div>Logo &amp; Monogram</div>
                  <div>Brand Guidelines</div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">Print &amp; Packaging</div>
                <div className="text-slate-600 dark:text-slate-400 space-y-0.5">
                  <div>Pre-Press 300 DPI</div>
                  <div>CMYK Color Separation</div>
                  <div>Die-Cut Packaging</div>
                  <div>Brochure &amp; Catalog</div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">Digital &amp; Campaign</div>
                <div className="text-slate-600 dark:text-slate-400 space-y-0.5">
                  <div>Adobe Photoshop</div>
                  <div>3D Product Mockup</div>
                  <div>Instagram Carousel</div>
                  <div>Key Visual &amp; Poster</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#070B12] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono-code text-slate-400">
            STATUS: DOKUMEN RESUME RESMI
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
