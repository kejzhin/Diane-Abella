import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#FFC8DC]/70 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-slate-900 font-display">
              {PORTFOLIO_DATA.personal.fullName}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              {PORTFOLIO_DATA.personal.title} · {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
            <a href="#home" className="hover:text-[#E55E99] transition-colors">Home</a>
            <a href="#experience" className="hover:text-[#E55E99] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#E55E99] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#E55E99] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#E55E99] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-[#FFF0F6] hover:bg-[#FFEBF2] border border-[#FFC8DC]/60 rounded-xl transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E55E99]" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#FFC8DC]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Created by</span>
            <a
              href="https://www.facebook.com/Kejzhin/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#E55E99] hover:text-[#D44785] hover:underline transition-colors"
            >
              Jeric De Los Reyes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
