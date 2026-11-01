import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-18 sm:pt-20 pb-8 sm:pb-16 overflow-hidden">
      <span id="about" className="sr-only" />
      {/* Soft Pastel Ambient Gradients in Background using #FFC8DC & #E55E99 */}
      <div
        aria-hidden="true"
        className="absolute top-6 right-1/4 -z-10 w-96 h-96 bg-[#FFC8DC]/50 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-24 left-10 -z-10 w-80 h-80 bg-[#FFEBF2]/60 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 -z-10 w-72 h-72 bg-[#FFC8DC]/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Typographic Presentation (7 cols) - Adjusted down and shifted to the right */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-start pt-5 sm:pt-8 lg:pt-11 pl-1 sm:pl-4 lg:pl-8"
          >
            {/* Display Headline with #E55E99 Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance leading-[1.15]">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E55E99] via-[#D44785] to-[#E55E99]">{PORTFOLIO_DATA.personal.displayName}</span>.
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-normal text-slate-700">
                Delivering reliable helpdesk support & thoughtful customer care.
              </span>
            </h1>

            {/* Career Overview Narrative */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.careerOverview}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary Action: Explore Work Experience */}
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#E55E99] to-[#D44785] hover:from-[#D44785] hover:to-[#BF3774] rounded-2xl shadow-sm shadow-[#E55E99]/25 hover:shadow-md hover:shadow-[#E55E99]/30 transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Explore Work Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              {/* Secondary Action: Get in Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#E55E99] bg-white hover:bg-[#FFF0F6] border border-[#FFC8DC] rounded-2xl shadow-xs transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowDown className="w-4 h-4 text-[#E55E99]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Natural Profile Picture (NO SHAPE, completely freeform silhouette) (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-end relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]"
          >
            {/* Ambient soft glow directly behind her using #FFC8DC */}
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-6 top-10 bg-gradient-to-t from-[#FFC8DC]/60 via-[#FFEBF2]/40 to-transparent blur-2xl pointer-events-none -z-10"
            />

            {/* Profile Picture: Clean natural silhouette with zero shapes wrapping it */}
            <img
              src={PORTFOLIO_DATA.personal.profileImage}
              alt="Diane B. Abella - Service Desk Specialist"
              referrerPolicy="no-referrer"
              className="w-auto h-[440px] sm:h-[500px] lg:h-[560px] max-w-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(229,94,153,0.12)] z-10 select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
