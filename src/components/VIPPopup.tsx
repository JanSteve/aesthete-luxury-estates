'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, ArrowRight } from 'lucide-react';

type PopupStatus = 'idle' | 'loading' | 'success';

export default function VIPPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<PopupStatus>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if not already dismissed
      const dismissed = sessionStorage.getItem('aesthete-popup-dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('aesthete-popup-dismissed', 'true');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus('loading');

    try {
      await fetch('https://hook.make.com/your-placeholder-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          source: 'AESTHETE Popup',
        }),
      });
    } catch {
      // Demo placeholder
    }

    setTimeout(() => {
      setStatus('success');
      setTimeout(handleClose, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-surface-low border border-outline-subtle/25 p-10 sm:p-14"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-champagne-gold transition-colors outline-none"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center mb-10">
              <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-4 block">
                Exclusive Invitation
              </span>
              <h3 className="font-serif text-headline-md text-on-surface mb-4">
                Private Viewing
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-sm mx-auto">
                Register for exclusive access to off-market properties and private estate viewings in Chennai&apos;s most coveted corridors.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-champagne-gold text-body-md uppercase tracking-[0.2em]">
                  Access Granted. We&apos;ll be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div className="group">
                  <label className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-3 group-focus-within:text-champagne-gold transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-0 border-b border-muted-gray/30 py-3 px-0 text-on-surface text-body-md placeholder:text-on-surface-variant/30 focus:border-champagne-gold focus:ring-0 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-3 group-focus-within:text-champagne-gold transition-colors">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 (000) 000-0000"
                    required
                    autoComplete="tel"
                    className="w-full bg-transparent border-0 border-b border-muted-gray/30 py-3 px-0 text-on-surface text-body-md placeholder:text-on-surface-variant/30 focus:border-champagne-gold focus:ring-0 outline-none transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="metal-brushed w-full py-5 text-body-md uppercase tracking-[0.3em] text-on-surface/80 transition-all duration-700 active:scale-95 group flex items-center justify-center gap-3 disabled:opacity-50 mt-4 border-0 outline-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing</span>
                    </>
                  ) : (
                    <>
                      Request Access
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
