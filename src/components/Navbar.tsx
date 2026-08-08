import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex flex-col items-start focus:outline-none">
          <span className="font-serif-editorial text-2xl md:text-3xl tracking-[0.22em] text-[#4B3E3B] font-light uppercase group-hover:text-[#B98793] transition-colors duration-300">
            ÉLÉGANCE
          </span>
          <span className="text-[9px] font-sans-clean tracking-[0.35em] text-[#B98793] uppercase -mt-1 font-medium">
            Atelier De Beauté
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs tracking-[0.18em] uppercase text-[#4B3E3B]/80 hover:text-[#4B3E3B] font-medium transition-colors duration-300 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B98793] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs tracking-widest text-[#4B3E3B] hover:text-[#B98793] transition-colors duration-300 px-3 py-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#A8B8A5]" />
            <span className="uppercase font-medium">WhatsApp</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenInquiry}
            className="glass-pill px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[#4B3E3B] hover:bg-[#B98793] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md border border-[#B98793]/30 flex items-center space-x-2"
          >
            <Sparkles className="w-3 h-3 text-[#B98793] group-hover:text-white" />
            <span>Inquire Now</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={onOpenInquiry}
            className="text-xs tracking-wider uppercase font-medium text-[#4B3E3B] bg-[#F3E6DF] px-3.5 py-1.5 rounded-full border border-[#B98793]/30"
          >
            Inquire
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="p-2 text-[#4B3E3B] hover:text-[#B98793] focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-[#FCF9F6]/95 backdrop-blur-2xl border-b border-[#F3E6DF] shadow-xl py-8 px-8 z-40"
          >
            <div className="flex flex-col space-y-5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif-editorial text-2xl tracking-[0.15em] text-[#4B3E3B] hover:text-[#B98793] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-[#F3E6DF]/60 flex flex-col items-center space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 bg-[#B98793] text-white rounded-full text-xs tracking-[0.2em] uppercase font-medium shadow-md"
                >
                  Contact Concierge
                </button>
                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className="text-xs tracking-wider text-[#4B3E3B] flex items-center space-x-2 pt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B98793]" />
                  <span>{CONTACT_DATA.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
