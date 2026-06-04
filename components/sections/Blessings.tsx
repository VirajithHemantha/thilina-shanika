'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PenLine, Sparkles, Send, UserRound } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Blessing {
  id: string;
  name: string;
  message: string;
}

export default function Blessings() {
  const { ref, inView } = useInView({
    threshold: 0.18,
    triggerOnce: true,
  });

  const [blessings, setBlessings] = useState<Blessing[]>([]);

  const [newBlessing, setNewBlessing] = useState('');
  const [newName, setNewName] = useState('');

  const floatingDots = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
      })),
    []
  );

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();

    if (newBlessing.trim() && newName.trim()) {
      const blessing: Blessing = {
        id: Date.now().toString(),
        name: newName.trim(),
        message: newBlessing.trim(),
      };

      setBlessings([blessing, ...blessings]);
      setNewBlessing('');
      setNewName('');
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#02241b_0%,#044b3c_24%,#065f46_50%,#f5e6c8_100%)] px-6 py-24 md:px-8 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-3xl" />
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#f5e6c8]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(201,162,39,0.35) 1px, transparent 1px),
              linear-gradient(rgba(201,162,39,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,162,39,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px, 90px 90px, 90px 90px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingDots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#f5d77b]/60"
            style={{ left: dot.left, top: dot.top }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.7, 1.15, 0.7],
              y: [0, -18, 0],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/70" />
          <span className="text-[#e4c86c]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#e6c96a]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#f5e6c8]/85">
              Shared With Love
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#f9eed7] md:text-6xl">
            Blessings <span className="text-[#d9b84d]">&</span> Wishes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#f5e6c8]/80 md:text-lg">
            A graceful guestbook of heartfelt words, warm wishes, and loving
            blessings for the couple as they begin their new chapter together.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr]">
          {/* Blessing form panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[linear-gradient(180deg,rgba(245,230,200,0.12)_0%,rgba(255,255,255,0.05)_100%)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.24)] backdrop-blur-md md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.14),transparent_40%)]" />
            <div className="absolute inset-3 rounded-[1.5rem] border border-[#f5e6c8]/10" />

            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#e5cb77]">
                Leave Your Blessing
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light text-[#fff4df]">
                Share a message
                <br />
                from the heart
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#f5e6c8]/75">
                Your blessing will become part of this celebration, treasured
                alongside the love and joy of the day.
              </p>

              <div className="mt-8 flex items-center gap-3 text-[#f1d98e]">
                <span className="h-px w-10 bg-[#C9A227]/40" />
                <span>✦</span>
                <span className="h-px w-10 bg-[#C9A227]/40" />
              </div>

              <form onSubmit={handleAddBlessing} className="mt-8 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.26em] text-[#e5cb77]">
                    Your Name
                  </span>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a98a34]" />
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-2xl border border-[#C9A227]/20 bg-[#fff8ec] pl-11 pr-4 text-sm text-[#4a3327] outline-none transition placeholder:text-[#a08f80] focus:border-[#b89220] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.26em] text-[#e5cb77]">
                    Your Blessing
                  </span>
                  <textarea
                    value={newBlessing}
                    onChange={(e) => setNewBlessing(e.target.value)}
                    placeholder="Write your blessing or wishes..."
                    rows={5}
                    className="w-full resize-none rounded-[1.4rem] border border-[#C9A227]/20 bg-[#fff8ec] px-4 py-3 text-sm leading-7 text-[#4a3327] outline-none transition placeholder:text-[#a08f80] focus:border-[#b89220] focus:ring-2 focus:ring-[#C9A227]/20"
                  />
                </label>

                <motion.button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#c9a227_0%,#ae8418_100%)] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(117,84,12,0.28)]"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Send className="h-4 w-4" />
                  Send Blessing
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Blessings list */}
          <div className="space-y-6">
            <AnimatePresence>
              {blessings.map((blessing, index) => (
                <motion.article
                  key={blessing.id}
                  initial={{ opacity: 0, y: 22, scale: 0.97 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 22, scale: 0.97 }
                  }
                  transition={{ duration: 0.65, delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.98)_0%,rgba(245,230,200,0.94)_100%)] p-6 shadow-[0_22px_50px_rgba(30,12,16,0.16)] transition-all md:p-7"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_28%)]" />
                  <div className="absolute inset-3 rounded-[1.35rem] border border-[#C9A227]/12" />
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,#d1ac35_0%,#a47913_100%)]" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                          rotate: [0, 4, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.12,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[radial-gradient(circle_at_top,#fff3d0_0%,#ecd594_38%,#d0a82f_100%)] text-[#064e3b] shadow-[0_8px_20px_rgba(201,162,39,0.2)]"
                      >
                        ✦
                      </motion.div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#a38022]">
                          Blessing From
                        </p>
                        <h4 className="font-serif text-xl font-light text-[#022c22]">
                          {blessing.name}
                        </h4>
                      </div>
                    </div>

                    <p className="max-w-2xl text-[15px] leading-8 text-[#4a382f]">
                      {blessing.message}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#b08a1f]">
                        <Heart className="h-4 w-4 fill-[#b08a1f]/20" />
                        <span className="text-[11px] uppercase tracking-[0.24em]">
                          With Love
                        </span>
                      </div>

                      <motion.div
                        className="text-[#C9A227]/50"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        ✧
                      </motion.div>
                    </div>
                  </div>

                  {/* subtle shimmer */}
                  <motion.div
                    className="pointer-events-none absolute inset-y-0 left-[-28%] w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    animate={{ left: ['-30%', '125%'] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatDelay: 2.6 + index * 0.4,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer stats / summary */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">✦</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>

          <p className="font-serif text-xl font-light italic text-[#044b3c] md:text-2xl">
            {blessings.length} heartfelt wishes shared with love
          </p>
        </motion.div>
      </div>
    </section>
  );
}