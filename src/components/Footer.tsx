import React from 'react';
import { Instagram, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { CONTACT_DATA } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B3E3B] text-[#FCF9F6] pt-20 pb-12 relative overflow-hidden">
      {/* Delicate background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B98793]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FCF9F6]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="group flex flex-col items-start mb-6">
              <span className="font-serif-editorial text-3xl sm:text-4xl tracking-[0.25em] text-[#FCF9F6] font-light uppercase group-hover:text-[#B98793] transition-colors">
                ÉLÉGANCE
              </span>
              <span className="text-[10px] font-sans-clean tracking-[0.35em] text-[#B98793] uppercase -mt-1 font-medium">
                Haute Beauté Atelier
              </span>
            </a>

            <p className="text-xs text-[#FCF9F6]/70 font-light max-w-sm leading-relaxed mb-6">
              An exclusive haven dedicated to high-fashion beauty artistry, organic botanical formulations, and serene personal transformations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#FCF9F6]/20 flex items-center justify-center text-[#FCF9F6]/80 hover:text-white hover:border-[#B98793] hover:bg-[#B98793]/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="w-10 h-10 rounded-full border border-[#FCF9F6]/20 flex items-center justify-center text-[#FCF9F6]/80 hover:text-white hover:border-[#B98793] hover:bg-[#B98793]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Vogue Editorial Feature"
                className="w-10 h-10 rounded-full border border-[#FCF9F6]/20 flex items-center justify-center text-[#FCF9F6]/80 hover:text-white hover:border-[#B98793] hover:bg-[#B98793]/20 transition-all"
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.25em] uppercase text-[#B98793] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-light text-[#FCF9F6]/80">
              <li>
                <a href="#services" className="hover:text-[#B98793] transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#B98793] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#B98793] transition-colors">
                  Featured Transformations
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#B98793] transition-colors">
                  Why Clients Love Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B98793] transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B98793] transition-colors">
                  Atelier Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Atelier Hours & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-medium tracking-[0.25em] uppercase text-[#B98793] mb-6">
              Fifth Avenue Atelier
            </h4>
            <p className="text-xs text-[#FCF9F6]/80 font-light leading-relaxed mb-4">
              Fifth Avenue Atelier, Manhattan, New York <br />
              Direct: {CONTACT_DATA.phone} <br />
              Email: {CONTACT_DATA.email}
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#FCF9F6]/70 font-light">
              Visits are hosted exclusively by private appointment to guarantee peace and confidentiality.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-light text-[#FCF9F6]/60 space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} ÉLÉGANCE Atelier De Beauté. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-white cursor-pointer">Terms of Concierge</span>
            <span className="hover:text-white cursor-pointer">Ethical Sourcing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
