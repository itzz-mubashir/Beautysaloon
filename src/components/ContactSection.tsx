import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MessageCircle, Sparkles, Check, Copy, Send } from 'lucide-react';
import { CONTACT_DATA } from '../data/salonData';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  selectedServiceTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenInquiry,
  selectedServiceTitle
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F3E6DF]/30 relative overflow-hidden">
      {/* Background soft glow shapes */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#B98793]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#A8B8A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#B98793] mb-3 block">
            Private Atelier Concierge
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4B3E3B] font-light leading-tight mb-4">
            Begin Your <span className="italic font-normal text-[#B98793]">Transformation</span>
          </h2>
          <p className="text-sm font-sans-clean text-[#4B3E3B]/70 font-light leading-relaxed">
            Reach out directly to our Atelier Concierge for bespoke inquiries, bridal consultations, or private suite reservations.
          </p>
        </div>

        {/* Layered Contact Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Information & Direct Channels (7 Columns) */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-12 rounded-[28px] border border-[#F3E6DF] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-medium tracking-[0.2em] text-[#B98793] uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Atelier Contact Details</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#4B3E3B] font-light mb-8">
                Fifth Avenue Atelier
              </h3>

              {/* Phone Row */}
              <div className="p-5 rounded-2xl bg-[#FCF9F6] border border-[#F3E6DF] mb-4 flex items-center justify-between group hover:border-[#B98793]/40 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F3E6DF] flex items-center justify-center text-[#B98793]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#B98793]">Direct Telephone</span>
                    <a href={`tel:${CONTACT_DATA.phone}`} className="block font-serif-editorial text-2xl text-[#4B3E3B] hover:text-[#B98793] transition-colors">
                      {CONTACT_DATA.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                  className="p-2 text-[#4B3E3B]/60 hover:text-[#B98793] transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Row */}
              <div className="p-5 rounded-2xl bg-[#FCF9F6] border border-[#F3E6DF] mb-8 flex items-center justify-between group hover:border-[#B98793]/40 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F3E6DF] flex items-center justify-center text-[#B98793]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#B98793]">Concierge Email</span>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="block font-sans-clean text-base text-[#4B3E3B] hover:text-[#B98793] transition-colors">
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                  className="p-2 text-[#4B3E3B]/60 hover:text-[#B98793] transition-colors"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Hours Grid */}
              <div className="pt-6 border-t border-[#F3E6DF]">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#4B3E3B] font-medium mb-4">
                  <Clock className="w-4 h-4 text-[#B98793]" />
                  <span>Business Hours</span>
                </div>
                <div className="space-y-2">
                  {CONTACT_DATA.businessHours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs sm:text-sm text-[#4B3E3B]/80 font-light border-b border-[#F3E6DF]/50 pb-2">
                      <span>{h.days}</span>
                      <span className="font-medium text-[#4B3E3B]">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#F3E6DF] flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${CONTACT_DATA.whatsappNumber}?text=Hello%20%C3%89L%C3%89GANCE%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20bespoke%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-700/90 text-white px-6 py-3.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenInquiry}
                className="flex-1 bg-[#4B3E3B] text-white px-6 py-3.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#B98793] transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Luxury Inquiry</span>
              </motion.button>
            </div>

          </div>

          {/* Right Side: Luxury Direct Message Card (5 Columns) */}
          <div className="lg:col-span-5 bg-[#FCF9F6] p-8 sm:p-12 rounded-[28px] border border-[#F3E6DF] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="text-[10px] font-medium tracking-[0.25em] text-[#B98793] uppercase mb-2 block">
                Atelier Guarantee
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#4B3E3B] font-light mb-4">
                Personalized Care
              </h3>
              <p className="text-xs sm:text-sm text-[#4B3E3B]/75 font-light leading-relaxed mb-6">
                Our Atelier Concierge personally responds to every communication within two business hours. All consultations remain strictly private and confidential.
              </p>

              <div className="p-6 rounded-2xl bg-[#F3E6DF]/40 border border-[#F3E6DF] space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-xs text-[#4B3E3B]">
                  <Sparkles className="w-4 h-4 text-[#B98793]" />
                  <span>Complimentary Organic Herbal Infusion upon arrival</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#4B3E3B]">
                  <Sparkles className="w-4 h-4 text-[#B98793]" />
                  <span>Private Valet Escort Service available upon request</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#4B3E3B]">
                  <Sparkles className="w-4 h-4 text-[#B98793]" />
                  <span>Custom skin & hair diagnostic profile creation</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#4B3E3B] text-[#FCF9F6]">
              <p className="font-serif-editorial text-xl font-light italic mb-2">
                "We look forward to welcoming you to your personal sanctuary of beauty."
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#B98793]">
                — The Atelier Concierge Team
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
