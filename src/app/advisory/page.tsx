'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VIPPopup from '@/components/VIPPopup';
import { Loader2, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Acquisition Strategy',
    desc: 'Our private guild provides exclusive access to unlisted, off-market architectural masterpieces. We orchestrate the entire acquisition lifecycle, ensuring absolute confidentiality and securing generational assets.',
    bullets: ['Market Intelligence', 'Anonymous Representation', 'Valuation & Structuring'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    delay: 0.2,
  },
  {
    num: '02',
    title: 'Legacy Preservation',
    desc: 'Beyond ownership lies preservation. We structure estate transitions, philanthropic architectural foundations, and long-term conservation plans to ensure your properties endure as structural landmarks.',
    bullets: ['Estate Transition', 'Philanthropic Structuring', 'Architectural Archiving'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    delay: 0.3,
  },
];

type FormStatus = 'idle' | 'loading' | 'success';

export default function AdvisoryPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await fetch('https://hook.make.com/your-placeholder-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'AESTHETE Advisory Prospectus',
        }),
      });
    } catch {
      // Demo placeholder
    }

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian text-on-surface pt-40 pb-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20">
          {/* Hero Section */}
          <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-8 lg:col-start-2"
            >
              <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-6 block">
                Bespoke Guidance
              </span>
              <h1 className="font-serif text-display-mobile md:text-display-lg text-on-surface leading-[1.1] mb-12">
                Advisory &amp; <br />
                <span className="italic font-normal text-on-surface-variant">Legacy Planning.</span>
              </h1>
            </motion.div>

            {/* Spiral Staircase Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 lg:col-start-5 overflow-hidden h-[400px] md:h-[600px] relative group"
            >
              <img
                className="w-full h-full object-cover grayscale opacity-65 group-hover:scale-105 transition-transform duration-[10s] ease-out"
                alt="Spiral Staircase Architecture"
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            </motion.div>

            {/* Concierge Info Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="lg:col-span-4 lg:col-start-8 lg:-mt-24 z-10"
            >
              <div className="bg-surface-low border border-outline-subtle/10 p-8 sm:p-10 backdrop-blur-md">
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  We navigate the complexities of acquiring, managing, and transferring generational architectural assets with uncompromising discretion and strategic foresight.
                </p>
                <a
                  href="#prospectus-form"
                  className="inline-flex items-center text-label-sm text-champagne-gold uppercase tracking-[0.2em] group border-b border-champagne-gold/30 pb-1.5 hover:border-champagne-gold transition-colors"
                >
                  Initiate Dialogue{' '}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </section>

          {/* Pull Quote Section */}
          <section className="mb-40 flex flex-col items-center text-center max-w-4xl mx-auto py-16 border-y border-outline-subtle/10">
            <span className="font-serif text-6xl text-champagne-gold/20 mb-6 font-semibold select-none leading-none">
              “
            </span>
            <h2 className="font-serif text-headline-lg md:text-display-mobile text-on-surface italic max-w-3xl leading-relaxed">
              Architecture is the learned game, correct and magnificent, of forms assembled in the light.
            </h2>
            <div className="mt-12 w-px h-24 bg-gradient-to-b from-champagne-gold/30 to-transparent" />
          </section>

          {/* Services Bento Grid */}
          <section className="mb-40 flex flex-col gap-32">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: svc.delay }}
                  className="lg:col-span-5 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-champagne-gold" />
                    <span className="text-label-sm uppercase tracking-widest text-on-surface-variant font-mono">
                      {svc.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-display-mobile text-on-surface mb-6">
                    {svc.title}
                  </h3>
                  <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                    {svc.desc}
                  </p>
                  <ul className="space-y-4 text-label-sm uppercase tracking-[0.15em] text-on-surface-variant">
                    {svc.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-champagne-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Service Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="lg:col-span-6 lg:col-start-7 overflow-hidden h-[450px] relative group border border-outline-subtle/10"
                >
                  <img
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={svc.title}
                    src={svc.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                </motion.div>
              </div>
            ))}
          </section>

          {/* CTA Prospectus Section */}
          <section id="prospectus-form" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface-low border border-outline-subtle/10 p-12 md:p-24 text-center max-w-5xl mx-auto"
            >
              <h2 className="font-serif text-display-mobile text-on-surface mb-6">
                Secure Your Architectural Legacy
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
                Consultations are strictly by appointment. Engage with our senior advisory team to discuss your portfolio objectives and request our confidential private prospectus.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  className="flex-grow bg-transparent border-0 border-b border-muted-gray/30 py-3 text-on-surface text-body-md placeholder:text-on-surface-variant/30 focus:border-champagne-gold focus:ring-0 outline-none transition-colors"
                />
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="metal-brushed px-8 py-3 text-label-sm uppercase tracking-[0.2em] text-champagne-gold flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Prospectus Requested
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="metal-brushed px-8 py-3 text-label-sm uppercase tracking-[0.2em] text-on-surface/90 hover:text-champagne-gold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 outline-none border-0"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Request Prospectus
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
      <VIPPopup />
    </>
  );
}
