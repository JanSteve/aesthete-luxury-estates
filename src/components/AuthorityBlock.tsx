'use client';

import { motion } from 'framer-motion';

export default function AuthorityBlock() {
  return (
    <section id="authority" className="h-[60vh] relative flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 sm:px-8"
      >
        <p className="font-serif text-headline-md md:text-headline-lg italic text-on-surface max-w-3xl mx-auto leading-relaxed">
          &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
        </p>
      </motion.div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-champagne-gold/30 to-transparent" />
    </section>
  );
}
