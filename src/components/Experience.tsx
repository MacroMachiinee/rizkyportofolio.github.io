import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070B12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
            05. PENGALAMAN &amp; REKAM JEJAK
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Perjalanan Profesional &amp; Fondasi Akademik Informatika.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Rekam jejak nyata 3+ tahun dalam melayani klien desain grafis independen, pemeliharaan sistem komputer, dan penyelesaian studi sarjana di Universitas Alma Ata.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-32 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-800">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              {/* Left Date / Period Column */}
              <div className="md:w-32 shrink-0 md:text-right pt-0.5">
                <span className="text-xs font-mono-code font-bold text-slate-900 dark:text-white">
                  {item.period.split('—')[0].trim()}
                </span>
                <div className="text-[11px] font-mono-code text-[#0052FF] dark:text-blue-400 mt-0.5">
                  {item.type}
                </div>
              </div>

              {/* Center Timeline Node */}
              <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#0B0F19] border-2 border-slate-300 dark:border-slate-700 group-hover:border-[#0052FF] dark:group-hover:border-blue-500 transition-colors shrink-0 -ml-[19px] z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
              </div>

              {/* Right Content Card */}
              <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono-code">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#0052FF] dark:text-blue-400 mb-4">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {item.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Used Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  {item.skillsUsed.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-0.5 text-xs font-mono-code bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
