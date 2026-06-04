'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Heart, Mail, User, Users, Coffee, Sparkles } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/googleSheets';

export default function RSVPSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    dietary: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      await submitToGoogleSheets({
        formType: 'rsvp',
        name: formData.name,
        guests: formData.guests,
        dietary: formData.dietary,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', guests: '1', dietary: '' });
      }, 4000);
    } catch (error) {
      setSubmitError('Unable to submit right now. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#c3ebd9_0%,#FAF6F0_35%,#e8f7f2_100%)] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Premium Ambient Backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-10%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-bl from-[#064E3B]/25 to-[#C9A227]/10 opacity-80 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute left-[-10%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full bg-gradient-to-tr from-[#064E3B]/20 to-[#FAF6F0]/15 opacity-70 blur-[100px]"
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10px 10px, rgba(6,78,59,0.15) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative RSVP Crest */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -5 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="relative mx-auto mb-8 w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-emerald-50 bg-emerald-50 shadow-[0_20px_42px_rgba(6,78,59,0.15)] p-[2px] z-10 block"
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(209,250,229,0.75),rgba(255,255,255,0.95))]">
              <Mail className="h-12 w-12 text-[#064E3B]" />
            </div>

            {/* Tiny floating decorative elements around the image */}
            <Sparkles className="absolute -top-2 -right-4 h-8 w-8 text-[#C9A227] animate-pulse" />
            <Sparkles className="absolute -bottom-4 -left-2 h-6 w-6 text-[#0F766E] animate-pulse" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#064e3b]/30 bg-emerald-50/70 px-5 py-2.5 shadow-[0_10px_30px_rgba(6,78,59,0.1)] backdrop-blur-md"
          >
            <Mail className="h-5 w-5 text-[#064E3B]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#064E3B]">
              Join the Celebration
            </span>
          </motion.div>

          <h2 className="font-serif text-5xl font-medium tracking-tight text-[#064e3b] md:text-7xl">
            You are <span className="relative inline-block text-[#C9A227]">
              Invited
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
          <p className="mx-auto mt-8 max-w-lg text-lg text-foreground/80 leading-relaxed">
            Please respond by April 30, 2027. We would be honored to have you join our wedding celebration.
          </p>
        </motion.div>

        {/* 3D Glassmorphic Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="relative perspective-[1000px]"
        >
          {/* Animated Background Envelope Flap Shape */}
          <div className="absolute -top-10 left-1/2 h-32 w-[90%] -translate-x-1/2 rounded-[2rem] bg-white/30 blur-md pointer-events-none" />

          <div className="relative overflow-hidden rounded-[3rem] border border-[#064E3B]/25 bg-[linear-gradient(150deg,rgba(255,255,255,0.9)_0%,rgba(224,245,238,0.85)_100%)] p-6 md:p-12 shadow-[0_20px_55px_rgba(6,78,59,0.15)] backdrop-blur-2xl">

            {/* Cute internal accents */}
            <div className="absolute left-[-20%] top-[-20%] h-[300px] w-[300px] rounded-full bg-[#064e3b]/10 blur-[60px]" />
            <div className="absolute right-[-20%] bottom-[-20%] h-[300px] w-[300px] rounded-full bg-[#C9A227]/10 blur-[60px]" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-8"
                >
                  <div className="grid grid-cols-1 gap-8">
                    {/* Name Input */}
                    <div className="group relative">
                      <label className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
                        <User className="h-4 w-4" /> Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John & Jane Doe"
                        className="w-full rounded-2xl border border-[#064E3B]/25 bg-white/75 px-5 py-4 text-[#064e3b] placeholder-[#064e3b]/40 outline-none transition-all duration-300 focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b]/30 focus:bg-white focus:shadow-[0_10px_20px_rgba(6,78,59,0.1)] group-hover:bg-white/90"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Guests Select */}
                    <div className="group relative">
                      <label className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
                        <Users className="h-4 w-4" /> Guests
                      </label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-2xl border border-[#064E3B]/25 bg-white/75 px-5 py-4 pr-12 text-[#064e3b] outline-none transition-all duration-300 focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b]/30 focus:bg-white focus:shadow-[0_10px_20px_rgba(6,78,59,0.1)] group-hover:bg-white/90 cursor-pointer"
                        >
                          <option value="1">1 Guest (Just Me)</option>
                          <option value="2">2 Guests (Couple)</option>
                          <option value="3">3 Guests (Plus One)</option>
                          <option value="4">4 Guests (Family)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#064e3b]">
                          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Dietary Input */}
                    <div className="group relative">
                      <label className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
                        <Coffee className="h-4 w-4" /> Dietary Notes
                      </label>
                      <input
                        type="text"
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        placeholder="Allergies, Vegan, etc."
                        className="w-full rounded-2xl border border-[#064E3B]/25 bg-white/75 px-5 py-4 text-[#064e3b] placeholder-[#064e3b]/40 outline-none transition-all duration-300 focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b]/30 focus:bg-white focus:shadow-[0_10px_20px_rgba(6,78,59,0.1)] group-hover:bg-white/90"
                      />
                    </div>
                  </div>

                  {/* Creative Submit Button */}
                  <div className="mt-10 flex justify-center pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setIsHoveringSubmit(true)}
                      onHoverEnd={() => setIsHoveringSubmit(false)}
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-[#064E3B] px-12 py-5 text-white shadow-[0_10px_30px_rgba(6,78,59,0.2)] transition-all hover:bg-[#043b2e] hover:shadow-[0_15px_40px_rgba(4,59,46,0.25)] border border-[#064E3B]"
                    >
                      <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-sm">
                        {isSubmitting ? 'Sending...' : 'Send RSVP'}
                      </span>

                      {/* Animated Send Icon */}
                      <motion.div
                        animate={isHoveringSubmit ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>

                      {/* Cool Shine Effect */}
                      <div className="absolute inset-0 z-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                        <div className="relative h-full w-12 bg-white/30" />
                      </div>
                    </motion.button>
                  </div>

                  {submitError && (
                    <p className="text-center text-sm font-medium text-[#9f3a2f]">{submitError}</p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(6,78,59,0.15)]"
                  >
                    <Heart className="h-12 w-12 text-[#064E3B] fill-[#064E3B]" />
                  </motion.div>
                  <h3 className="font-serif text-4xl font-medium text-[#064e3b] mb-4">
                    Yay! We got it
                  </h3>
                  <p className="max-w-md text-lg text-foreground/80">
                    Thank you so much for confirming, {formData.name || 'dear guest'}! We are so excited to celebrate with you.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner cute dots */}
            <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-[#C9A227]" />
            <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[#064e3b]" />
            <div className="absolute left-6 bottom-6 h-2 w-2 rounded-full bg-[#064e3b]" />
            <div className="absolute right-6 bottom-6 h-2 w-2 rounded-full bg-[#C9A227]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
