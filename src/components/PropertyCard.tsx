'use client';

import { motion } from 'framer-motion';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  status: string;
  statusColor?: string;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  status,
  statusColor = 'bg-champagne-gold',
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-w-[85vw] md:min-w-[45vw] snap-start flex flex-col gap-6 cursor-pointer"
    >
      {/* Image Container — Ken Burns */}
      <div className="ken-burns relative aspect-[4/5] overflow-hidden bg-surface-highest">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Status Badge */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 text-label-sm uppercase tracking-widest text-on-surface bg-black/60 backdrop-blur-md px-4 py-2">
            <span className={`w-2 h-2 rounded-full ${statusColor}`} />
            {status}
          </div>
        </div>
      </div>

      {/* Info Below Image */}
      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-headline-md text-on-surface">
          {title}
        </h3>
        <div className="flex justify-between items-center text-on-surface-variant uppercase tracking-widest text-sm">
          <span>{location}</span>
          <span className="text-platinum font-semibold tracking-normal">
            {price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
