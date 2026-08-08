import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignatureServices } from './components/SignatureServices';
import { OurPhilosophy } from './components/OurPhilosophy';
import { FeaturedTransformations } from './components/FeaturedTransformations';
import { WhyClientsLoveUs } from './components/WhyClientsLoveUs';
import { ClientReviews } from './components/ClientReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (serviceTitle?: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setSelectedServiceTitle(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-[#4B3E3B] font-sans-clean selection:bg-[#B98793]/20 selection:text-[#4B3E3B] relative overflow-x-hidden">
      
      {/* Luxury Sticky Navbar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Page Sections */}
      <main>
        {/* Full-Screen Hero Section */}
        <HeroSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* Signature Services Section */}
        <SignatureServices
          onSelectServiceForInquiry={(serviceTitle) => handleOpenInquiry(serviceTitle)}
        />

        {/* Our Philosophy Story & Ethos */}
        <OurPhilosophy />

        {/* Featured Transformations Lookbook Gallery */}
        <FeaturedTransformations />

        {/* Why Clients Love Us Icon Cards */}
        <WhyClientsLoveUs />

        {/* Client Reviews Quote Slider */}
        <ClientReviews />

        {/* Atelier Contact Panel */}
        <ContactSection
          onOpenInquiry={() => handleOpenInquiry()}
          selectedServiceTitle={selectedServiceTitle}
        />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Inquiry Drawer Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        initialService={selectedServiceTitle}
      />

    </div>
  );
}
