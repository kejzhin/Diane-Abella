import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CareerOverview } from './components/CareerOverview';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Reference } from './components/Reference';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Structure (Reveals smoothly once loading completes) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen flex flex-col bg-[#FFF8FA] text-slate-800 relative selection:bg-[#FFC8DC] selection:text-[#831843]"
      >
        {/* 
          Static Header: Pinned at top (fixed position), 
          ensuring content scrolls smoothly behind it with backdrop blur
        */}
        <Header onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <CareerOverview />
          <Experience />
          <Skills />
          <Education />
          <Reference />
          <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Document Lightbox Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </motion.div>
    </>
  );
}
