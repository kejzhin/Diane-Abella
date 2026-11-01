import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 relative bg-[#FFF0F6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Education & Foundations
            </h2>
            <p className="mt-2 text-base text-slate-600">
              A business management academic foundation empowering organizational discipline and administrative excellence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-7 sm:p-10 border border-[#FFC8DC] shadow-sm shadow-[#E55E99]/5 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Tint */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-[#FFC8DC]/30 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Degree & University (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFC8DC] to-[#FFF0F6] border border-[#FFC8DC] flex items-center justify-center text-[#E55E99] mb-5 shadow-xs">
                <GraduationCap className="w-7 h-7" />
              </div>

              <span className="text-xs font-semibold text-[#E55E99] uppercase tracking-wider">
                Undergraduate Degree
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-snug">
                {PORTFOLIO_DATA.education.degree}
              </h3>
              <p className="mt-2 text-base font-semibold text-slate-700">
                {PORTFOLIO_DATA.education.institution}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-[#E55E99]" />
                  Graduated {PORTFOLIO_DATA.education.year}
                </span>
                <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E55E99]" />
                  {PORTFOLIO_DATA.education.location}
                </span>
              </div>
            </div>

            {/* Right Column: Key Takeaways & Competency Integration (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFF8FA] rounded-2xl p-6 border border-[#FFC8DC]">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-[#E55E99]" />
                <span>Core Competencies Fostered</span>
              </h4>

              <div className="space-y-3.5">
                {PORTFOLIO_DATA.education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#E55E99] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFC8DC]/80 flex items-center justify-between text-xs text-slate-600">
                <span>Degree Conferred: 2018</span>
                <span className="text-[#E55E99] font-medium">BBA Graduate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
