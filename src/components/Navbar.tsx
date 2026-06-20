'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
            {/* Brand Logo */}
            <Link
              href="/"
              className="font-serif text-headline-md tracking-tighter text-on-surface hover:text-champagne-gold transition-colors duration-500"
            >
              AESTHETE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link
                href="/collection"
                className={`text-label-sm uppercase tracking-[0.2em] champagne-underline transition-colors duration-500 ${
                  pathname === '/collection'
                    ? 'text-champagne-gold active'
                    : 'text-on-surface/60 hover:text-champagne-gold'
                }`}
              >
                Private Collection
              </Link>
              <Link
                href="/advisory"
                className={`text-label-sm uppercase tracking-[0.2em] champagne-underline transition-colors duration-500 ${
                  pathname === '/advisory'
                    ? 'text-champagne-gold active'
                    : 'text-on-surface/60 hover:text-champagne-gold'
                }`}
              >
                Advisory
              </Link>
              <Link
                href="/vault"
                className={`text-label-sm uppercase tracking-[0.2em] champagne-underline transition-colors duration-500 ${
                  pathname === '/vault'
                    ? 'text-champagne-gold active'
                    : 'text-on-surface/60 hover:text-champagne-gold'
                }`}
              >
                Client Vault
              </Link>
            </div>

            {/* Icons & Actions */}
            <div className="flex items-center gap-6">
              {/* Lock / Vault Status Icon */}
              <Link
                href="/vault"
                className="text-on-surface hover:text-champagne-gold transition-colors duration-300 relative group"
                aria-label="Access Vault"
              >
                <Lock className="w-5 h-5" />
                <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-surface-low border border-outline-subtle/20 text-[10px] uppercase tracking-widest text-champagne-gold py-1.5 px-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Secure Access
                </span>
              </Link>

              {/* Profile Thumbnail */}
              <Link
                href="/vault"
                className="w-10 h-10 rounded-full overflow-hidden border border-outline-subtle/30 hover:border-champagne-gold transition-colors duration-500 hidden sm:block"
              >
                <img
                  alt="Client Profile"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                />
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="text-on-surface hover:text-champagne-gold transition-colors duration-300 focus:outline-none"
                aria-label="Toggle Navigation Panel"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Sidebar Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex justify-end"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-surface-low border-l border-outline-subtle/20 p-10 sm:p-16 flex flex-col justify-between h-full overflow-y-auto no-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-8 right-8 text-on-surface-variant hover:text-champagne-gold transition-colors outline-none"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Sidebar Header */}
              <div className="text-center mt-12 mb-8">
                <h2 className="font-serif text-headline-md text-champagne-gold tracking-tight mb-2">
                  ESTATE VAULT
                </h2>
                <div className="flex items-center justify-center gap-2 text-label-sm uppercase tracking-widest text-on-surface-variant/60">
                  <ShieldAlert className="w-3.5 h-3.5 text-champagne-gold/60" />
                  <span>Strictly Confidential</span>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="flex flex-col items-center gap-8 my-auto">
                {[
                  { label: 'The Vault', path: '/vault' },
                  { label: 'Private Listings', path: '/collection' },
                  { label: 'Advisory Services', path: '/advisory' },
                  { label: 'Investor Portal', path: '/' },
                  { label: 'Contact Concierge', path: '/' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="group font-serif text-headline-md text-on-surface-variant hover:text-champagne-gold transition-all duration-300 flex items-center justify-center gap-3 hover:tracking-wider"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Action Button & Footer */}
              <div className="flex flex-col items-center gap-8 mt-12">
                <Link
                  href="/#client-application"
                  onClick={toggleMenu}
                  className="metal-brushed glow-champagne px-8 py-4 text-label-sm uppercase tracking-[0.2em] text-on-surface/90 text-center w-full transition-all active:scale-95"
                >
                  Schedule Consultation
                </Link>

                <div className="flex gap-6 text-[10px] uppercase tracking-widest text-on-surface-variant/40">
                  <a href="#" className="hover:text-champagne-gold transition-colors">
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:text-champagne-gold transition-colors">
                    Terms &amp; Legal
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
