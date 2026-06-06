'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-champagne to-background overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-5 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--primary)' }}
        />
      </div>
      <div className="absolute bottom-10 right-10 w-96 h-96 opacity-5 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Decorative floral top */}
        <motion.div
          className="mb-8 flex justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-4xl"
          >
            ✦
          </motion.div>
        </motion.div>

        {/* Main heading with names */}
        <motion.h1
          className="text-7xl md:text-8xl font-serif font-light mb-4 tracking-wide text-balance"
          style={{ color: 'var(--primary)' }}
          variants={itemVariants}
        >
          THILINA &amp; SHANIKA
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-1 mx-auto mb-8"
          style={{ backgroundColor: 'var(--primary)' }}
          variants={itemVariants}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <span className="block text-sm md:text-base opacity-75 mb-4">
            Groom's Parents: Mother - Dayani Abesinghe | Father - A.K.Dayarathna <br />
            &amp; <br />
            Bride's Parents: Mother - Rupa Thilakarathna | Father - S.K. Wijethilaka
          </span>
          Together with their families,{' '}
          <span className="font-serif">joyfully</span> invite you to celebrate
          their wedding.
        </motion.p>

        {/* Decorative sparkles */}
        <motion.div
          className="flex justify-center gap-8 text-2xl opacity-60"
          variants={itemVariants}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✧
          </motion.span>
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            style={{ color: 'var(--primary)' }}
          >
            ◆
          </motion.span>
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
          >
            ✧
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6"
          style={{ color: 'var(--primary)' }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
