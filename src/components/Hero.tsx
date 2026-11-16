import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, FileDown, MapPin, Clock } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onOpenContact }) => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Yogyakarta is WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Background Architectural Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker - Clean unboxed text with typographic separators */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500 dark:text-slate-400 mb-4 tracking-wide uppercase">
              <span className="text-[#0052FF] font-semibold">PORTFOLIO</span>
              <span aria-hidden="true">/</span>
              <span>S1 INFORMATIKA</span>
              <span aria-hidden="true">/</span>
              <span>UNIVERSITAS ALMA ATA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6 [text-wrap:balance]">
              Menggabungkan Estetika Desain Grafis dengan Presisi Grid Modern.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Halo, saya <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>. Berbasis di Yogyakarta, saya merancang identitas visual kreatif, desain kemasan, serta materi cetak dan digital yang presisi menggunakan CorelDRAW &amp; Adobe Creative Suite.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={scrollToPortfolio}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Lihat Karya Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors flex items-center gap-1.5"
                title="Buka Ringkasan Profil CV"
              >
                <FileDown className="w-4 h-4" />
                <span>Ringkasan CV</span>
              </button>
            </div>

            {/* Location & Real-Time Availability Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono-code text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>WIB {localTime || '07:00:00'} (UTC+7)</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                <span>Tersedia untuk Freelance &amp; Proyek Desain</span>
              </div>
            </div>
          </div>

          {/* Right Column: Swiss Modernist Visual Composition Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full min-h-[380px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 lg:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden">
              {/* Card Corner Index */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 text-xs font-mono-code text-slate-400">
                <span>IDENTITY / DISCIPLINE / SYSTEM</span>
                <span className="text-[#0052FF] font-semibold">REF: MR-2024</span>
              </div>

              {/* Graphic Composition: Design Disciplines */}
              <div className="my-auto py-6 space-y-5">
                {/* Discipline 1: Brand Identity */}
                <div className="group p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-[#0052FF]" />
                      <span>Graphic Design &amp; Brand Systems</span>
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400">3+ Thn Freelance</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    CorelDRAW · Adobe Illustrator · Logo Vector · Brand Guidelines
                  </div>
                </div>

                {/* Discipline 2: Print & Packaging */}
                <div className="group p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-cyan-500" />
                      <span>Print &amp; Packaging Layout</span>
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400">300 DPI Pre-Press</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    CMYK Separation · Die-Cut Packaging · Brosur &amp; Katalog Cetak
                  </div>
                </div>

                {/* Discipline 3: Digital & Campaign */}
                <div className="group p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-xs bg-emerald-500" />
                      <span>Digital &amp; Campaign Visuals</span>
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400">S1 Alma Ata</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Adobe Photoshop · Instagram Carousel · 3D Mockup · Key Visual
                  </div>
                </div>
              </div>

              {/* Bottom Visual Stamp */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>LULUSAN S1 INFORMATIKA</span>
                <span className="text-slate-900 dark:text-slate-200 font-medium">YOGYAKARTA, ID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Row Below Split: 4-Column Proof & Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono-code tabular-nums flex items-baseline gap-1">
                <span>{stat.value}</span>
                {idx === 0 && <span className="text-sm font-semibold text-[#0052FF]">THN</span>}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
