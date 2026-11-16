import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, Service } from '../data/portfolioData';
import { Mail, MessageSquare, Instagram, Linkedin, Send, Copy, Check, ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';

interface ContactProps {
  preselectedService?: Service | null;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('graphic-design');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
      setMessage(`Halo Muhammad Rizky, saya tertarik berkonsultasi mengenai layanan "${preselectedService.title}". Mohon info ketersediaan dan detail alur kerjanya.`);
    }
  }, [preselectedService]);

  const serviceOptions = [
    { id: 'graphic-design', label: 'Graphic Design & Visual Identity' },
    { id: 'print-layout', label: 'Print & Publication Layout' },
    { id: 'packaging-design', label: 'Packaging & Product Label Design' },
    { id: 'digital-design', label: 'Social Media & Digital Campaign' },
    { id: 'general-inquiry', label: 'Konsultasi Umum / Lainnya' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const constructMessage = () => {
    const serviceName = serviceOptions.find((s) => s.id === selectedServiceId)?.label || 'Konsultasi';
    return `Halo Muhammad Rizky,

Nama: ${name || 'Calon Klien'}
Kontak: ${emailOrPhone || '-'}
Kategori: ${serviceName}

Pesan:
${message || 'Saya ingin mendiskusikan kebutuhan desain grafis / branding.'}

(Dikirim melalui Portofolio Website)`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setSubmittedStatus({ type: 'error', text: 'Silakan masukkan nama Anda terlebih dahulu.' });
      return;
    }
    const text = encodeURIComponent(constructMessage());
    const waUrl = `https://wa.me/${PERSONAL_INFO.whatsapp.replace('+', '')}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmittedStatus({ type: 'success', text: 'Pesan berhasil disiapkan untuk dikirim via WhatsApp!' });
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setSubmittedStatus({ type: 'error', text: 'Silakan masukkan nama Anda terlebih dahulu.' });
      return;
    }
    const subject = encodeURIComponent(`[Inquiry Portofolio] Konsultasi Proyek dari ${name}`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedStatus({ type: 'success', text: 'Klien email Anda dibuka dengan draf pesan otomatis.' });
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(constructMessage());
    setSubmittedStatus({ type: 'success', text: 'Draf pesan berhasil disalin ke clipboard!' });
    setTimeout(() => setSubmittedStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono-code text-[#0052FF] dark:text-blue-400 uppercase tracking-wide mb-2">
            06. KONTAK &amp; DISKUSI PROYEK
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight [text-wrap:balance]">
            Mari Berdiskusi dan Wujudkan Proyek Anda.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Terbuka untuk kolaborasi proyek desain grafis freelance, perancangan identitas merek, desain kemasan, maupun materi promosi bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contacts & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 sm:p-7 shadow-xs space-y-6">
              <div className="text-xs font-mono-code text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                <span>SALURAN KOMUNIKASI LANGSUNG</span>
                <span className="text-emerald-500 font-semibold">RESPON CEPAT</span>
              </div>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent('Halo Muhammad Rizky, saya menemukan portofolio Anda dan ingin berkonsultasi mengenai proyek.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-xs sm:text-sm font-mono-code text-slate-600 dark:text-slate-300 mt-0.5">
                    {PERSONAL_INFO.whatsappFormatted}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Cocok untuk chat cepat, konsultasi kilat, dan kirim file.
                  </div>
                </div>
              </a>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-[#0052FF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Email Resmi</span>
                      <button
                        onClick={handleCopyEmail}
                        className="text-xs font-mono-code text-[#0052FF] hover:underline flex items-center gap-1"
                        title="Salin Alamat Email"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm font-mono-code text-slate-700 dark:text-slate-200 mt-0.5 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      Ideal untuk pengiriman brief resmi, lampiran dokumen, dan penawaran.
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels: Instagram & LinkedIn */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-[#0052FF]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Base Location & Time */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono-code text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Yogyakarta, D.I. Yogyakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>WIB (UTC+07:00) · Aktif Setiap Hari Kerja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] p-6 sm:p-8 shadow-xs">
              <div className="text-xs font-mono-code text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3 mb-6 flex items-center justify-between">
                <span>FORMULIR KONSULTASI PROYEK</span>
                <span className="text-[#0052FF] font-semibold">LANGSUNG TERHUBUNG</span>
              </div>

              {submittedStatus && (
                <div
                  className={`mb-6 p-3.5 rounded-xl border text-xs flex items-center gap-2 animate-in fade-in ${
                    submittedStatus.type === 'error'
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-500/30 text-red-800 dark:text-red-200'
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-800 dark:text-emerald-200'
                  }`}
                >
                  <Check className={`w-4 h-4 shrink-0 ${submittedStatus.type === 'error' ? 'text-red-500' : 'text-emerald-500'}`} />
                  <span>{submittedStatus.text}</span>
                </div>
              )}

              <form className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-bold font-mono-code text-slate-800 dark:text-slate-200 uppercase mb-1.5">
                    Nama Lengkap / Instansi <span className="text-[#0052FF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso (Nusa Creative)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                  />
                </div>

                {/* Email or WhatsApp */}
                <div>
                  <label className="block text-xs font-bold font-mono-code text-slate-800 dark:text-slate-200 uppercase mb-1.5">
                    Nomor WhatsApp atau Email Kontak <span className="text-[#0052FF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 0812-xxxx-xxxx atau nama@email.com"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold font-mono-code text-slate-800 dark:text-slate-200 uppercase mb-1.5">
                    Kebutuhan Layanan
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-xs font-bold font-mono-code text-slate-800 dark:text-slate-200 uppercase mb-1.5">
                    Deskripsi Kebutuhan atau Permasalahan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan gambaran singkat kebutuhan desain logo, kemasan produk, atau materi promosi yang ingin dibuat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Action Buttons Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Kirim via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="px-3.5 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
                    title="Salin isi pesan ke clipboard"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Pesan</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-mono-code pt-2">
                  * Pesan Anda aman dan langsung diterima secara privat tanpa perantara pihak ketiga.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
