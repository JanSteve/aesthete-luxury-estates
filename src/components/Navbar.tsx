'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-outline-subtle/10'
            : 'bg-gradient-to-b from-obsidian to-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20">
          <div className="flex items-center justify-between h-24">
            {/* Brand */}
            <a
              href="#"
              className="font-serif text-headline-md tracking-tighter text-on-surface hover:text-champagne-gold transition-colors duration-500"
            >
              AESTHETE
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <button
                onClick={() => scrollToSection('properties')}
                className="text-label-sm uppercase tracking-[0.2em] text-champagne-gold champagne-underline active transition-colors duration-500"
              >
                Private Collection
              </button>
              <button
                onClick={() => scrollToSection('authority')}
                className="text-label-sm uppercase tracking-[0.2em] text-on-surface/60 hover:text-champagne-gold champagne-underline transition-colors duration-500"
              >
                Advisory
              </button>
              <button
                onClick={() => scrollToSection('client-application')}
                className="text-label-sm uppercase tracking-[0.2em] text-on-surface/60 hover:text-champagne-gold champagne-underline transition-colors duration-500"
              >
                Request Access
              </button>
            </div>

            {/* Hamburger Button for Mobile/Drawer */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-on-surface hover:text-champagne-gold transition-colors duration-300 z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12"
          >
            {[
              { label: 'Private Collection', id: 'properties' },
              { label: 'Advisory', id: 'authority' },
              { label: 'Request Access', id: 'client-application' },
            ].map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                onClick={() => scrollToSection(item.id)}
                className="font-serif text-headline-lg text-on-surface hover:text-champagne-gold transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
