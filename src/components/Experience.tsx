import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-[#FFF0F6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Work Experience
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Proven track record supporting hotel enterprise operations, account security, and large-scale telecommunications billing.
            </p>
          </motion.div>
        </div>

        {/* Roles Grid / Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: Role Selector (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isSelected = selectedRole === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedRole(exp.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white border-[#E55E99] shadow-md shadow-[#E55E99]/10 ring-1 ring-[#FFC8DC]'
                      : 'bg-white/70 hover:bg-white border-[#FFC8DC]/70 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#E55E99] px-2.5 py-1 bg-[#FFF0F6] rounded-lg border border-[#FFC8DC]/50">
                      {exp.period}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#E55E99] translate-x-1' : 'text-slate-300'
                      }`}
                    />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900 font-display">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                  </p>
                </button>
              );
            })}

            {/* Quick Context Card */}
            <div className="p-5 rounded-2xl bg-white/70 border border-[#FFC8DC]/70 text-xs text-slate-600 mt-2">
              <p className="font-semibold text-slate-800 mb-1">
                Front-Line Dedication
              </p>
              <p className="leading-relaxed text-slate-500">
                Each position represents hundreds of documented tickets, account updates, and satisfied clients handled with patience and accuracy.
              </p>
            </div>
          </div>

          {/* Right Detailed View (8 cols) */}
          <div className="lg:col-span-8">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              if (exp.id !== selectedRole) return null;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-9 border border-[#FFC8DC]/80 shadow-sm shadow-[#E55E99]/5"
                >
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FFC8DC]/60">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#E55E99] bg-[#FFF0F6] px-3 py-1.5 rounded-xl border border-[#FFC8DC]">
                        <Calendar className="w-3.5 h-3.5 text-[#E55E99]" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="mt-1 text-slate-400">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities matching resume data */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#E55E99]" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#E55E99] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Strengths */}
                  <div className="mt-8 pt-6 border-t border-[#FFC8DC]/60">
                    <span className="text-xs font-medium text-slate-500 block mb-3">
                      Core Functional Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.keyStrengths.map((str) => (
                        <span
                          key={str}
                          className="px-3 py-1 text-xs font-medium text-slate-700 bg-[#FFF5F8] border border-[#FFC8DC] rounded-xl"
                        >
                          {str}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
