import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Check, X, Shield, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';

interface SignatureServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({
  onSelectServiceForInquiry
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FCF9F6] relative overflow-hidden">
      {/* Delicate background ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F3E6DF]/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B98793]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
              Curated Rituals
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight">
              Signature <span className="italic font-normal text-[#B98793]">Services</span>
            </h2>
          </div>
          <p className="text-sm font-sans-clean text-[#4B3E3B]/70 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
            Every ritual is a custom-tailored masterpiece, executed by master artisans using organic, botanical formulations.
          </p>
        </div>

        {/* Editorial Service Grid (Asymmetrical Layered Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[22px] overflow-hidden border border-[#F3E6DF] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Subtle Zoom */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#F3E6DF]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B3E3B]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {service.badge && (
                    <div className="absolute top-4 left-4 glass-pill px-3 py-1 rounded-full text-[10px] tracking-[0.2em] font-medium uppercase text-[#4B3E3B] border border-white/60 shadow-xs">
                      {service.badge}
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedService(service)}
                    aria-label={`View details for ${service.title}`}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#4B3E3B] hover:bg-[#B98793] hover:text-white transition-colors shadow-xs"
                  >
                    <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-[#B98793] uppercase mb-1.5 block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#4B3E3B] font-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B3E3B]/75 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-7 pb-7 pt-0 border-t border-[#F3E6DF]/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-medium tracking-[0.18em] uppercase text-[#4B3E3B] hover:text-[#B98793] transition-colors flex items-center space-x-1.5"
                >
                  <span>Explore Ritual</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="text-xs font-medium tracking-[0.18em] uppercase text-[#B98793] hover:underline"
                >
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal Expansion */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#4B3E3B]/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-[#FCF9F6] border border-[#F3E6DF] rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl z-10 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#4B3E3B] hover:bg-[#B98793] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F6] via-transparent to-black/20" />
              </div>

              <div className="p-8 sm:p-10 -mt-10 relative z-10">
                <span className="text-xs font-medium tracking-[0.25em] text-[#B98793] uppercase mb-1 block">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#4B3E3B] mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-[#4B3E3B]/80 font-light leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <h4 className="text-xs tracking-[0.2em] font-medium text-[#4B3E3B] uppercase mb-4 border-b border-[#F3E6DF] pb-2">
                  Ritual Highlights & Protocol
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#4B3E3B]">
                      <div className="w-4 h-4 rounded-full bg-[#F3E6DF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#B98793]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F3E6DF]">
                  <div className="flex items-center space-x-2 text-xs text-[#4B3E3B]/70">
                    <Shield className="w-4 h-4 text-[#A8B8A5]" />
                    <span>100% Organic & Non-Toxic Formulations</span>
                  </div>

                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onSelectServiceForInquiry(title);
                    }}
                    className="bg-[#4B3E3B] text-white px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#B98793] transition-colors"
                  >
                    Inquire About This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
