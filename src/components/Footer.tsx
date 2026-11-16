import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-[#070B12] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <div className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#0052FF] inline-block" />
              <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Graphic Designer · Brand &amp; Visual Specialist
            </div>
            <div className="text-[11px] font-mono-code text-slate-400 mt-0.5">
              S1 Informatika — Universitas Alma Ata, Yogyakarta
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Copyright, Location & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500 dark:text-slate-400">
          <div>
            &copy; 2021 — {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>Yogyakarta, Indonesia</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-[#0052FF] dark:hover:text-blue-400 transition-colors p-1 rounded"
              title="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
