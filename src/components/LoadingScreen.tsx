import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  // Step 1: "Hi"
  // Step 2: "I'm Diane Abella"
  // Step 3: Finish and reveal website
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    // 1. Show "Hi" for 900ms, then transition to "I'm Diane Abella"
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1100);

    // 2. Show "I'm Diane Abella" for 1300ms, then finish loading
    const timer2 = setTimeout(() => {
      setStep(3);
    }, 2500);

    // 3. Complete and notify parent
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF8FA] select-none"
    >
      {/* Soft Ambient Pastel Glows in Background */}
      <div
        aria-hidden="true"
        className="absolute w-96 h-96 bg-[#FFC8DC]/60 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute w-64 h-64 bg-[#E55E99]/15 rounded-full blur-2xl pointer-events-none translate-x-12 translate-y-12"
      />

      {/* Animated Text Sequence */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="hi"
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 1.05 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-slate-900 tracking-tight">
                Hi
              </span>
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#E55E99] animate-pulse" />
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="diane"
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-slate-900">
                I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E55E99] via-[#D44785] to-[#E55E99]">
                  Diane Abella
                </span>
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Progress Line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFC8DC]/40 overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-[#FFC8DC] via-[#E55E99] to-[#D44785]"
        />
      </div>
    </motion.div>
  );
};
