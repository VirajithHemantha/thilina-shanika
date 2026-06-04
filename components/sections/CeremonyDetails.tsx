'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles, Crown, Heart } from 'lucide-react';
import Image from 'next/image';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'ceremony',
      title: 'Ceremony',
      timeLabel: 'Ceremony Time',
      timeValue: '9:00 AM',
      timeSub: 'Wedding ceremony',
      venueLabel: 'Venue',
      venueValue: 'Shangri-La Colombo',
      venueSub: 'Lotus Ballroom',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#021e17_0%,#043b2e_45%,#011913_100%)] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.07] mix-blend-screen"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, #C9A227 1.1px, transparent 1.1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[#10b981]/10 blur-[120px]" />
        <motion.div
          animate={{ y: [0, -22, 0], x: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-12 h-40 w-40 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 blur-[1px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-[420px] sm:h-[520px] md:h-[600px] w-full max-w-[420px] overflow-hidden rounded-[30px] md:rounded-t-[200px] md:rounded-b-[30px] border border-[#C9A227]/60 shadow-[0_20px_50px_rgba(201,162,39,0.2)] bg-[linear-gradient(180deg,#011410_0%,#022c22_55%,#010d0a_100%)]"
            >
              <div className="absolute -inset-6 rounded-t-[220px] rounded-b-[40px] border border-[#C9A227]/20 hidden md:block" />
              <div className="absolute -inset-3 rounded-t-[210px] rounded-b-[35px] border border-[#C9A227]/40 hidden md:block" />

              <Image
                src="/images/IMG_4868.JPEG"
                alt="Thilina and Shanika"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Sparkle effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-10 top-20 h-3 w-3 rounded-full bg-[#fdf8f0] blur-[2px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute right-20 bottom-32 h-4 w-4 rounded-full bg-[#C9A227] blur-[2px]"
              />
            </motion.div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#1a0408]/50 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#C9A227]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-medium">
                The Traditional Ceremony
              </span>
            </div>

            <h2 className="mb-8 font-serif text-5xl font-light leading-snug text-[#f5e6c8] md:text-7xl">
              Wedding <br />
              <span className="italic text-[#C9A227]">Ceremony</span>
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-[#f5e6c8]/70 max-w-lg">
              With immense joy in our hearts, we invite you to share our happiness as we step onto the traditional Poruwa. Join us for a beautiful celebration of love, culture, and lifelong commitment.
            </p>

            <div className="flex flex-col gap-5">
              {detailGroups.map((group, index) => {
                return (
                  <motion.div
                    key={group.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(201,162,39,0.08)' }}
                    className="group relative overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-[linear-gradient(120deg,rgba(2,44,34,0.72)_0%,rgba(4,59,46,0.55)_100%)] p-5 shadow-lg backdrop-blur-md transition-all cursor-default"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#C9A227] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]/70">{group.title} Details</p>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/30 bg-gradient-to-br from-[#044b3c] to-[#011410] shadow-inner">
                          <Clock3 className="h-5 w-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]/70 mb-1">{group.timeLabel}</p>
                          <h3 className="font-serif text-2xl text-[#f5e6c8]">{group.timeValue}</h3>
                          <p className="text-sm text-[#f5e6c8]/50 mt-1">{group.timeSub}</p>
                        </div>
                      </div>

                      <div className="h-px w-full bg-[#C9A227]/20" />

                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/30 bg-gradient-to-br from-[#044b3c] to-[#011410] shadow-inner">
                          <MapPin className="h-5 w-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]/70 mb-1">{group.venueLabel}</p>
                          <h3 className="font-serif text-2xl text-[#f5e6c8]">{group.venueValue}</h3>
                          <p className="text-sm text-[#f5e6c8]/50 mt-1">{group.venueSub}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 overflow-hidden rounded-2xl border border-[#C9A227]/20 bg-[linear-gradient(135deg,rgba(4,75,60,0.4),rgba(1,20,16,0.8))] p-6 shadow-2xl backdrop-blur-lg relative"
            >
              <div className="absolute right-0 top-0 opacity-10">
                <Crown className="w-32 h-32 -mt-8 -mr-8 text-[#C9A227]" />
              </div>

              <h4 className="text-xs uppercase tracking-widest text-[#C9A227] mb-3 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#C9A227]"></span> Guest Notes
              </h4>
              <div className="space-y-2">
                <p className="text-[#f5e6c8]/80 text-sm md:text-base"><span className="text-[#C9A227]">Dress Code:</span> Formal / Elegant Attire</p>
                <p className="text-[#f5e6c8]/80 text-sm md:text-base"><span className="text-[#C9A227]">Venue:</span> Lotus Ballroom, Shangri-La Colombo</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}