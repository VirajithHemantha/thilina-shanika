'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PenLine, Send, Sparkles, User2 } from 'lucide-react';
import { viewportSettings } from '@/lib/animations';

interface Blessing {
  id: number;
  author: string;
  message: string;
  timestamp: string;
}

export function BlessingMessages() {
  const [blessings, setBlessings] = useState<Blessing[]>([]);

  const [newBlessing, setNewBlessing] = useState('');
  const [blessingAuthor, setBlessingAuthor] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const ornaments = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: `${8 + i * 9}%`,
        delay: i * 0.2,
        duration: 8 + (i % 4),
      })),
    []
  );

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();

    if (newBlessing.trim() && blessingAuthor.trim()) {
      const blessing: Blessing = {
        id: Math.max(...blessings.map((b) => b.id), 0) + 1,
        author: blessingAuthor.trim(),
        message: newBlessing.trim(),
        timestamp: 'just now',
      };

      setBlessings([blessing, ...blessings]);
      setNewBlessing('');
      setBlessingAuthor('');
      setShowForm(false);
    }
  };

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#02241b_0%,#044b3c_28%,#066e56_52%,#f5e6c8_100%)] px-4 py-24 md:py-32">
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-3xl" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#f5e6c8]/8 blur-3xl" />
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
            backgroundSize: '26px 26px, 90px 90px, 90px 90px',
          }}
        />
      </div>

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {ornaments.map((item) => (
          <motion.div
            key={item.id}
            className="absolute top-full h-2 w-2 rounded-full bg-[#f1d783]/50 blur-[1px]"
            style={{ left: item.left }}
            animate={{
              y: ['0%', '-130vh'],
              x: [0, item.id % 2 === 0 ? 22 : -18, 0],
              opacity: [0, 0.8, 0],
              scale: [0.7, 1.1, 0.9],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Top ceremonial divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/70" />
          <span className="text-[#e8cf7a] text-lg">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={viewportSettings}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#e6c96a]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#f5e6c8]/85">
              Shared With Love
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#f8edd7] md:text-6xl">
            Blessings <span className="text-[#e0bf58]">&</span> Wishes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#f5e6c8]/80 md:text-lg">
            A graceful space for family and friends to leave heartfelt blessings,
            warm wishes, and words of joy for the couple as they begin their new life together.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
          {/* Left formal blessing panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewportSettings}
            className="relative overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[linear-gradient(180deg,rgba(245,230,200,0.10)_0%,rgba(255,255,255,0.05)_100%)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.14),transparent_40%)]" />
            <div className="absolute inset-3 rounded-[1.5rem] border border-[#f5e6c8]/10" />

            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#e5cb77]">
                Leave Your Blessing
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light text-[#fff4df]">
                Share a message
                <br />
                from the heart
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#f5e6c8]/75">
                Your words will become part of this beautiful celebration. Leave a blessing,
                a prayer, or a cherished wish for the couple’s journey ahead.
              </p>

              <div className="mt-8 flex items-center gap-3 text-[#f1d98e]">
                <span className="h-px w-10 bg-[#C9A227]/40" />
                <span>✦</span>
                <span className="h-px w-10 bg-[#C9A227]/40" />
              </div>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  {!showForm ? (
                    <motion.div
                      key="show-button"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                    >
                      <motion.button
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => setShowForm(true)}
                        className="group inline-flex items-center gap-3 rounded-full border border-[#C9A227]/35 bg-[linear-gradient(180deg,rgba(201,162,39,0.15),rgba(201,162,39,0.08))] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#fff2d0] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all"
                      >
                        <PenLine className="h-4 w-4 text-[#e7c96e] transition-transform group-hover:rotate-[-8deg]" />
                        Write a Blessing
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="blessing-form"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      onSubmit={handleAddBlessing}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 md:grid-cols-1">
                        <label className="block">
                          <span className="mb-2 block text-[11px] uppercase tracking-[0.26em] text-[#e5cb77]">
                            Your Name
                          </span>
                          <div className="relative">
                            <User2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a98a34]" />
                            <input
                              type="text"
                              placeholder="Enter your name"
                              value={blessingAuthor}
                              onChange={(e) => setBlessingAuthor(e.target.value)}
                              className="h-12 w-full rounded-2xl border border-[#C9A227]/20 bg-[#fff8ec] pl-11 pr-4 text-sm text-[#4a3327] outline-none transition placeholder:text-[#a08f80] focus:border-[#b89220] focus:ring-2 focus:ring-[#C9A227]/20"
                              required
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[11px] uppercase tracking-[0.26em] text-[#e5cb77]">
                            Your Blessing
                          </span>
                          <textarea
                            placeholder="Write your heartfelt blessing here..."
                            value={newBlessing}
                            onChange={(e) => setNewBlessing(e.target.value)}
                            rows={5}
                            className="w-full rounded-[1.4rem] border border-[#C9A227]/20 bg-[#fff8ec] px-4 py-3 text-sm leading-7 text-[#4a3327] outline-none transition placeholder:text-[#a08f80] focus:border-[#b89220] focus:ring-2 focus:ring-[#C9A227]/20 resize-none"
                            required
                          />
                        </label>
                      </div>

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                        <motion.button
                          whileHover={{ y: -2, scale: 1.01 }}
                          whileTap={{ scale: 0.985 }}
                          type="submit"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#c9a227_0%,#ae8418_100%)] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(117,84,12,0.28)]"
                        >
                          <Send className="h-4 w-4" />
                          Post Blessing
                        </motion.button>

                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.985 }}
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="rounded-full border border-[#C9A227]/30 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#fff0cf] backdrop-blur-sm transition"
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Blessing cards */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {blessings.map((blessing, idx) => {
                const liked = likedIds.includes(blessing.id);

                return (
                  <motion.article
                    key={blessing.id}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -18, scale: 0.97 }}
                    transition={{ duration: 0.55, delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[1.8rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.98)_0%,rgba(245,230,200,0.94)_100%)] p-6 shadow-[0_22px_50px_rgba(30,12,16,0.16)] transition-all md:p-7"
                  >
                    {/* decorative layers */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_28%)]" />
                    <div className="absolute inset-3 rounded-[1.35rem] border border-[#C9A227]/12" />
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,#d1ac35_0%,#a47913_100%)]" />

                    <div className="relative flex items-start justify-between gap-5">
                      <div className="flex-1">
                        <div className="mb-4 flex items-center gap-3">
                          <motion.div
                            animate={{
                              scale: [1, 1.08, 1],
                              rotate: [0, 3, 0],
                            }}
                            transition={{
                              duration: 3,
                              delay: idx * 0.12,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[radial-gradient(circle_at_top,#fff3d0_0%,#ecd594_38%,#d0a82f_100%)] text-[#064e3b] shadow-[0_8px_20px_rgba(201,162,39,0.2)]"
                          >
                            ✦
                          </motion.div>

                          <div>
                            <h4 className="font-serif text-xl font-light text-[#022c22]">
                              {blessing.author}
                            </h4>
                            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#a38022]">
                              {blessing.timestamp}
                            </p>
                          </div>
                        </div>

                        <p className="max-w-2xl text-[15px] leading-8 text-[#4a382f]">
                          {blessing.message}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => toggleLike(blessing.id)}
                        className="relative mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/18 bg-white/70 shadow-sm backdrop-blur-sm transition"
                        aria-label="Like blessing"
                      >
                        <Heart
                          className={`h-5 w-5 transition-all ${liked
                            ? 'fill-[#b11f37] text-[#b11f37]'
                            : 'fill-[#C9A227]/15 text-[#b7952d]'
                            }`}
                        />
                      </motion.button>
                    </div>

                    {/* subtle shimmer */}
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 left-[-28%] w-[28%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      animate={{ left: ['-30%', '125%'] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        repeatDelay: 2.8 + idx * 0.4,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          viewport={viewportSettings}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">✦</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>

          <p className="font-serif text-xl font-light italic text-[#044b3c] md:text-2xl">
            Every blessing becomes part of the love we carry into this new chapter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}