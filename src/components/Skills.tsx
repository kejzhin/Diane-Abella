import React from 'react';
import { motion } from 'motion/react';
import { Cpu, CalendarCheck, MessageSquare, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'technical':
        return <Cpu className="w-5 h-5 text-[#E55E99]" />;
      case 'organizational':
        return <CalendarCheck className="w-5 h-5 text-[#E55E99]" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5 text-[#E55E99]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E55E99]" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Skills & Qualifications
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Balanced technical execution, organizational precision, and interpersonal clarity.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#FFC8DC]/80 shadow-sm shadow-[#E55E99]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#FFF0F6] border border-[#FFC8DC]/60 flex items-center justify-center mb-4">
                  {getCategoryIcon(cat.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-[#FFF5F8] border border-[#FFC8DC]/70"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#E55E99]" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-[11px] font-medium text-[#E55E99] bg-[#FFF0F6] px-2 py-0.5 rounded-lg border border-[#FFC8DC]/50">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-500 pl-5.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
