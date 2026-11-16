import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Palette, Layers, Printer, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Palette, Layers, Printer];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
            02. KEAHLIAN &amp; KOMPETENSI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Keterampilan Teruji dalam Desain Grafis, Branding, dan Produksi Cetak.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Kombinasi keahlian visual praktis yang diasah melalui 3+ tahun pengalaman proyek kreatif bersama latar belakang akademik S1 Informatika di Universitas Alma Ata.
          </p>
        </div>

        {/* Category Tabs - Clean Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-xl max-w-fit border border-slate-200/80 dark:border-slate-800">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx] || Wrench;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0052FF]' : 'text-slate-400'}`} />
                <span>{cat.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {SKILL_CATEGORIES[activeTab].tagline}
              </p>
            </div>
            <div className="text-xs font-mono-code text-slate-400 shrink-0">
              Pilar {String(activeTab + 1).padStart(2, '0')} · Kompetensi Utama
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-mono-code font-semibold text-[#0052FF] bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md shrink-0">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono-code text-slate-400 uppercase mb-2">
                    Spesialisasi &amp; Tools:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {skill.tools.map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span className="font-medium">{tool}</span>
                        {tIdx < skill.tools.length - 1 && (
                          <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
