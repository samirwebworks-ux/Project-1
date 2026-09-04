import React from 'react';
import { Calendar, ShieldCheck, Sparkles, Gift } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background with warm golden hour resort pool aesthetic matching reference image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
          alt="Ocean Haven Key West Sunset Pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfc19c] text-xs font-bold tracking-widest uppercase mb-4 border border-white/15 backdrop-blur-md">
            <Gift className="w-3.5 h-3.5 text-[#dfc19c]" />
            <span>BEST RATE GUARANTEE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight mb-4 drop-shadow-md">
            Plan Your Perfect Getaway
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-8 drop-shadow">
            Book directly with us for the best rates, exclusive offers & unforgettable memories.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              id="btn-cta-book-your-stay"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-sm bg-[#dfc19c] hover:bg-[#ebd2b3] text-[#152220] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-200 shadow-xl hover:scale-105 active:scale-98 flex items-center gap-2 border border-[#ebd2b3]"
            >
              <Calendar className="w-4 h-4 text-[#152220]" />
              <span>BOOK YOUR STAY</span>
            </button>

            <span className="text-xs text-white/80 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#dfc19c]" />
              <span>Free cancellation up to 72h before arrival</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
