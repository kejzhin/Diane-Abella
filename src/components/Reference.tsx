import React from 'react';
import { motion } from 'motion/react';
import { Quote, Building, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Reference: React.FC = () => {
  const ref = PORTFOLIO_DATA.reference;

  return (
    <section id="reference" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Executive Reference
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Trusted by leadership for accountability, communication, and meticulous execution.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl bg-gradient-to-br from-white to-[#FFF5F8] rounded-3xl p-8 sm:p-12 border border-[#FFC8DC] shadow-sm shadow-[#E55E99]/5 relative"
        >
          <Quote className="w-12 h-12 text-[#FFC8DC] absolute top-8 right-8 pointer-events-none" />

          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-display leading-relaxed italic relative z-10">
            &ldquo;{ref.endorsement}&rdquo;
          </p>

          <div className="mt-8 pt-6 border-t border-[#FFC8DC]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-slate-900 font-display">
                  {ref.name}
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-semibold text-[#E55E99] bg-[#FFF0F6] border border-[#FFC8DC]/60 rounded-lg">
                  {ref.role}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                  <Building className="w-3.5 h-3.5 text-[#E55E99]" />
                  {ref.company}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E55E99]" />
                  {ref.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
