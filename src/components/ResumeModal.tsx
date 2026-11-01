import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#FFC8DC] flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#FFC8DC]/80 bg-[#FFF0F6]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFEBF2] border border-[#FFC8DC] flex items-center justify-center text-[#E55E99]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 font-display">
                    {PORTFOLIO_DATA.personal.fullName} — Official Resume
                  </h3>
                  <p className="text-xs text-slate-500">
                    Service Desk & Customer Support Specialist · Cebu, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.resumeDocument}
                  download="Diane_Abella_Resume.png"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#E55E99] bg-white rounded-xl border border-[#FFC8DC] hover:bg-[#FFF0F6] transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.resumeDocument}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white rounded-xl border border-slate-200 hover:bg-[#FFF0F6] transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Size</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 text-slate-400 hover:text-[#E55E99] hover:bg-[#FFEBF2] rounded-xl transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Document Preview */}
            <div className="p-4 sm:p-6 overflow-y-auto flex justify-center bg-slate-50/50">
              <div className="max-w-2xl w-full shadow-lg rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <img
                  src={PORTFOLIO_DATA.personal.resumeDocument}
                  alt="Diane B. Abella Resume Document"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-[#FFC8DC]/80 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-2">
                <span>Contact: {PORTFOLIO_DATA.personal.email}</span>
                <span aria-hidden="true">·</span>
                <span>{PORTFOLIO_DATA.personal.formattedPhone}</span>
              </div>
              <button
                onClick={onClose}
                className="text-xs text-[#E55E99] hover:text-[#D44785] font-semibold"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
