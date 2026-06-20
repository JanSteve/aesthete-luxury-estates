'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success';

const budgetOptions = [
  { value: '', label: 'Select range' },
  { value: '2cr-5cr', label: '₹2 Cr – ₹5 Cr' },
  { value: '5cr-10cr', label: '₹5 Cr – ₹10 Cr' },
  { value: '10cr-20cr', label: '₹10 Cr – ₹20 Cr' },
  { value: '20cr-plus', label: '₹20 Cr+' },
];

export default function LeadCapture() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone || !budget) return;

    setStatus('loading');

    try {
      await fetch('https://hook.make.com/your-placeholder-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          budget,
          source: 'AESTHETE Demo',
        }),
      });
    } catch {
      // Placeholder webhook — treat as success for demo
    }

    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section
      id="client-application"
      className="py-40 px-6 sm:px-8 lg:px-20 bg-obsidian"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left — Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-16 md:mb-0"
        >
          <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-6 block">
            Confidential Access
          </span>
          <h2 className="font-serif text-display-mobile md:text-display-lg text-on-surface mb-8 leading-tight">
            SECURE YOUR <br />LEGACY
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-md">
            Our unlisted portfolio includes heritage estates and modern
            masterpieces that never reach the public market. Registration is
            required for access.
          </p>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            {/* Name */}
            <div className="group">
              <label className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-champagne-gold transition-colors">
                Full Name
              </label>
              <input
                id="lead-name"
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
              <label className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-champagne-gold transition-colors">
                Phone / WhatsApp
              </label>
              <input
                id="lead-phone"
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

            {/* Budget */}
            <div className="group">
              <label className="block text-label-sm uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-champagne-gold transition-colors">
                Investment Range
              </label>
              <select
                id="lead-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
                className="w-full bg-transparent border-0 border-b border-muted-gray/30 py-3 px-0 text-on-surface text-body-md focus:border-champagne-gold focus:ring-0 outline-none transition-all appearance-none cursor-pointer [&>option]:bg-charcoal [&>option]:text-on-surface"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="mt-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="metal-brushed w-full py-6 text-body-md uppercase tracking-[0.4em] text-champagne-gold flex items-center justify-center gap-4"
                >
                  Invitation Sent
                </motion.div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="metal-brushed w-full py-6 text-body-md uppercase tracking-[0.4em] text-on-surface/80 transition-all duration-700 active:scale-95 group flex items-center justify-center gap-4 disabled:opacity-50 outline-none border-0"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Requesting Access...</span>
                    </>
                  ) : (
                    <>
                      Access Collection
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
