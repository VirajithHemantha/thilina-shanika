'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WeddingStory() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-background overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-serif font-light mb-4"
            style={{ color: 'var(--primary)' }}
          >
            Our Story
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </motion.div>

        {/* Story content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <p className="text-lg font-light leading-relaxed text-foreground">
            In the heart of Sri Lanka's golden shores, two souls found their
            perfect harmony. THILINA and SHANIKA's love story is one of laughter,
            adventure, and the kind of connection that feels like coming home.
          </p>

          <p className="text-lg font-light leading-relaxed text-foreground">
            From their first meeting to this beautiful moment, every chapter has
            been written with care, compassion, and boundless love. Together,
            they've built a life filled with cherished memories and dreams yet
            to unfold.
          </p>

          <p className="text-lg font-light leading-relaxed text-foreground">
            Now, as they embark on their journey as husband and wife, they
            invite you to witness and celebrate the beginning of their forever.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl"
            style={{ color: 'var(--primary)' }}
          >
            ♡
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
