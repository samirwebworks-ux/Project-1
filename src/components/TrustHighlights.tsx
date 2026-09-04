import React from 'react';
import { Waves, BedDouble, UtensilsCrossed, Flower2, Bell, Award, ShieldCheck, Star } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Waves,
      title: 'OCEANFRONT LOCATION',
      desc: 'Stunning views & direct beach access'
    },
    {
      icon: BedDouble,
      title: 'LUXURY ACCOMMODATIONS',
      desc: 'Spacious rooms & villas with modern comfort'
    },
    {
      icon: UtensilsCrossed,
      title: 'EXCEPTIONAL DINING',
      desc: 'Fresh flavors, local ingredients'
    },
    {
      icon: Flower2,
      title: 'WELLNESS & SPA',
      desc: 'Relax, rejuvenate & restore your soul'
    },
    {
      icon: Bell,
      title: 'WORLD-CLASS SERVICE',
      desc: 'Personalized service at every moment'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#faf8f5] border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 5-Column Feature Row matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#f1ede6] group-hover:bg-[#dfc19c]/30 text-[#1b2826] flex items-center justify-center mb-3.5 transition-colors border border-[#e2dad0]">
                  <Icon className="w-6 h-6 text-[#1b2826] group-hover:text-[#c5a072] transition-colors stroke-[1.5]" />
                </div>
                <h4 className="text-xs sm:text-[13px] font-bold tracking-[0.12em] text-[#1b2826] uppercase mb-1.5 font-sans">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6b7c77] leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Accreditations Bar */}
        <div className="mt-12 pt-8 border-t border-[#e8e2d8]/70 flex flex-wrap items-center justify-around gap-6 text-[#6b7c77] text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#c5a072]" />
            <span>AAA 5-Diamond Awarded Property</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-[#dfc19c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c5a072] text-[#c5a072]" />
              ))}
            </div>
            <span>TripAdvisor Traveler’s Choice Best of Key West</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a072]" />
            <span>Best Rate Guaranteed with Direct Booking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
