import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { REVIEWS_DATA } from '../data/salonData';

export const ClientReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#FCF9F6] relative overflow-hidden">
      {/* Subtle ambient light shape */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#B98793]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
            Client Testimonials
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight">
            Words From Our <span className="italic font-normal text-[#B98793]">Patrons</span>
          </h2>
        </div>

        {/* Large Glass Quote Card Slider */}
        <div className="relative glass-card p-8 sm:p-12 md:p-16 rounded-[28px] border border-[#F3E6DF] shadow-xl max-w-4xl mx-auto min-h-[380px] flex flex-col justify-between">
          
          {/* Top Quote Icon & Controls */}
          <div className="flex items-center justify-between mb-8">
            <Quote className="w-12 h-12 text-[#B98793]/40 stroke-[1.5]" />

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause review slideshow" : "Play review slideshow"}
                className="w-9 h-9 rounded-full bg-[#F3E6DF]/60 text-[#4B3E3B] hover:bg-[#B98793] hover:text-white flex items-center justify-center transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-9 h-9 rounded-full bg-[#F3E6DF]/60 text-[#4B3E3B] hover:bg-[#B98793] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-9 h-9 rounded-full bg-[#F3E6DF]/60 text-[#4B3E3B] hover:bg-[#B98793] hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated Quote Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="my-auto"
            >
              <div className="flex items-center space-x-1 text-amber-500 mb-4">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#B98793]" />
                ))}
              </div>

              <blockquote className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#4B3E3B] font-light leading-snug mb-8 italic">
                "{currentReview.quote}"
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#F3E6DF]/80">
                <div>
                  <h4 className="font-serif-editorial text-xl font-medium text-[#4B3E3B]">
                    {currentReview.author}
                  </h4>
                  <p className="text-xs text-[#B98793] tracking-wider uppercase font-medium">
                    {currentReview.role} — {currentReview.location}
                  </p>
                </div>

                <div className="glass-pill px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.2em] font-medium uppercase text-[#4B3E3B]/80 border border-[#B98793]/20">
                  {currentReview.treatment}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-8 pt-4">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#B98793]' : 'w-2 bg-[#F3E6DF]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
