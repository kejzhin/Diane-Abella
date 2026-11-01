import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'overview', 'experience', 'skills', 'education', 'reference', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'overview' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8FA]/92 backdrop-blur-md border-b border-[#FFC8DC]/80 shadow-xs'
          : 'bg-[#FFF8FA]/80 backdrop-blur-sm border-b border-[#FFC8DC]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#about"
          className="text-xl font-bold tracking-tight text-slate-900 font-display whitespace-nowrap shrink-0 hover:text-[#E55E99] transition-colors flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FFC8DC] to-[#FFF0F6] text-[#E55E99] flex items-center justify-center text-sm font-semibold shadow-xs border border-[#FFC8DC]/60">
            DA
          </span>
          <span>{PORTFOLIO_DATA.personal.displayName}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-[#E55E99] ${
                  isActive ? 'text-[#E55E99] font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E55E99] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Contact button) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-[#E55E99] hover:bg-[#D44785] rounded-2xl transition-all shadow-xs hover:shadow-md hover:shadow-[#E55E99]/25 active:scale-95 whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#E55E99] hover:bg-[#D44785] rounded-xl"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-[#E55E99] hover:bg-[#FFF0F6] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#FFC8DC] px-5 pt-3 pb-6 shadow-lg rounded-b-3xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5">
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-medium rounded-xl text-slate-700 hover:text-[#E55E99] hover:bg-[#FFF0F6] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
