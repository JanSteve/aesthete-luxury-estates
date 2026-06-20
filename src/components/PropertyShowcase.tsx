'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    title: 'The Obsidian Sanctum',
    location: 'Kanathur, ECR',
    price: '₹18.2 Cr',
    status: 'Available',
    statusColor: 'bg-champagne-gold',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'The Granite Retreat',
    location: 'Sholinganallur, OMR',
    price: '₹8.9 Cr',
    status: 'Private Sale',
    statusColor: 'bg-on-surface-variant',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'The Ivory Monolith',
    location: 'Neelankarai, ECR',
    price: '₹3.2 Cr',
    status: 'Available',
    statusColor: 'bg-champagne-gold',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'The Oceanic Villa',
    location: 'Injambakkam, ECR',
    price: '₹6.8 Cr',
    status: 'Invite Only',
    statusColor: 'bg-champagne-gold',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'The Meridian Penthouse',
    location: 'Thiruvanmiyur, OMR',
    price: 'Price Upon Request',
    status: 'Private Sale',
    statusColor: 'bg-on-surface-variant',
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    title: 'Casa Elegante',
    location: 'Palavakkam, ECR',
    price: '₹12.5 Cr',
    status: 'Available',
    statusColor: 'bg-champagne-gold',
  },
];

export default function PropertyShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = window.innerWidth * 0.45;
    carouselRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="properties" className="py-40 px-6 sm:px-8 lg:px-20 bg-obsidian">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header + Arrow Nav */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-4 block">
              Current Portfolio
            </span>
            <h2 className="font-serif text-headline-lg md:text-display-mobile text-on-surface leading-tight">
              THE SHADOW <br />&amp; THE LIGHT
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center border border-muted-gray/20 hover:border-champagne-gold text-on-surface hover:text-champagne-gold transition-all duration-500 outline-none"
              aria-label="Previous property"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center border border-muted-gray/20 hover:border-champagne-gold text-on-surface hover:text-champagne-gold transition-all duration-500 outline-none"
              aria-label="Next property"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-12"
        >
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
