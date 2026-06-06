'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GuestGreeting() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!guestName) return null;

  return (
    <section ref={ref} className="bg-[linear-gradient(180deg,#010d0a_0%,#021e17_100%)] px-4 py-16 text-center sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mx-auto max-w-4xl"
      >
        <p className="font-serif text-xl sm:text-2xl font-light text-[#C9A227] tracking-widest uppercase mb-4">
          With Great Joy
        </p>
        <p className="font-serif text-lg sm:text-xl font-light text-[#f8ead0] mb-6">
          We cordially invite
        </p>
        <h2 className="font-serif text-3xl text-[#fff7e8] sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg px-4">
          {guestName}
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-sm leading-relaxed text-[#f8ead0] sm:text-base md:text-lg font-light">
          to share in our happiness, witness our vows, and celebrate this beautiful new chapter of our lives together.
        </p>
        <div className="mt-12 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
