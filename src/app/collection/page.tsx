'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VIPPopup from '@/components/VIPPopup';
import { ChevronDown } from 'lucide-react';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    title: 'The Obsidian Compound',
    location: 'Kanathur, ECR',
    price: '₹18.2 Cr',
    status: 'Private Sale',
    statusColor: 'bg-on-surface-variant',
    region: 'ECR',
    type: 'Villa',
    sizeClass: 'md:col-span-8',
    delay: 0.1,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    title: 'Cliffside Pavilion',
    location: 'Palavakkam, ECR',
    price: '₹12.5 Cr',
    status: 'Off-Market',
    statusColor: 'bg-champagne-gold',
    region: 'ECR',
    type: 'Estate',
    sizeClass: 'md:col-span-4',
    delay: 0.2,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    title: 'Dune Residence',
    location: 'Sholinganallur, OMR',
    price: '₹8.9 Cr',
    status: 'Available',
    statusColor: 'bg-champagne-gold',
    region: 'OMR',
    type: 'Villa',
    sizeClass: 'md:col-span-6',
    delay: 0.3,
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
    title: 'Sky Vault',
    location: 'Thiruvanmiyur, OMR',
    price: 'Price Upon Request',
    status: 'Reserved',
    statusColor: 'bg-on-surface-variant',
    region: 'OMR',
    type: 'Penthouse',
    sizeClass: 'md:col-span-6',
    delay: 0.4,
  },
];

export default function CollectionPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  const filteredProperties = properties.filter((prop) => {
    const regionMatch = selectedRegion === 'All' || prop.region === selectedRegion;
    const typeMatch = selectedType === 'All' || prop.type === selectedType;
    return regionMatch && typeMatch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian text-on-surface pt-40 pb-32 px-6 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Header Section */}
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-outline-subtle/10 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <span className="text-label-sm uppercase tracking-[0.3em] text-champagne-gold mb-4 block">
                Exclusive Acquisitions
              </span>
              <h1 className="font-serif text-display-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
                Private Collection
              </h1>
              <p className="text-body-lg text-on-surface-variant">
                An austere selection of unlisted, architecturally significant properties. Access is strictly granted by invitation. Prices available upon formal inquiry.
              </p>
            </motion.div>

            {/* Filter Selector Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-wrap gap-8 w-full md:w-auto"
            >
              {/* Region Filter */}
              <div className="relative w-48 group">
                <span className="block text-label-sm uppercase text-on-surface-variant mb-2 tracking-widest">
                  Region
                </span>
                <button
                  onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
                  className="flex justify-between items-center w-full bg-transparent border-0 border-b border-champagne-gold/30 hover:border-champagne-gold pb-2 text-on-surface text-body-md transition-colors outline-none cursor-pointer"
                >
                  <span>{selectedRegion === 'All' ? 'Global' : `${selectedRegion} Corridor`}</span>
                  <ChevronDown className={`w-4 h-4 text-champagne-gold/60 transition-transform duration-300 ${regionDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {regionDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-charcoal border border-outline-subtle/20 shadow-xl z-30">
                    {['All', 'ECR', 'OMR'].map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setRegionDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-body-md text-on-surface-variant hover:text-champagne-gold hover:bg-surface-low transition-colors"
                      >
                        {region === 'All' ? 'Global' : `${region} Corridor`}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Asset Type Filter */}
              <div className="relative w-48 group">
                <span className="block text-label-sm uppercase text-on-surface-variant mb-2 tracking-widest">
                  Asset Type
                </span>
                <button
                  onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
                  className="flex justify-between items-center w-full bg-transparent border-0 border-b border-champagne-gold/30 hover:border-champagne-gold pb-2 text-on-surface text-body-md transition-colors outline-none cursor-pointer"
                >
                  <span>{selectedType === 'All' ? 'All Assets' : selectedType}</span>
                  <ChevronDown className={`w-4 h-4 text-champagne-gold/60 transition-transform duration-300 ${typeDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {typeDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-charcoal border border-outline-subtle/20 shadow-xl z-30">
                    {['All', 'Villa', 'Estate', 'Penthouse'].map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setTypeDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-body-md text-on-surface-variant hover:text-champagne-gold hover:bg-surface-low transition-colors"
                      >
                        {type === 'All' ? 'All Assets' : type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </header>

          {/* Asymmetric Bento-style Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[600px] mb-24">
            {filteredProperties.map((property) => (
              <motion.article
                key={property.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: property.delay, ease: 'easeOut' }}
                className={`group relative overflow-hidden flex flex-col justify-end bg-surface-low border border-outline-subtle/10 cursor-pointer h-[500px] md:h-auto ${property.sizeClass}`}
              >
                {/* Background Image — Ken Burns Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden ken-burns">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-85 transition-opacity duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Status Badge */}
                <div className="absolute top-8 left-8 z-10">
                  <div className="flex items-center gap-2 text-label-sm uppercase tracking-widest text-on-surface bg-black/60 backdrop-blur-md px-4 py-2">
                    <span className={`w-2 h-2 rounded-full ${property.statusColor}`} />
                    {property.status}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 sm:p-12 w-full flex justify-between items-end gap-6">
                  <div>
                    <h3 className="font-serif text-headline-md text-on-surface mb-2 group-hover:text-champagne-gold transition-colors duration-300">
                      {property.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant uppercase tracking-widest text-xs">
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-1">
                      Value
                    </p>
                    <p className="text-xl font-semibold text-platinum tracking-wide">
                      {property.price}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More trigger action */}
          <div className="flex flex-col items-center justify-center gap-4 mt-16">
            <button className="group flex flex-col items-center gap-6 text-on-surface-variant hover:text-champagne-gold transition-colors duration-500 cursor-pointer">
              <span className="text-label-sm uppercase tracking-[0.25em]">
                Load More Acquisitions
              </span>
              <span className="w-px h-16 bg-muted-gray/30 group-hover:bg-champagne-gold transition-colors duration-500" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <VIPPopup />
    </>
  );
}
