import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/resortData';
import { Experience } from '../types';
import { Palmtree, Utensils, Flower2, Compass, Clock, ArrowRight, Check, X, Sparkles, Send } from 'lucide-react';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({ onOpenBooking }) => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palmtree':
        return Palmtree;
      case 'Utensils':
        return Utensils;
      case 'Flower':
        return Flower2;
      case 'Compass':
      default:
        return Compass;
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedExp(null);
    }, 2800);
  };

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-[#f5f0ea] border-y border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Refined Flourish */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            UNFORGETTABLE MOMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Experiences to Inspire
          </h2>

          {/* Flourish Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            From secluded coral reef excursions and private sunset catamarans to starlit culinary journeys, let our concierge craft your Key West memories.
          </p>
        </div>

        {/* 4 Cards Grid - Exactly matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXPERIENCES_DATA.map((exp) => {
            const IconComponent = getIcon(exp.iconName);
            return (
              <div
                key={exp.id}
                id={`card-experience-${exp.id}`}
                onClick={() => setSelectedExp(exp)}
                className="group cursor-pointer flex flex-col items-center text-center"
              >
                {/* Image Container with Round Floating Icon Pill */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-6 shadow-sm border border-[#e2dad0] group-hover:shadow-md transition-all duration-300">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Icon floating badge in center bottom of photo matching reference */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#1b2826] flex items-center justify-center shadow-md border border-[#e8e2d8] group-hover:bg-[#1b2826] group-hover:text-[#dfc19c] transition-colors duration-300">
                    <IconComponent className="w-5 h-5 transition-colors stroke-[1.7]" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="pt-2 px-2">
                  <h3 className="font-sans text-xs sm:text-sm font-bold tracking-[0.14em] text-[#1b2826] uppercase mb-1.5 group-hover:text-[#c5a072] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#6b7c77] leading-relaxed max-w-[220px] mx-auto mb-3">
                    {exp.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1b2826] group-hover:text-[#c5a072] uppercase tracking-wider">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button: VIEW ALL EXPERIENCES */}
        <div className="mt-14 text-center">
          <button
            id="btn-view-all-experiences"
            onClick={() => setSelectedExp(EXPERIENCES_DATA[0])}
            className="px-8 py-3.5 rounded-sm border border-[#1b2826] text-[#1b2826] hover:bg-[#1b2826] hover:text-[#dfc19c] text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 shadow-sm"
          >
            VIEW ALL EXPERIENCES
          </button>
        </div>
      </div>

      {/* Experience Details & Booking Inquiry Modal */}
      {selectedExp && (
        <div
          id="modal-experience-overlay"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedExp(null)}
        >
          <div
            id="modal-experience-content"
            className="bg-[#faf8f5] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#e8e2d8] relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="btn-close-exp-modal"
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative h-60 sm:h-72 w-full">
              <img
                src={selectedExp.image}
                alt={selectedExp.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2826] via-[#1b2826]/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#dfc19c] text-[#152220] mb-2 inline-block">
                  SIGNATURE RESORT EXPERIENCE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">{selectedExp.title}</h3>
                <p className="text-xs text-white/80 mt-1">{selectedExp.subtitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e8e2d8] text-xs">
                <div className="flex items-center gap-2 text-[#1b2826] font-semibold">
                  <Clock className="w-4 h-4 text-[#c5a072]" />
                  <span>Duration: {selectedExp.duration}</span>
                </div>
                <div className="text-[#1b2826] font-bold">
                  <span>Price: {selectedExp.price}</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#4a5568] leading-relaxed">
                {selectedExp.description}
              </p>

              {/* Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b2826] mb-3">
                  Experience Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedExp.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#2d3748]">
                      <Check className="w-3.5 h-3.5 text-[#c5a072] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry / Booking Form */}
              <div className="mt-6 pt-6 border-t border-[#e8e2d8]">
                {inquirySent ? (
                  <div className="p-4 rounded-lg bg-[#eef7ee] border border-[#c3e6cb] text-center text-xs text-[#155724] font-medium animate-fade-in">
                    <Sparkles className="w-5 h-5 mx-auto mb-1 text-[#28a745]" />
                    <p className="font-bold text-sm">Experience Request Submitted!</p>
                    <p className="mt-1">Our Chief Concierge will confirm your reservation details shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <p className="text-xs font-bold tracking-wider uppercase text-[#1b2826]">
                      Reserve or Inquire with Haven Concierge
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                      />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-2.5 bg-[#1b2826] hover:bg-[#273a35] text-[#dfc19c] font-bold text-xs tracking-wider uppercase rounded shadow-sm flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Concierge Request</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedExp(null);
                          onOpenBooking();
                        }}
                        className="px-4 py-2.5 bg-[#dfc19c] hover:bg-[#eccfae] text-[#1b2826] font-bold text-xs tracking-wider uppercase rounded shadow-sm"
                      >
                        Book Stay
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
