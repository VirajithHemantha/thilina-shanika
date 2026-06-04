'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden bg-gradient-to-b from-ivory via-champagne to-white">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute top-10 right-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-rose-accent/5 blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        {/* Top Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={viewportSettings}
          className="flex justify-center"
        >
          <div className="text-gold text-4xl">💍</div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={viewportSettings}
          className="space-y-4"
        >
          <h1 className="text-7xl md:text-8xl font-serif font-light text-gold leading-tight">
            THILINA &amp; SHANIKA
          </h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            viewport={viewportSettings}
            className="h-1 w-24 bg-gradient-to-r from-gold via-gold to-transparent mx-auto origin-left"
          />
        </motion.div>

        {/* Subtitle with Spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={viewportSettings}
          className="text-dark-text text-xl md:text-2xl font-sans leading-relaxed max-w-2xl mx-auto font-light"
        >
          Together with their families, joyfully invite you to celebrate their wedding
        </motion.p>

        {/* Gold Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={viewportSettings}
          className="flex justify-center gap-8 pt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-gold text-3xl"
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Date Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={viewportSettings}
          className="pt-12"
        >
          <p className="text-gold text-lg font-serif font-light tracking-widest">
            05.12.2027
          </p>
        </motion.div>
      </div>

      {/* Floating Lotus Flowers */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`lotus-${i}`}
          className="absolute text-gold text-4xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
        >
          🪷
        </motion.div>
      ))}
    </section>
  );
}
