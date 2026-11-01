import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, Clock, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#FFF0F6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Direct Contact Information
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Feel free to reach out directly via email, phone, or connect on professional opportunities.
            </p>
          </motion.div>
        </div>

        {/* Direct Contact Cards (STRICTLY NO CONTACT FORM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#FFC8DC] shadow-sm shadow-[#E55E99]/5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] border border-[#FFC8DC]/60 text-[#E55E99] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Primary Email
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-base font-bold text-slate-900 font-display hover:text-[#E55E99] transition-colors break-all block"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Direct inbox for employment inquiries, service desk opportunities, and scheduling.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FFC8DC]/60 flex items-center justify-between gap-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#E55E99] hover:text-[#D44785]"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-[#FFF5F8] hover:bg-[#FFEBF2] border border-[#FFC8DC]/50 rounded-xl transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#FFC8DC] shadow-sm shadow-[#E55E99]/5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] border border-[#FFC8DC]/60 text-[#E55E99] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Direct Line
              </span>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="text-lg font-bold text-slate-900 font-display hover:text-[#E55E99] transition-colors block"
              >
                {PORTFOLIO_DATA.personal.formattedPhone}
              </a>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Available for phone interviews and professional discussion during daytime business hours.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FFC8DC]/60">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#E55E99] hover:bg-[#D44785] rounded-xl transition-colors w-full justify-center shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Diane Now</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#FFC8DC] shadow-sm shadow-[#E55E99]/5 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] border border-[#FFC8DC]/60 text-[#E55E99] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Current Location
              </span>
              <p className="text-base font-bold text-slate-900 font-display">
                Talisay, Cebu
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Jamestown Subd. Talisay Cebu, Philippines
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Open to on-site roles in Metro Cebu and remote technical support engagements.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FFC8DC]/60 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E55E99]" />
                <span>Cebu Time (PHT):</span>
              </span>
              <span className="font-mono font-medium text-slate-700 tabular-nums">
                {currentTime || 'UTC+8'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
