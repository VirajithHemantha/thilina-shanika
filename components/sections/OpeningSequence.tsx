'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface OpeningSequenceProps {
  onComplete: () => void;
}

const LotusPetal = ({ delay, duration }: { delay: number; duration: number }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [randomProps, setRandomProps] = useState({ x: 0, left: 50, windowHeight: 1000 });

  useEffect(() => {
    setIsMounted(true);
    setRandomProps({
      x: Math.random() * 100 - 50,
      left: Math.random() * 100,
      windowHeight: window.innerHeight,
    });
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="absolute w-8 h-8 pointer-events-none"
      initial={{ opacity: 0, x: 0, y: -100 }}
      animate={{ opacity: [0, 1, 1, 0], x: randomProps.x, y: randomProps.windowHeight + 100 }}
      transition={{ duration, delay, ease: 'easeIn' }}
      style={{ left: `${randomProps.left}%` }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
        <path
          d="M50 10 Q70 40 80 70 Q50 80 50 90 Q50 80 20 70 Q30 40 50 10"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    </motion.div>
  );
};

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [showPoruwa, setShowPoruwa] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowPoruwa(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary to-[#5A1515] flex items-center justify-center">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-secondary rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-secondary rounded-full" />
      </div>

      {/* Floating lotus petals */}
      {[0, 1, 2, 3, 4].map((i) => (
        <LotusPetal key={i} delay={i * 0.5} duration={5 + i * 0.5} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Poruwa Stage Illustration */}
        {showPoruwa && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-12 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 blur-3xl bg-secondary opacity-20 rounded-full" />

              {/* Stage SVG */}
              <svg
                width="240"
                height="200"
                viewBox="0 0 240 200"
                className="relative z-10"
              >
                {/* Stage platform */}
                <rect x="40" y="120" width="160" height="60" fill="url(#goldGradient)" />
                <rect x="40" y="120" width="160" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary" />

                {/* Pillars */}
                <rect x="60" y="60" width="12" height="60" fill="currentColor" className="text-secondary" />
                <rect x="108" y="60" width="12" height="60" fill="currentColor" className="text-secondary" />
                <rect x="156" y="60" width="12" height="60" fill="currentColor" className="text-secondary" />

                {/* Roof arch */}
                <path
                  d="M 50 60 Q 120 20 190 60"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-secondary"
                />

                {/* Center crown/ornament */}
                <circle cx="120" cy="30" r="8" fill="currentColor" className="text-secondary" />

                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#C9A227" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        )}

        {/* Couple names */}
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white">
              <span className="block mb-2">THILINA</span>
              <span className="text-secondary text-3xl md:text-4xl font-light mb-2">&amp;</span>
              <span className="block">SHANIKA</span>
            </h1>
            <p className="text-sm md:text-base text-ivory/80 font-light tracking-wide mt-6 mb-2">
              Groom's Parents: Mother - Dayani Abesinghe | Father - A.K.Dayarathna
            </p>
            <p className="text-sm md:text-base text-ivory/80 font-light tracking-wide mb-6">
              Bride's Parents: Mother - Rupa Thilakarathna | Father - S.K. Wijethilaka
            </p>
            <p className="text-xl md:text-2xl text-ivory font-light tracking-wide mt-2">
              Together with their families invite you
            </p>
            <p className="text-xl md:text-2xl text-ivory font-light tracking-wide">
              to celebrate their wedding
            </p>
          </motion.div>
        )}

        {/* Enter button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={onComplete}
            className="mt-16 px-8 py-3 bg-secondary text-primary hover:bg-gold-accent transition-colors duration-300 font-light text-lg tracking-widest uppercase"
          >
            Enter
          </motion.button>
        )}
      </div>
    </div>
  );
}
