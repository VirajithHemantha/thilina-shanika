'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

export function EventTimeline() {
  const timelineEvents = [
    {
      year: '2019',
      title: 'The Beginning',
      description:
        'Our story began with a quiet spark, where two hearts found each other and life softly changed forever.',
      icon: '✦',
      accent: 'A First Encounter',
    },
    {
      year: '2023',
      title: 'A Promise Made',
      description:
        'With love, intention, and a future imagined together, a beautiful question was asked and answered with joy.',
      icon: '❋',
      accent: 'A Cherished Yes',
    },
    {
      year: '2027',
      title: 'Forever Starts Now',
      description:
        'Surrounded by family, blessings, and tradition, we begin our next chapter hand in hand and heart to heart.',
      icon: '✧',
      accent: 'A Sacred Union',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingParticles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8eddc_0%,#f3dcc0_18%,#6b1323_66%,#2b0610_100%)] px-4 py-24 md:px-6 md:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-3xl" />
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#fff1d8]/18 blur-3xl" />
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

      {/* Top decorative divider */}
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/70" />
          <span className="text-[#C9A227]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={viewportSettings}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#C9A227]/20 bg-white/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8b6816]">
              A Love Story in Moments
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#5a1220] md:text-6xl">
            Our <span className="text-[#C9A227]">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5147] md:text-lg">
            A few cherished moments that brought us here, from the first spark
            of connection to the beautiful beginning of forever.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={viewportSettings}
          className="relative"
        >
          {/* Center spine */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            viewport={viewportSettings}
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/80 to-transparent md:block origin-top"
          />

          <div className="relative space-y-14 md:space-y-16">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className="relative grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10"
                >
                  {/* Left content */}
                  <div className={`${isLeft ? 'md:block' : 'md:hidden'}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-[1.8rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.98)_0%,rgba(245,230,200,0.94)_100%)] p-7 shadow-[0_22px_50px_rgba(30,12,16,0.16)] transition-all md:p-8"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_28%)]" />
                      <div className="absolute inset-3 rounded-[1.35rem] border border-[#C9A227]/12" />

                      <motion.div
                        className="pointer-events-none absolute inset-y-0 left-[-28%] w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                        animate={{ left: ['-30%', '125%'] }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          repeatDelay: 2.4 + idx * 0.45,
                          ease: 'easeInOut',
                        }}
                      />

                      <div className="relative z-10">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#a38022]">
                          {event.year}
                        </p>
                        <h3 className="mt-3 font-serif text-3xl font-light text-[#022c22]">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#b7952d]">
                          {event.accent}
                        </p>
                        <p className="mt-5 text-[15px] leading-8 text-[#4a382f]">
                          {event.description}
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-px w-10 bg-[#C9A227]/40" />
                          <span className="text-[#C9A227]">{event.icon}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center marker */}
                  <div className="relative z-20 mx-auto">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + idx * 0.18,
                      }}
                      viewport={viewportSettings}
                      className="relative flex h-20 w-20 items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.14, 1],
                          opacity: [0.35, 0.12, 0.35],
                        }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: idx * 0.25,
                        }}
                        className="absolute inset-0 rounded-full bg-[#C9A227]/20 blur-md"
                      />

                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/28 bg-[radial-gradient(circle_at_top,#fff3d0_0%,#ecd594_38%,#d0a82f_100%)] shadow-[0_10px_28px_rgba(201,162,39,0.22)]">
                        <span className="text-xl text-[#022c22]">{event.icon}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div className={`${!isLeft ? 'md:block' : 'md:hidden'}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group relative overflow-hidden rounded-[1.8rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.98)_0%,rgba(245,230,200,0.94)_100%)] p-7 shadow-[0_22px_50px_rgba(30,12,16,0.16)] transition-all md:p-8"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_28%)]" />
                      <div className="absolute inset-3 rounded-[1.35rem] border border-[#C9A227]/12" />

                      <motion.div
                        className="pointer-events-none absolute inset-y-0 left-[-28%] w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                        animate={{ left: ['-30%', '125%'] }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          repeatDelay: 2.4 + idx * 0.45,
                          ease: 'easeInOut',
                        }}
                      />

                      <div className="relative z-10">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#a38022]">
                          {event.year}
                        </p>
                        <h3 className="mt-3 font-serif text-3xl font-light text-[#022c22]">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#b7952d]">
                          {event.accent}
                        </p>
                        <p className="mt-5 text-[15px] leading-8 text-[#4a382f]">
                          {event.description}
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-px w-10 bg-[#C9A227]/40" />
                          <span className="text-[#C9A227]">{event.icon}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.98)_0%,rgba(245,230,200,0.94)_100%)] p-6 shadow-[0_18px_40px_rgba(30,12,16,0.14)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_28%)]" />
                      <div className="absolute inset-3 rounded-[1.2rem] border border-[#C9A227]/12" />

                      <div className="relative z-10">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#a38022]">
                          {event.year}
                        </p>
                        <h3 className="mt-3 font-serif text-2xl font-light text-[#022c22]">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#b7952d]">
                          {event.accent}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[#4a382f]">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5 }}
          viewport={viewportSettings}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">✦</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>

          <p className="font-serif text-xl font-light italic text-[#5d1a26] md:text-2xl">
            From this moment onward, our story continues as one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}