import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/salonData';
import { GalleryItem } from '../types';

export const FeaturedTransformations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Artistry' },
    { id: 'hair', label: 'Haute Hair' },
    { id: 'coloring', label: 'Dimensional Color' },
    { id: 'bridal', label: 'Bridal Glamour' },
    { id: 'skincare', label: 'Cellular Skin' },
    { id: 'nails', label: 'Nail Art' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="transformations" className="py-24 md:py-32 bg-[#FCF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
            Editorial Lookbook
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight mb-6">
            Featured <span className="italic font-normal text-[#B98793]">Transformations</span>
          </h2>
          <p className="text-sm font-sans-clean text-[#4B3E3B]/70 font-light leading-relaxed">
            A curated glimpse into the bespoke aesthetic transformations realized at our Manhattan atelier.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#4B3E3B] text-[#FCF9F6] shadow-md scale-105'
                    : 'glass-card text-[#4B3E3B]/70 hover:text-[#4B3E3B] hover:border-[#B98793]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Gallery Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-[22px] overflow-hidden bg-[#F3E6DF] cursor-pointer border border-[#F3E6DF] shadow-xs hover:shadow-2xl transition-all duration-500 ${
                  item.aspect === 'tall' ? 'sm:row-span-2 h-[480px] sm:h-[580px]' : 'h-[320px] sm:h-[380px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B3E3B]/80 via-[#4B3E3B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-[#F3E6DF] uppercase mb-1 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-light mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-[#F3E6DF]/80 font-light">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B98793]" />
                    <span>View High Resolution</span>
                  </div>
                </div>

                {/* Quick Inspect Icon Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-card flex items-center justify-center text-[#4B3E3B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#B98793]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#4B3E3B]/90 backdrop-blur-xl">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#4B3E3B] flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#4B3E3B] flex items-center justify-center transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextLightbox}
              className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#4B3E3B] flex items-center justify-center transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[#FCF9F6] rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/40"
            >
              <div className="md:w-2/3 h-[50vh] md:h-[75vh] bg-black">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="md:w-1/3 p-8 flex flex-col justify-between bg-[#FCF9F6]">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-medium tracking-[0.3em] uppercase text-[#B98793] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{filteredItems[lightboxIndex].category} Portfolio</span>
                  </div>
                  <h3 className="font-serif-editorial text-3xl text-[#4B3E3B] mb-3">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-[#4B3E3B]/70 leading-relaxed font-light mb-6">
                    {filteredItems[lightboxIndex].subtitle}
                  </p>
                  <div className="p-4 rounded-xl bg-[#F3E6DF]/50 border border-[#F3E6DF] text-xs text-[#4B3E3B]/80 font-light">
                    Executed by our Senior Creative Master Artist using bespoke botanical formulations.
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F3E6DF] flex items-center justify-between text-xs text-[#4B3E3B]/60">
                  <span>Image {lightboxIndex + 1} of {filteredItems.length}</span>
                  <a
                    href="#contact"
                    onClick={() => setLightboxIndex(null)}
                    className="text-[#B98793] font-medium hover:underline tracking-wider uppercase text-[11px]"
                  >
                    Inquire Similar Look
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
