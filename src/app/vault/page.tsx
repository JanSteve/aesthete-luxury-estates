'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VIPPopup from '@/components/VIPPopup';
import { ArrowRight, Lock } from 'lucide-react';

const assets = [
  {
    title: 'The Sky Penthouse',
    location: 'Thiruvanmiyur, OMR',
    value: '₹18.5 Cr',
    status: 'Private Holding',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
  },
  {
    title: 'Villa Obscura',
    location: 'Neelankarai, ECR',
    value: '₹24.0 Cr',
    status: 'Private Holding',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
  },
];

export default function VaultPage() {
  const scrollToContact = () => {
    const el = document.getElementById('vault-concierge');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian text-on-surface pt-40 pb-32 px-6 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Dashboard Header */}
          <header className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-4 block">
                Executive Desk
              </span>
              <h1 className="font-serif text-display-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
                The Vault
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                A curated overview of your monitored assets, off-market matches, and direct concierge access. Strict confidentiality maintained.
              </p>
            </motion.div>
          </header>

          {/* Metrics Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="bg-surface-low border border-outline-subtle/10 p-8 sm:p-10 flex flex-col justify-between min-h-[240px] relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-champagne-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <span className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-3 block">
                  Total Portfolio Value
                </span>
                <h2 className="font-serif text-display-mobile text-champagne-gold">
                  ₹42.5 Cr
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-8 z-10 text-body-md text-on-surface">
                <span className="w-2 h-2 rounded-full bg-champagne-gold" />
                <span>Monitored Assets: 2</span>
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="bg-surface-low border border-outline-subtle/10 p-8 sm:p-10 flex flex-col justify-between min-h-[240px] relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-champagne-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <span className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-3 block">
                  Curated Matches
                </span>
                <h2 className="font-serif text-display-mobile text-on-surface">
                  12
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-8 z-10 text-body-md text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-on-surface-variant/40" />
                <span>2 Off-Market Available</span>
              </div>
            </motion.div>

            {/* Concierge Trigger Tile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              onClick={scrollToContact}
              className="bg-obsidian border border-outline-subtle/25 p-8 sm:p-10 flex flex-col justify-between min-h-[240px] cursor-pointer group hover:border-champagne-gold/30 transition-colors"
            >
              <div>
                <span className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-3 block">
                  Direct Concierge
                </span>
                <h2 className="font-serif text-headline-lg text-on-surface flex items-center gap-3">
                  Connect{' '}
                  <ArrowRight className="w-6 h-6 text-champagne-gold transform group-hover:translate-x-1.5 transition-transform" />
                </h2>
              </div>
              <p className="text-body-md text-on-surface-variant mt-8 max-w-xs">
                Available 24/7 for discreet inquiries and private viewings.
              </p>
            </motion.div>
          </section>

          {/* Monitored Assets List Ledger */}
          <section className="mb-40">
            <div className="flex justify-between items-end mb-12 border-b border-outline-subtle/20 pb-6">
              <h3 className="font-serif text-headline-lg text-on-surface">
                Asset Ledger
              </h3>
              <span className="text-label-sm uppercase tracking-[0.2em] text-champagne-gold flex items-center gap-1.5 cursor-pointer hover:text-on-surface transition-colors">
                <Lock className="w-3.5 h-3.5" />
                Secure Ledger Mode
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {assets.map((asset) => (
                <div
                  key={asset.title}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-6 border-b border-outline-subtle/10 bg-surface-low/30 hover:bg-surface-low/70 transition-all duration-300 gap-6 cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    {/* Tiny Thumbnail */}
                    <div className="w-24 h-16 overflow-hidden bg-charcoal hidden sm:block">
                      <img
                        alt={asset.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={asset.image}
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-headline-md text-on-surface group-hover:text-champagne-gold transition-colors duration-300">
                        {asset.title}
                      </h4>
                      <span className="text-label-sm text-on-surface-variant/75 uppercase tracking-widest text-xs">
                        {asset.location}
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right flex sm:flex-col justify-between sm:justify-start w-full sm:w-auto items-center sm:items-end gap-2">
                    <span className="font-serif text-2xl text-on-surface block order-2 sm:order-1">
                      {asset.value}
                    </span>
                    <span className="text-label-sm text-champagne-gold uppercase tracking-widest flex items-center gap-2 order-1 sm:order-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
                      {asset.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Concierge Contact Target Section */}
          <section id="vault-concierge">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface-low border border-outline-subtle/15 p-12 md:p-24 text-center max-w-4xl mx-auto"
            >
              <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-4 block">
                Discreet Dialogue
              </span>
              <h2 className="font-serif text-display-mobile text-on-surface mb-6">
                Connect with Concierge
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
                Connect with a private estate coordinator immediately. Dial <span className="text-champagne-gold font-semibold">+91 (ECR) PRIVATE</span> or submit an access request through the drawer.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="tel:+919876543210"
                  className="metal-brushed px-10 py-5 text-label-sm uppercase tracking-[0.25em] text-on-surface/90 hover:text-champagne-gold transition-colors border-0 outline-none active:scale-95"
                >
                  Direct Voice Call
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
      <VIPPopup />
    </>
  );
}
