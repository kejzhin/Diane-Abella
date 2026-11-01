import React from 'react';
import { motion } from 'motion/react';
import { KeyRound, LifeBuoy, FileSpreadsheet, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CareerOverview: React.FC = () => {
  const pillars = [
    {
      title: "Helpdesk & Ticket Management",
      description:
        "Handling user and employee support requests with rapid ticket creation, priority triage, and end-to-end status tracking until full resolution.",
      icon: LifeBuoy,
    },
    {
      title: "Password Reset & Identity Support",
      description:
        "Resolving authentication friction, user lockouts, and submitting access requests under compliance protocols for hotel and enterprise teams.",
      icon: KeyRound,
    },
    {
      title: "Billing & Customer Advocacy",
      description:
        "Deep analytical rigor from Verizon customer operations: breaking down complex bills, resolving disputes amicably, and offering cost-saving solutions.",
      icon: HeartHandshake,
    },
    {
      title: "Administrative Operations",
      description:
        "Systematic record-keeping, schedule coordination, and adherence to service level agreements powered by a Bachelor of Business Administration background.",
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="overview" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight text-balance">
              Career Overview & Support Philosophy
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {PORTFOLIO_DATA.personal.extendedBio}
            </p>
          </motion.div>
        </div>

        {/* 4 Pillars Grid with Soft Rounded Pastel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#FFC8DC]/80 shadow-sm shadow-[#E55E99]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0F6] text-[#E55E99] border border-[#FFC8DC]/60 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#E55E99] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Standard Operating Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
