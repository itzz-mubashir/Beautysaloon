import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Droplet, Feather, Sun, Heart, Compass } from 'lucide-react';
import facialImg from '../assets/images/facial_treatment_1786105034153.jpg';

export const OurPhilosophy: React.FC = () => {
  const pillars = [
    {
      title: 'Botanical Purity',
      subtitle: 'Ethical & Pure Formulations',
      desc: 'We curate exclusively organic, bio-active plant extracts and Swiss cellular nutrients free from synthetic fillers or harsh chemicals.',
      icon: Droplet
    },
    {
      title: 'Bespoke Artistry',
      subtitle: 'Tailored Dermal & Hair Protocols',
      desc: 'No two clients receive the same ritual. Every session begins with a diagnostic bone-structure, skin tone, and texture analysis.',
      icon: Compass
    },
    {
      title: 'Tranquil Sanctuaries',
      subtitle: 'Private Acoustically Isolated Suites',
      desc: 'Our private suites insulate you from urban turbulence with soft warm lighting, customizable acoustic frequencies, and herbal steams.',
      icon: Feather
    },
    {
      title: 'Master Craftsmanship',
      subtitle: 'International Couture Artisans',
      desc: 'Our specialists undergo continuous mastery training in Paris, Tokyo, and Milan to bring haute couture precision to every brushstroke.',
      icon: Sun
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#F3E6DF]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Photography & Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[22px] overflow-hidden border border-[#F3E6DF] shadow-xl bg-white group">
              <img
                src={facialImg}
                alt="Our Philosophy - Facial Renewal & Pure Botanicals"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] md:h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B3E3B]/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#F3E6DF] mb-2 block">
                  The Ethos of ÉLÉGANCE
                </span>
                <p className="font-serif-editorial text-2xl font-light italic leading-snug">
                  "True beauty is not manufactured. It is revealed through thoughtful care, pure botanicals, and quiet devotion."
                </p>
              </div>
            </div>

            {/* Overlapping Floating Accent Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block absolute -bottom-8 -right-6 lg:-right-8 glass-card p-6 rounded-[20px] border border-white/80 shadow-2xl max-w-xs"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#B98793] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg text-[#4B3E3B]">100% Sustainable</h4>
                  <p className="text-[10px] text-[#4B3E3B]/70 tracking-wider uppercase">Zero Waste Packaging</p>
                </div>
              </div>
              <p className="text-xs text-[#4B3E3B]/80 font-light leading-relaxed">
                All ingredients are ethically harvested in cold-pressed micro-batches to preserve cellular efficacy.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Narrative Story & 4 Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
                Our Story & Vow
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight mb-6">
                Crafted for those who view <br />
                <span className="italic font-normal text-[#B98793]">self-care</span> as an art form.
              </h2>
              <p className="text-base text-[#4B3E3B]/80 font-light leading-relaxed mb-10 max-w-2xl">
                Founded on the belief that beauty should feel like a serene homecoming, ÉLÉGANCE rejects assembly-line salon culture. We limit our daily patron invitations to preserve an unhurried, deeply contemplative atmosphere where every detail—from custom tea blends to acoustic frequencies—is curated for your total restoration.
              </p>
            </motion.div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-[18px] border border-[#F3E6DF] hover:border-[#B98793]/40 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F3E6DF] flex items-center justify-center text-[#B98793] mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#4B3E3B] font-medium mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-[#B98793] uppercase mb-2">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-[#4B3E3B]/70 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
