'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock3, MapPin, Sparkles, Crown } from 'lucide-react';
import { viewportSettings } from '@/lib/animations';

export function EventDetails() {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'May 12, 2027',
      detail: 'Saturday',
    },
    {
      icon: Clock3,
      label: 'Time',
      value: '9:00 AM',
      detail: 'Ceremony & Reception',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Shangri-La Colombo',
      detail: 'Lotus Ballroom',
    },
  ];

  const floatingParticles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8eddc_0%,#f4dfc2_18%,#6d1324_68%,#2c0610_100%)] px-4 py-24 md:px-6 md:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-3xl" />
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#fff1d8]/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(201,162,39,0.34) 1px, transparent 1px),
              linear-gradient(rgba(201,162,39,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,162,39,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px, 92px 92px, 92px 92px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#f5d77b]/60"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.7, 1.15, 0.7],
              y: [0, -18, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Large decorative ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full border border-[#C9A227]/10"
      />

      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/70" />
          <span className="text-[#C9A227]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={viewportSettings}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-white/30 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#b9911f]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8b6816]">
              The Celebration Details
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#064e3b] md:text-6xl">
            Wedding <span className="text-[#C9A227]">Details</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5147] md:text-lg">
            A sacred day of love, family, blessings, and timeless tradition.
            We would be honoured by your presence as we celebrate together.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* Main framed block */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={viewportSettings}
          className="relative mx-auto max-w-6xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[#C9A227]/10 blur-2xl" />
          <div className="absolute -inset-4 rounded-[2.2rem] border border-[#C9A227]/12" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[linear-gradient(180deg,rgba(92,15,29,0.95)_0%,rgba(56,8,17,0.98)_100%)] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.16),transparent_35%)]" />
            <div className="absolute inset-4 rounded-[1.6rem] border border-[#f5e6c8]/10" />

            {/* Corner ornaments */}
            <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-xl border-l border-t border-[#C9A227]/40" />
            <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-xl border-r border-t border-[#C9A227]/40" />
            <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-xl border-b border-l border-[#C9A227]/40" />
            <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-xl border-b border-r border-[#C9A227]/40" />

            {/* Center icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={viewportSettings}
              className="relative mb-10 flex justify-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[radial-gradient(circle_at_top,#f8edc8_0%,#dcb955_40%,#b8891b_100%)] shadow-[0_12px_30px_rgba(201,162,39,0.25)]">
                <Crown className="h-7 w-7 text-[#5d1321]" />
              </div>
            </motion.div>

            {/* Details grid */}
            <div className="relative z-10 grid gap-8 md:grid-cols-3 md:gap-8">
              {details.map((detail, idx) => {
                const Icon = detail.icon;

                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.15 + 0.2 }}
                    viewport={viewportSettings}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(245,230,200,0.04)_100%)] p-7 text-center backdrop-blur-sm transition-all"
                  >
                    {/* shimmer */}
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 left-[-30%] w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ left: ['-35%', '130%'] }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        repeatDelay: 2.2 + idx * 0.4,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="absolute inset-3 rounded-[1.2rem] border border-[#f5e6c8]/8" />

                    <div className="relative z-10">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: idx * 0.2,
                        }}
                        className="mb-5 flex justify-center"
                      >
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[linear-gradient(180deg,rgba(245,230,200,0.12),rgba(255,255,255,0.04))]">
                          <div className="absolute inset-2 rounded-full border border-[#f5e6c8]/10" />
                          <Icon className="relative z-10 h-8 w-8 text-[#e3c261]" />
                        </div>
                      </motion.div>

                      <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d8bb62]">
                        {detail.label}
                      </p>

                      <h3 className="font-serif text-2xl font-light leading-snug text-[#fff1d8] md:text-3xl">
                        {detail.value}
                      </h3>

                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f5e6c8]/60">
                        {detail.detail}
                      </p>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.35 + idx * 0.15 }}
                        viewport={viewportSettings}
                        className="mx-auto mt-5 h-px w-14 origin-left bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative divider */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C9A227]/35" />
              <span className="text-[#C9A227]">✦</span>
              <span className="h-px w-12 bg-[#C9A227]/35" />
            </div>

            {/* Quote / closing line */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              viewport={viewportSettings}
              className="mt-10 text-center"
            >
              <p className="font-serif text-lg italic text-[#f5e6c8]/85 md:text-xl">
                Join us for a day where two families, countless blessings, and one beautiful story come together.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional information panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5 }}
          viewport={viewportSettings}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.96)_0%,rgba(245,230,200,0.92)_100%)] px-8 py-8 shadow-[0_18px_50px_rgba(104,47,18,0.08)]">
            <div className="absolute inset-3 rounded-[1.3rem] border border-[#C9A227]/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_30%)]" />

            <div className="relative z-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a37d1e]">
                With Love & Honour
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-lg font-light leading-8 text-[#4f3d34]">
                Join us for a day of celebration as we unite two families and countless hearts in the sacred bond of matrimony. Your presence will make our celebration even more special.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}