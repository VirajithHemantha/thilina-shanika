'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/animations';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function CountdownTimer() {
  const weddingDate = useMemo(() => new Date('2027-05-12T09:00:00').getTime(), []);

  const getTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7ecda_0%,#f3dcc0_18%,#6f1324_62%,#2d0710_100%)] px-4 py-24 md:px-6 md:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-3xl" />
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#fff1d8]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(201,162,39,0.35) 1px, transparent 1px),
              linear-gradient(rgba(201,162,39,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,162,39,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px, 92px 92px, 92px 92px',
          }}
        />
      </div>

      {/* Floating light particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={viewportSettings}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#C9A227]/20 bg-white/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8b6816]">
              Awaiting Our Sacred Day
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#064e3b] md:text-6xl">
            Countdown to <span className="text-[#C9A227]">Forever</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5147] md:text-lg">
            Each passing moment brings us closer to a celebration of love,
            tradition, and the beginning of our life together.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* Countdown frame */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={viewportSettings}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[#C9A227]/10 blur-2xl" />
          <div className="absolute -inset-4 rounded-[2.3rem] border border-[#C9A227]/12" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[linear-gradient(180deg,rgba(92,15,29,0.95)_0%,rgba(56,8,17,0.98)_100%)] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:px-10 md:py-14">
            {/* Card glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.16),transparent_35%)]" />

            {/* Inner frame */}
            <div className="absolute inset-4 rounded-[1.6rem] border border-[#f5e6c8]/10" />

            {/* Corner ornaments */}
            <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-xl border-l border-t border-[#C9A227]/40" />
            <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-xl border-r border-t border-[#C9A227]/40" />
            <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-xl border-b border-l border-[#C9A227]/40" />
            <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-xl border-b border-r border-[#C9A227]/40" />

            <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {units.map((unit, idx) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 22, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.65, delay: 0.2 + idx * 0.1 }}
                  viewport={viewportSettings}
                  className="group text-center"
                >
                  <div className="relative mx-auto flex h-[150px] w-[150px] items-center justify-center md:h-[170px] md:w-[170px]">
                    {/* Outer gold ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20 + idx * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 rounded-full border border-[#C9A227]/25"
                    />

                    {/* Secondary ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 26 + idx * 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-[10px] rounded-full border border-[#f5e6c8]/10"
                    />

                    {/* Inner circle */}
                    <div className="absolute inset-[20px] rounded-full bg-[radial-gradient(circle_at_top,rgba(255,245,220,0.18),rgba(255,255,255,0.03)_55%,rgba(255,255,255,0.02)_100%)] backdrop-blur-sm" />

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <motion.div
                        key={unit.value}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        className="font-serif text-4xl font-light text-[#fff0d4] md:text-5xl"
                      >
                        {String(unit.value).padStart(2, '0')}
                      </motion.div>

                      <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#d8bb62] md:text-xs">
                        {unit.label}
                      </p>

                      <motion.div
                        animate={{ opacity: [0.35, 0.75, 0.35] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="mt-3 h-px w-8 bg-[#C9A227]/45"
                      />
                    </div>

                    {/* Soft glow */}
                    <div className="absolute inset-[22px] rounded-full shadow-[0_0_40px_rgba(201,162,39,0.14)]" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative divider */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#C9A227]/35" />
              <span className="text-[#C9A227]">✦</span>
              <span className="h-px w-12 bg-[#C9A227]/35" />
            </div>

            {/* Footer line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={viewportSettings}
              className="mt-10 text-center"
            >
              <p className="font-serif text-lg italic text-[#f5e6c8]/85 md:text-xl">
                The moments are gently leading us toward our most cherished day.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}