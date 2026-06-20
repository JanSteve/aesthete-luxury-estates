'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.2, 0.8, 0.2, 1] as const,
    },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('client-application');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-6 max-w-5xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-display-mobile md:text-display-lg text-on-surface mb-12"
          >
            UNRIVALED ELEGANCE.
            <br />
            <span className="italic font-normal">UNLISTED ESTATES.</span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <button
              onClick={scrollToContact}
              className="metal-brushed glow-champagne px-12 py-5 text-body-md uppercase tracking-[0.25em] text-on-surface/80 rounded-none transition-all duration-700 active:scale-95 outline-none border-0"
            >
              Request VIP Viewing
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce z-20"
      >
        <span className="text-label-sm uppercase tracking-widest text-on-surface/60">
          Discover More
        </span>
        <ChevronDown className="w-4 h-4 text-on-surface/40" />
      </motion.div>
    </section>
  );
}
