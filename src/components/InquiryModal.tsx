import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MessageCircle, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { CONTACT_DATA, SERVICES_DATA } from '../data/salonData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Haute Hair Styling');
  const [preferredMethod, setPreferredMethod] = useState<'whatsapp' | 'email' | 'phone'>('whatsapp');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ÉLÉGANCE Concierge,\n\nName: ${fullName || 'Valued Guest'}\nService: ${selectedService}\nContact: ${contactInfo || 'Not specified'}\nNote: ${notes || 'Bespoke inquiry'}`
    );
    window.open(`https://wa.me/${CONTACT_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#4B3E3B]/50 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#FCF9F6] border border-[#F3E6DF] rounded-[28px] max-w-xl w-full p-8 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F3E6DF]/60 text-[#4B3E3B] hover:bg-[#B98793] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center space-x-2 text-xs font-medium tracking-[0.25em] text-[#B98793] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Concierge</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#4B3E3B] mb-2 font-light">
                Atelier Inquiry
              </h3>

              <p className="text-xs text-[#4B3E3B]/70 font-light mb-8">
                Please provide your preferred contact channel. Our concierge will craft a customized proposal for your visit.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-[#4B3E3B] uppercase mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Vivienne Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#F3E6DF] text-xs text-[#4B3E3B] focus:outline-none focus:border-[#B98793] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-[#4B3E3B] uppercase mb-1.5">
                    Preferred Service Ritual
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#F3E6DF] text-xs text-[#4B3E3B] focus:outline-none focus:border-[#B98793] transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.subtitle})
                      </option>
                    ))}
                    <option value="Bridal Couture Package">Bridal Couture Package</option>
                    <option value="Private Atelier Consultation">Private Atelier Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-[#4B3E3B] uppercase mb-1.5">
                    Phone Number or Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +1 (212) 555-0192 or guest@domain.com"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#F3E6DF] text-xs text-[#4B3E3B] focus:outline-none focus:border-[#B98793] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-[#4B3E3B] uppercase mb-1.5">
                    Preferred Response Channel
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPreferredMethod('whatsapp')}
                      className={`p-3 rounded-xl text-xs font-medium flex items-center justify-center space-x-1.5 border transition-all ${
                        preferredMethod === 'whatsapp'
                          ? 'bg-[#B98793] text-white border-[#B98793]'
                          : 'bg-white text-[#4B3E3B] border-[#F3E6DF]'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredMethod('email')}
                      className={`p-3 rounded-xl text-xs font-medium flex items-center justify-center space-x-1.5 border transition-all ${
                        preferredMethod === 'email'
                          ? 'bg-[#B98793] text-white border-[#B98793]'
                          : 'bg-white text-[#4B3E3B] border-[#F3E6DF]'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredMethod('phone')}
                      className={`p-3 rounded-xl text-xs font-medium flex items-center justify-center space-x-1.5 border transition-all ${
                        preferredMethod === 'phone'
                          ? 'bg-[#B98793] text-white border-[#B98793]'
                          : 'bg-white text-[#4B3E3B] border-[#F3E6DF]'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] text-[#4B3E3B] uppercase mb-1.5">
                    Special Notes or Aesthetic Preferences (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify any preferences, hair length, allergies, or questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#F3E6DF] text-xs text-[#4B3E3B] focus:outline-none focus:border-[#B98793] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#4B3E3B] text-white rounded-full text-xs font-medium tracking-[0.22em] uppercase hover:bg-[#B98793] transition-colors shadow-lg"
                  >
                    Submit Concierge Request
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3 bg-emerald-700/90 text-white rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Connect</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-editorial text-3xl text-[#4B3E3B] mb-3">
                Inquiry Received
              </h3>
              <p className="text-xs text-[#4B3E3B]/80 font-light max-w-md mx-auto leading-relaxed mb-8">
                Thank you, <span className="font-medium text-[#4B3E3B]">{fullName || 'Valued Patron'}</span>. Our Concierge has received your request for <span className="text-[#B98793] font-medium">{selectedService}</span> and will reach out to you within two business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#4B3E3B] text-white rounded-full text-xs tracking-[0.2em] uppercase font-medium"
              >
                Return To Atelier
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
