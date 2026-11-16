import React from 'react';
import { SERVICES, Service } from '../data/portfolioData';
import { ArrowUpRight, Check, Palette, Printer, Package, Layers } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceIcons: Record<string, React.ElementType> = {
    'graphic-design': Palette,
    'print-layout': Printer,
    'packaging-design': Package,
    'digital-design': Layers,
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070B12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
            03. LAYANAN PROFESIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Solusi Komprehensif Desain Grafis, Branding &amp; Materi Cetak.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tersedia untuk proyek freelance, pembuatan identitas merek bisnis, desain kemasan produk, hingga materi promosi cetak dan digital.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.id] || Palette;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-7 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs relative group"
              >
                <div>
                  {/* Service Top Row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-[#0052FF]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-code text-slate-400">
                      SERVICE #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono-code font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
                      Ruang Lingkup &amp; Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 mb-6 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Ideal untuk: </span>
                    <span className="text-slate-600 dark:text-slate-400">{service.idealFor}</span>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                    <span>{service.tools.join(' · ')}</span>
                  </div>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0052FF] hover:text-[#0041CC] dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Konsultasikan Layanan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
