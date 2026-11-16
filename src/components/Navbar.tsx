import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Lock, LogOut } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
  isAdmin: boolean;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenContact,
  isAdmin,
  onOpenLogin,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#090D14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 bg-[#0052FF] inline-block transition-transform duration-300 group-hover:scale-125" />
            <span>MUHAMMAD RIZKY</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 text-[13.5px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#0052FF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Theme toggle + Admin Login + Hubungi Saya */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              aria-label={isDarkMode ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Admin Login / Logout Button */}
            {isAdmin ? (
              <button
                type="button"
                onClick={onLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                title="Keluar dari Mode Admin"
              >
                <LogOut className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Keluar Admin</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenLogin}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                title="Login Admin Website"
              >
                <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Login Admin</span>
              </button>
            )}

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 border-b border-slate-100 dark:border-slate-800/60 hover:text-[#0052FF] dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              {isAdmin ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Keluar Admin</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                  <span>Login Admin</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#0052FF] hover:bg-[#0041CC] rounded-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>Konsultasi Proyek / Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
