import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const OverviewMetrics: React.FC = () => {
  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl border border-rose-100/90 shadow-sm shadow-rose-950/5 p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-rose-100/70">
            {PORTFOLIO_DATA.metrics.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col justify-center ${
                  idx > 0 ? 'pt-4 sm:pt-0 lg:pl-8' : ''
                }`}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight tabular-nums">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                    {item.value}
                  </span>
                </span>
                <span className="mt-1 text-sm font-semibold text-slate-800">
                  {item.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
