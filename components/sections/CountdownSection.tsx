'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo, useState } from 'react';
import { Heart, Stars, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
}

export default function CountdownSection() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const targetDate = useMemo(() => new Date('2027-05-12T09:00:00').getTime(), []);

  const getTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      milliseconds: Math.floor((difference % 1000) / 10),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  const difference = targetDate - new Date().getTime();
  const isCloseSoon = difference > 0 && difference < 30 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const intervalTime = isCloseSoon ? 33 : 1000;
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetDate, isCloseSoon]);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (isCloseSoon) {
    countdownItems.push({ label: 'Milliseconds', value: timeLeft.milliseconds ?? 0 });
  }

  const floatingHearts = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 8,
  }));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FAF6F0_0%,#e6f4f0_50%,#bfe3d6_100%)] px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Premium Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] top-[8%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-br from-[#064E3B]/30 to-[#C9A227]/15 opacity-80 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="absolute -right-[10%] top-[32%] h-[42vw] w-[42vw] rounded-full bg-gradient-to-tl from-[#064E3B]/25 to-[#FAF6F0]/20 opacity-70 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -35, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-[-20%] left-[18%] h-[44vw] w-[44vw] rounded-full bg-[#064E3B]/15 opacity-60 blur-[110px]"
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12px 12px, rgba(6,78,59,0.15) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Floating Ornaments */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[#C9A227]/30"
            style={{ left: heart.left, top: heart.top }}
            animate={{
              y: [0, -90, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.45, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white/70 px-5 py-2.5 shadow-[0_10px_30px_rgba(6,78,59,0.1)] backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#064e3b]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#064e3b] sm:text-sm">
              The Big Day Approaches
            </span>
            <Sparkles className="h-4 w-4 text-[#064e3b]" />
          </motion.div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#064e3b] sm:text-5xl md:text-7xl">
            Counting Down to <span className="relative inline-block text-[#C9A227]">
              Forever
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="#C9A227"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#064e3b]/80 sm:text-lg">
            Every second brings us closer to our blessed wedding day. We cannot wait to celebrate this grace-filled moment with you.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-[#064E3B]/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(230,247,240,0.6)_100%)] p-4 shadow-[0_20px_70px_rgba(6,78,59,0.1)] backdrop-blur-xl sm:p-6 md:p-8">
          <div className={`grid gap-3 md:gap-6 ${isCloseSoon
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'
              : 'grid-cols-2 md:grid-cols-4'
            }`}>
            {countdownItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.1,
                  type: "spring",
                  bounce: 0.35
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[1.8rem] border border-[#064E3B]/25 bg-[linear-gradient(160deg,rgba(255,255,255,0.95)_0%,rgba(224,245,237,0.88)_100%)] p-5 shadow-[0_12px_30px_rgba(6,78,59,0.15)] transition-all duration-300 group-hover:shadow-[0_20px_45px_rgba(6,78,59,0.24)] md:p-7">
                  <div className="absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(6,78,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,78,59,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-[#C9A227]/30" />
                  <div className="absolute -left-6 -bottom-6 h-16 w-16 rounded-full border border-[#C9A227]/20" />

                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="relative flex h-[64px] w-full items-center justify-center overflow-hidden sm:h-[78px] md:h-[96px]">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={item.value}
                          initial={{ y: 40, opacity: 0, scale: 0.65 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          exit={{ y: -40, opacity: 0, scale: 0.65 }}
                          transition={{
                            type: "spring",
                            stiffness: 370,
                            damping: 24,
                            mass: 1
                          }}
                          className="absolute font-serif text-5xl font-semibold text-[#064e3b] drop-shadow-[0_2px_8px_rgba(6,78,59,0.2)] sm:text-6xl md:text-7xl"
                        >
                          {String(item.value).padStart(2, '0')}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    <div className="mt-3 rounded-full border border-[#C9A227]/35 bg-white/75 px-3 py-1.5 shadow-sm md:mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9A227] md:text-xs">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 text-[#C9A227]">
            <Stars size={14} className="animate-pulse" />
            <Heart size={15} className="animate-bounce" fill="currentColor" />
            <span className="font-serif italic text-lg text-[#064e3b] sm:text-xl">
              Can't wait to see you there!
            </span>
            <Heart size={15} className="animate-bounce" fill="currentColor" style={{ animationDelay: '200ms' }} />
            <Stars size={14} className="animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}