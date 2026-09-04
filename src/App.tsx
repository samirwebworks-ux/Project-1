import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AccommodationsSection } from './components/AccommodationsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DiningSection } from './components/DiningSection';
import { WellnessSection } from './components/WellnessSection';
import { GallerySection } from './components/GallerySection';
import { OffersSection } from './components/OffersSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals & Drawers
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { VideoModal } from './components/VideoModal';
import { TableReservationModal } from './components/TableReservationModal';
import { SpaBookingModal } from './components/SpaBookingModal';
import { ConciergeChatDrawer } from './components/ConciergeChatDrawer';

// Data types
import { Room, SpaTreatment, Offer } from './types';
import { MessageSquare, ArrowUp, Calendar, Volume2, Sparkles } from 'lucide-react';

export function App() {
  // Global Modals State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<{
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    roomType?: string;
    promoCode?: string;
  }>({});

  const [selectedRoomForDetails, setSelectedRoomForDetails] = useState<Room | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [tableVenueName, setTableVenueName] = useState<string>('Azure Horizon');
  const [spaModalOpen, setSpaModalOpen] = useState(false);
  const [selectedSpaTreatment, setSelectedSpaTreatment] = useState<SpaTreatment | null>(null);
  const [conciergeDrawerOpen, setConciergeDrawerOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handlers
  const handleOpenBooking = (initialData?: typeof bookingInitialData) => {
    if (initialData) {
      setBookingInitialData(initialData);
    } else {
      setBookingInitialData({});
    }
    setBookingModalOpen(true);
  };

  const handleBookRoom = (room: Room) => {
    setBookingInitialData({ roomType: room.id });
    setBookingModalOpen(true);
  };

  const handleClaimOffer = (offer: Offer) => {
    setBookingInitialData({ promoCode: offer.code });
    setBookingModalOpen(true);
  };

  const handleReserveTable = (venueName: string) => {
    setTableVenueName(venueName);
    setTableModalOpen(true);
  };

  const handleBookSpa = (treatment: SpaTreatment) => {
    setSelectedSpaTreatment(treatment);
    setSpaModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1b2826] flex flex-col font-sans selection:bg-[#dfc19c] selection:text-[#1b2826]">
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenConcierge={() => setConciergeDrawerOpen(true)}
      />

      {/* Main Sections Content */}
      <main className="flex-1">
        {/* 1. Hero with Booking Search Bar */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 2. Trust Highlights 5-column Bar */}
        <TrustHighlights />

        {/* 3. Accommodations / Suites Showcase */}
        <AccommodationsSection
          onSelectRoom={(room) => setSelectedRoomForDetails(room)}
          onBookRoom={handleBookRoom}
        />

        {/* 4. Experiences to Inspire */}
        <ExperiencesSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Culinary & Waterfront Dining */}
        <DiningSection
          onReserveTable={handleReserveTable}
        />

        {/* 6. Wellness & Botanical Spa */}
        <WellnessSection
          onBookSpa={handleBookSpa}
        />

        {/* 7. High-Res Photo Gallery */}
        <GallerySection />

        {/* 8. Special Packages & Offers */}
        <OffersSection
          onClaimOffer={handleClaimOffer}
        />

        {/* 9. Guest Reviews & Testimonials */}
        <ReviewsSection />

        {/* 10. Key West Location & Attractions Guide */}
        <LocationSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection
          onOpenConcierge={() => setConciergeDrawerOpen(true)}
        />

        {/* 12. Sunset CTA Booking Banner */}
        <CtaBanner
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 13. Contact & Concierge Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Bottom Quick Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            id="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1b2826] hover:bg-[#1b2826] hover:text-[#dfc19c] border border-[#e2dad0] shadow-lg flex items-center justify-center transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Concierge Live Chat Trigger Pill */}
        <button
          id="btn-floating-concierge"
          onClick={() => setConciergeDrawerOpen(true)}
          className="px-4 py-2.5 rounded-full bg-[#1b2826] text-[#dfc19c] hover:bg-[#253935] border border-[#dfc19c]/40 shadow-xl flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 group"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Ask Concierge</span>
        </button>
      </div>

      {/* Interactive Modals & Drawers */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      <RoomDetailsModal
        room={selectedRoomForDetails}
        onClose={() => setSelectedRoomForDetails(null)}
        onBookNow={handleBookRoom}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <TableReservationModal
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
        venueName={tableVenueName}
      />

      <SpaBookingModal
        isOpen={spaModalOpen}
        onClose={() => setSpaModalOpen(false)}
        treatment={selectedSpaTreatment}
      />

      <ConciergeChatDrawer
        isOpen={conciergeDrawerOpen}
        onClose={() => setConciergeDrawerOpen(false)}
        onOpenBooking={() => {
          setConciergeDrawerOpen(false);
          handleOpenBooking();
        }}
      />
    </div>
  );
}

export default App;
