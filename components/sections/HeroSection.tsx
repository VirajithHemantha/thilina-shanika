'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Mobile View: Replace with image */}
      <div className="absolute inset-0 block sm:hidden">
        <Image
          src="/ChatGPT Image Jun 5, 2026, 01_35_31 AM.png"
          alt="Thilina and Shanika Wedding Invitation"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden sm:block">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#022c22_0%,#011913_55%,#010d0a_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(240,218,170,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,218,170,0.25) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="font-serif text-4xl font-light leading-tight tracking-[0.08em] text-[#fff7e8] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            THILINA <span className="text-[#f0daaa]">&amp;</span> SHANIKA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-5 max-w-3xl text-sm leading-relaxed text-[#f8ead0] sm:text-base md:text-lg"
          >
            With grateful hearts, we invite you to witness our traditional Poruwa marriage ceremony and celebrate this joyful beginning with our families.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 rounded-3xl border border-[#f0daaa]/45 bg-black/35 px-6 py-5 backdrop-blur-sm sm:px-10"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0daaa]">Wedding Date</p>
            <p className="mt-2 font-serif text-2xl text-[#fff7e8] sm:text-3xl">May 12, 2027</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-8 flex items-center gap-3 text-[#f0daaa]"
          >
            <Sparkles className="h-4 w-4" />
            <Heart className="h-4 w-4 fill-current" />
            <Sparkles className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
