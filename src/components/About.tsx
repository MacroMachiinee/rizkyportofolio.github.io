import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const approaches = [
    {
      num: '01',
      title: 'Disiplin Grid & Tipografi Swiss',
      description: 'Dalam desain grafis, saya mengutamakan kejelasan fungsi, rasio proporsi yang seimbang, dan keterbacaan tinggi. Setiap elemen visual memiliki tujuan komunikasi yang nyata, bukan sekadar hiasan.',
    },
    {
      num: '02',
      title: 'Pemikiran Analitis Informatika',
      description: 'Latar belakang S1 Informatika dari Universitas Alma Ata membekali saya dengan cara berpikir terstruktur, ketelitian matematis dalam proporsi grid, serta alur kerja desain digital yang rapi dan sistematis.',
    },
    {
      num: '03',
      title: 'Orientasi Kualitas & Kesiapan Produksi',
      description: 'Dari file vektor CorelDRAW dengan separasi warna CMYK hingga garis potong pisau (die-cut) kemasan, saya memastikan setiap desain siap diproduksi di percetakan maupun media digital tanpa kendala teknis.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
            01. PROFIL &amp; LATAR BELAKANG
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Menjembatani Kreativitas Desain Visual dengan Presisi Sistem Grid.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              Saya adalah seorang <strong className="text-slate-900 dark:text-white font-semibold">Graphic Designer &amp; Visual Brand Specialist</strong> yang berdomisili di Kota Pelajar Yogyakarta, Indonesia.
            </p>
            <p>
              Perjalanan profesional saya dimulai dari ketertarikan mendalam pada seni visual digital dan tipografi. Selama lebih dari <strong className="text-slate-900 dark:text-white font-semibold">3 tahun berkarir secara freelance</strong>, saya telah membantu puluhan pemilik bisnis, UMKM, dan inisiatif komunitas menciptakan identitas visual yang berbobot—mulai dari logo vektor, materi promosi cetak resolusi tinggi, hingga kemasan produk.
            </p>
            <p>
              Sebagai lulusan <strong className="text-slate-900 dark:text-white font-semibold">S1 Informatika dari Universitas Alma Ata</strong>, saya memadukan kepekaan estetika visual dengan kedisiplinan berpikir analitis—mulai dari merancang sistem monogram geometris, tata letak editorial multi-halaman, olah foto komersial, hingga menyiapkan master file pra-cetak beresolusi tinggi.
            </p>

            {/* Core Values / Work Approach */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono-code">
                Pendekatan Kerja (Work Approach)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {approaches.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0B0F19] hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-xs font-mono-code font-bold text-[#0052FF] bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded shrink-0">
                        {item.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info & Specification Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 sm:p-7 shadow-xs">
              <div className="text-xs font-mono-code text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3 mb-5 flex items-center justify-between">
                <span>DATA PRIBADI &amp; KREDENSIAL</span>
                <span className="text-emerald-500 font-semibold">TERVERIFIKASI</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-slate-400 text-xs font-mono-code">NAMA LENGKAP</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.name}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-slate-400 text-xs font-mono-code">PENDIDIKAN</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.degree}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {PERSONAL_INFO.university} (Yogyakarta)
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-slate-400 text-xs font-mono-code">PENGALAMAN KERJA</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.experienceYears}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Desain Grafis, Branding, Kemasan &amp; Cetak
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-slate-400 text-xs font-mono-code">LOKASI &amp; ZONA WAKTU</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Waktu Indonesia Barat (WIB / UTC+7)
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-slate-400 text-xs font-mono-code">MODALITAS KERJA</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    On-Site (Yogyakarta) &amp; Remote (Seluruh Indonesia)
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="text-slate-400 text-xs font-mono-code">BAHASA</div>
                  <div className="font-semibold text-slate-900 dark:text-white mt-0.5">
                    Bahasa Indonesia (Native) · English (Komprehensi Teknis)
                  </div>
                </div>
              </div>
            </div>

            {/* Alma Ata Accreditation / Highlight Badge Card */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-50/40 dark:bg-blue-950/20 p-5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#0052FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Fakultas Sains &amp; Teknologi — S1 Informatika
                  </div>
                  <div className="mt-1 text-slate-600 dark:text-slate-400">
                    Universitas Alma Ata Yogyakarta. Latar belakang akademik formal memberikan ketelitian struktural dan penguasaan perangkat lunak digital yang kuat dalam setiap karya desain.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
