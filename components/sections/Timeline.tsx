'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const timelineEvents = [
    {
      year: '2019',
      title: 'Our Engagement',
      description: 'The moment we promised forever to each other',
      icon: '💍',
    },
    {
      year: '2020-2025',
      title: 'Building Our Home',
      description: 'Creating countless memories and adventures together',
      icon: '🏠',
    },
    {
      year: '2027',
      title: 'Our Wedding',
      description: 'Celebrating love surrounded by those we cherish',
      icon: '💒',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

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
            Our Journey
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1"
            style={{ backgroundColor: 'var(--primary)', opacity: 0.3, transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-8 w-8 h-8 -translate-x-1/2 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: `0 0 20px rgba(212, 175, 55, 0.4)`,
                    borderWidth: '3px',
                    borderColor: 'var(--primary)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--primary)' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 pt-2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <motion.div
                    className="rounded-lg p-6 bg-white"
                    style={{
                      boxShadow:
                        '0 10px 30px rgba(212, 175, 55, 0.1), 0 0 20px rgba(212, 175, 55, 0.05)',
                    }}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4 md:flex-col md:items-start">
                      <div className="text-3xl flex-shrink-0">
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-lg font-light mb-1"
                          style={{ color: 'var(--primary)' }}
                        >
                          {event.year}
                        </p>
                        <h3 className="text-2xl font-serif font-light text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-foreground font-light leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
