'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '📸', label: 'Instagram', url: '#' },
    { icon: '❤️', label: 'Love', url: '#' },
    { icon: '✨', label: 'Wishes', url: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-champagne py-20 px-4 overflow-hidden">
      {/* Decorative Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
      />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-20 w-40 h-40 rounded-full bg-gold/5 blur-2xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Left Column - Couple Info */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left space-y-4"
          >
            <h3 className="text-3xl font-serif font-light text-gold">THILINA &amp; SHANIKA</h3>
            <p className="text-dark-text font-light leading-relaxed">
              Celebrating the union of two souls and the beginning of our forever journey.
            </p>
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-3xl"
            >
              💍
            </motion.div>
          </motion.div>

          {/* Center Column - Main Message */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="text-xl font-serif font-light text-gold italic">
              "Two hearts, one love, infinite possibilities"
            </p>
            <div className="w-12 h-1 bg-gold/30 mx-auto" />
            <p className="text-dark-text font-light text-sm">
              May 12, 2027
            </p>
          </motion.div>

          {/* Right Column - Social & Links */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-right space-y-4"
          >
            <h4 className="text-lg font-serif font-light text-dark-text">Follow Our Love Story</h4>
            <div className="flex justify-center md:justify-end gap-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl hover:drop-shadow-lg transition-all cursor-pointer"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12 origin-center"
        />

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center space-y-6 py-8"
        >
          <p className="text-xl font-serif font-light text-gold italic">
            We would be honored to celebrate this beautiful moment with you.
          </p>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex justify-center gap-4 text-2xl"
          >
            {['🌹', '💍', '🪷', '✨', '🌹'].map((icon, idx) => (
              <motion.span
                key={idx}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: idx * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {icon}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gold/20 pt-8 mt-8 text-center space-y-3"
        >
          <p className="text-dark-text font-light text-sm">
            THILINA &amp; SHANIKA's Wedding Celebration
          </p>
          <p className="text-light-gray font-light text-xs">
            © {currentYear} All rights reserved. Created with love.
          </p>

          {/* Floating Particles Effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-gold text-sm"
          >
            ✨ ✨ ✨
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorations */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`footer-deco-${i}`}
          className="absolute text-gold opacity-20"
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 30, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${10 + i * 18}%`,
            bottom: `${10 + i * 5}%`,
            fontSize: `${20 + i * 3}px`,
          }}
        >
          {['🌹', '🪷', '💍', '✨', '💝'][i]}
        </motion.div>
      ))}
    </footer>
  );
}
