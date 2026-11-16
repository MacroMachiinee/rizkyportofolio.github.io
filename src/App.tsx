import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { QuickInquiryEstimator } from './components/QuickInquiryEstimator';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVResumeModal } from './components/CVResumeModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { LogoutConfirmModal } from './components/LogoutConfirmModal';
import { Service } from './data/portfolioData';

const ADMIN_TOKEN_STORAGE_KEY = 'mr_admin_token';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<Service | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(ADMIN_TOKEN_STORAGE_KEY);
    }
    return null;
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let isMounted = true;
    const headers: Record<string, string> = {};
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    fetch('/api/auth/me', { headers })
      .then((res) => (res.ok ? res.json() : { authenticated: false }))
      .then((data) => {
        if (!isMounted) return;
        if (data?.authenticated) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          if (authToken) {
            sessionStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
            setAuthToken(null);
          }
        }
      })
      .catch(() => {
        if (isMounted) setIsAdmin(false);
      });

    return () => {
      isMounted = false;
    };
  }, [authToken]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: Service) => {
    setPreselectedService(service);
    handleOpenContact();
  };

  const handleEstimatorProceed = (scopeSummary: string) => {
    handleOpenContact();
    const contactTextarea = document.querySelector('textarea');
    if (contactTextarea) {
      contactTextarea.value = scopeSummary;
      contactTextarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  const handleLoginSuccess = (token: string) => {
    sessionStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token);
    setAuthToken(token);
    setIsAdmin(true);
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // Ignore network errors on logout
    }
    sessionStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
    setAuthToken(null);
    setIsAdmin(false);
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#090D14] text-slate-900 dark:text-slate-100 selection:bg-[#0052FF] selection:text-white transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenContact={handleOpenContact}
        isAdmin={isAdmin}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={() => setIsLogoutModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Portfolio Section */}
        <Portfolio
          isAdmin={isAdmin}
          authToken={authToken}
        />

        {/* 6. Experience Timeline */}
        <Experience />

        {/* Interactive Scope & Inquiry Estimator */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryEstimator onDirectToContact={handleEstimatorProceed} />
        </section>

        {/* 7. Contact Section */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* CV / Resume Summary Modal */}
      <CVResumeModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Admin Logout Confirmation Modal */}
      <LogoutConfirmModal
        isOpen={isLogoutModalOpen}
        onCancel={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
