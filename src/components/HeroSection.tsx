import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Shield, Award, Star } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { HERO_IMAGE } from '../data/salonData';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Shift Canvas & Particle Effects */}
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-0">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-pill px-4 py-1.5 rounded-full flex items-center space-x-2 text-xs font-medium tracking-[0.25em] text-[#B98793] uppercase mb-6 border border-[#B98793]/20 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B98793]" />
              <span>Haute Couture Beauty Atelier</span>
            </motion.div>

            {/* Editorial Large Heading with masking animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] tracking-tight text-[#4B3E3B] font-light mb-6"
            >
              Bespoke Artistry. <br />
              <span className="italic font-normal text-[#B98793]">Unrivaled</span> Beauty.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="font-sans-clean text-base sm:text-lg text-[#4B3E3B]/80 font-light leading-relaxed max-w-xl mb-10"
            >
              An exclusive haven where high-fashion aesthetics, organic Swiss botanicals, and personalized beauty rituals unify into an extraordinary sensory experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
                className="bg-[#4B3E3B] text-[#FCF9F6] px-8 py-4 rounded-full text-xs font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#B98793] flex items-center space-x-3 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="#services"
                className="glass-card text-[#4B3E3B] px-8 py-4 rounded-full text-xs font-medium tracking-[0.22em] uppercase hover:border-[#B98793] hover:text-[#B98793] transition-all duration-300 flex items-center space-x-2"
              >
                <span>Our Services</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-6 border-t border-[#F3E6DF] w-full max-w-lg flex flex-wrap items-center justify-between gap-4 text-xs text-[#4B3E3B]/70"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#B98793]" />
                <span className="font-light tracking-wider">Vogue Beauty Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#A8B8A5]" />
                <span className="font-light tracking-wider">Organic Botanicals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#B98793]" />
                <span className="font-light tracking-wider">Private Atelier Suites</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Column with Layered Depth & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Decorative background aura frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F3E6DF] via-[#FCF9F6] to-[#B98793]/20 rounded-[32px] transform rotate-1 blur-md -z-10" />

            {/* Main Hero Model Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="relative rounded-[22px] overflow-hidden shadow-2xl border border-[#F3E6DF] bg-[#FCF9F6] max-w-md w-full group"
            >
              <img
                src={HERO_IMAGE}
                alt="Luxury Beauty Model - Natural Makeup and Elegant Hairstyle"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] sm:h-[580px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />

              {/* Overlay gradient for editorial depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B3E3B]/40 via-transparent to-transparent opacity-60" />

              {/* Editorial Caption on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif-editorial text-2xl tracking-wide font-light">
                  "Elegance is when the inside is as beautiful as the outside."
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase font-light text-white/80 mt-1">
                  Atelier Editorial — Manhattan
                </p>
              </div>
            </motion.div>

            {/* Floating Customer Satisfaction Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 glass-card p-4 sm:p-5 rounded-[20px] shadow-xl border border-white/80 max-w-[220px] z-20"
            >
              <div className="flex items-center space-x-1.5 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-[#B98793]" />
                ))}
              </div>
              <p className="font-serif-editorial text-xl font-semibold text-[#4B3E3B] leading-tight">
                99.8% Client
              </p>
              <p className="text-[11px] text-[#4B3E3B]/70 font-light tracking-wide mt-0.5">
                Satisfaction Rate across 2,400+ Bespoke Sessions
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
