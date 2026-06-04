'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.18,
    triggerOnce: true,
  });

  const galleryItems = [
    {
      id: 1,
      title: 'Engagement',
      description: 'The moment everything changed',
      image: '/images/gallery-1.jpg',
      size: 'large',
    },
    {
      id: 2,
      title: 'Together',
      description: 'Building memories every day',
      image: '/images/gallery-2.jpg',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Adventure',
      description: 'Exploring the world as one',
      image: '/images/gallery-3.jpg',
      size: 'medium',
    },
    {
      id: 4,
      title: 'Love',
      description: 'Forever starts now',
      image: '/images/gallery-4.jpg',
      size: 'large',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
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
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8eddc_0%,#f4dfc2_18%,#064e3b_68%,#022c22_100%)] px-6 py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-3xl" />
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#fff1d8]/16 blur-3xl" />
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

      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/70" />
          <span className="text-[#C9A227]">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/70" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#C9A227]/20 bg-white/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8b6816]">
              Cherished Memories
            </span>
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.04em] text-[#064e3b] md:text-6xl">
            Our <span className="text-[#C9A227]">Moments</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5147] md:text-lg">
            A collection of memories that shaped our story, captured in moments
            of laughter, love, and beautiful beginnings.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">❋</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* Gallery layout */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative ${item.size === 'large' ? 'md:min-h-[520px]' : 'md:min-h-[420px]'
                }`}
            >
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-[#C9A227]/18 bg-[linear-gradient(180deg,rgba(255,250,244,0.08)_0%,rgba(245,230,200,0.04)_100%)] shadow-[0_24px_60px_rgba(20,8,12,0.22)] md:h-full">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-[#C9A227]/8 blur-2xl" />

                {/* Inner frame */}
                <div className="absolute inset-3 z-20 rounded-[1.5rem] border border-[#f5e6c8]/12" />

                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,10,12,0.05)_0%,rgba(25,10,12,0.15)_30%,rgba(25,10,12,0.65)_100%)]" />

                {/* Gold glow overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.14),transparent_30%)] opacity-80" />

                {/* Shimmer */}
                <motion.div
                  className="pointer-events-none absolute inset-y-0 left-[-30%] z-20 w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ left: ['-35%', '130%'] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    repeatDelay: 3 + index * 0.5,
                    ease: 'easeInOut',
                  }}
                />

                {/* Corner ornaments */}
                <div className="absolute left-5 top-5 z-20 h-10 w-10 rounded-tl-xl border-l border-t border-[#C9A227]/40" />
                <div className="absolute right-5 top-5 z-20 h-10 w-10 rounded-tr-xl border-r border-t border-[#C9A227]/40" />
                <div className="absolute bottom-5 left-5 z-20 h-10 w-10 rounded-bl-xl border-b border-l border-[#C9A227]/40" />
                <div className="absolute bottom-5 right-5 z-20 h-10 w-10 rounded-br-xl border-b border-r border-[#C9A227]/40" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 z-30 p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0.92, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-md"
                  >
                    <p className="mb-3 text-[11px] uppercase tracking-[0.34em] text-[#d8bb62]">
                      Memory {String(index + 1).padStart(2, '0')}
                    </p>

                    <h3 className="font-serif text-3xl font-light text-[#fff1d8] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#f5e6c8]/85 md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-px w-10 bg-[#C9A227]/40" />
                      <span className="text-[#C9A227]">✦</span>
                      <span className="h-px w-10 bg-[#C9A227]/40" />
                    </div>
                  </motion.div>
                </div>

                {/* Hover border accent */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[#C9A227]/0"
                  whileHover={{ borderColor: 'rgba(201,162,39,0.35)' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/40" />
            <span className="text-[#C9A227]">✦</span>
            <span className="h-px w-12 bg-[#C9A227]/40" />
          </div>

          <p className="font-serif text-xl font-light italic text-[#044b3c] md:text-2xl">
            Every memory has led us gently toward this beautiful beginning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}