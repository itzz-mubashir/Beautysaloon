import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, HeartHandshake, Feather, ShieldCheck, Crown } from 'lucide-react';
import { WHY_US_DATA } from '../data/salonData';

export const WhyClientsLoveUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Award,
    HeartHandshake,
    Feather,
    ShieldCheck,
    Crown,
  };

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#F3E6DF]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
            Uncompromising Excellence
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight mb-4">
            Why Clients <span className="italic font-normal text-[#B98793]">Adore Us</span>
          </h2>
          <p className="text-sm font-sans-clean text-[#4B3E3B]/70 font-light leading-relaxed">
            Every touchpoint is designed around discretion, peace of mind, and bespoke beauty care.
          </p>
        </div>

        {/* 6 Premium Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 sm:p-9 rounded-[22px] border border-[#F3E6DF] hover:border-[#B98793]/40 shadow-xs hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-14 h-14 rounded-2xl bg-[#F3E6DF] border border-[#B98793]/20 flex items-center justify-center text-[#B98793] group-hover:bg-[#B98793] group-hover:text-white transition-colors duration-500 shadow-xs"
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>
                    <span className="text-[10px] font-medium tracking-[0.2em] text-[#B98793] uppercase bg-[#FCF9F6] px-3 py-1 rounded-full border border-[#F3E6DF]">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#4B3E3B] font-light mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B3E3B]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F3E6DF]/50 flex items-center space-x-2 text-[10px] tracking-[0.2em] text-[#4B3E3B]/60 uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8B8A5]" />
                  <span>Standard Of Atelier</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
