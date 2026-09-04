import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/resortData';
import { Room } from '../types';
import { Sparkles, Users, Maximize, Eye, Calendar, ArrowRight, Check } from 'lucide-react';

interface AccommodationsProps {
  onSelectRoom: (room: Room) => void;
  onBookRoom: (room: Room) => void;
}

export const AccommodationsSection: React.FC<AccommodationsProps> = ({ onSelectRoom, onBookRoom }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'oceanfront' | 'suite' | 'villa' | 'penthouse'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredRooms = activeFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(r => r.category === activeFilter);

  const displayedRooms = showAll ? filteredRooms : filteredRooms.slice(0, 3);

  return (
    <section id="stay" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Refined Flourish matching reference image */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            STAY IN STYLE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Rooms & Suites Designed for You
          </h2>

          {/* Elegant Floral Flourish Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Every sanctuary at Ocean Haven is appointed with natural coastal finishes, plush Egyptian linens, and floor-to-ceiling vistas of the azure Key West horizon.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Accommodations' },
              { id: 'oceanfront', label: 'Ocean View Rooms' },
              { id: 'suite', label: 'Poolside & Suites' },
              { id: 'villa', label: 'Private Villas' },
              { id: 'penthouse', label: 'Royal Penthouse' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-rooms-${tab.id}`}
                onClick={() => {
                  setActiveFilter(tab.id as 'all' | 'oceanfront' | 'suite' | 'villa' | 'penthouse');
                  setShowAll(true);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#1b2826] text-[#dfc19c] shadow-sm'
                    : 'bg-[#f1ede6] text-[#6b7c77] hover:text-[#1b2826] hover:bg-[#e8e2d8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Cards Grid - Exactly matching reference image layout & typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayedRooms.map((room) => (
            <div
              key={room.id}
              id={`card-room-${room.id}`}
              className="bg-white rounded-lg overflow-hidden border border-[#e8e2d8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Room Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#e8e2d8]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Popular or Category Tag */}
                {room.popular && (
                  <span className="absolute top-3.5 left-3.5 bg-[#1b2826]/90 backdrop-blur-md text-[#dfc19c] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#dfc19c]/30 shadow-sm">
                    MOST REQUESTED
                  </span>
                )}

                {/* Quick specs pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#dfc19c]" />
                    <span>Up to {room.maxGuests} Guests</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5 text-[#dfc19c]" />
                    <span>{room.sizeSqFt} sq ft</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1b2826] tracking-tight mb-2">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6b7c77] leading-relaxed mb-4 min-h-[40px]">
                    {room.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="text-left space-y-1.5 mb-6 pt-3 border-t border-[#f1ede6]">
                    {room.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4a5568]">
                        <Check className="w-3.5 h-3.5 text-[#c5a072] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Price Row matching reference */}
                  <div className="mb-5">
                    <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#6b7c77]">
                      FROM{' '}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1b2826]">
                      ${room.pricePerNight}
                    </span>
                    <span className="text-xs font-bold tracking-[0.12em] text-[#6b7c77] uppercase">
                      {' '}/ NIGHT
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`btn-view-details-${room.id}`}
                      onClick={() => onSelectRoom(room)}
                      className="py-3 px-3 rounded-sm bg-[#1b2826] hover:bg-[#283d38] text-white text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm border border-[#1b2826]"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      id={`btn-instant-book-${room.id}`}
                      onClick={() => onBookRoom(room)}
                      className="py-3 px-3 rounded-sm bg-[#dfc19c] hover:bg-[#ebd2b3] text-[#1b2826] text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm border border-[#dfc19c]"
                    >
                      RESERVE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button: VIEW ALL ACCOMMODATIONS */}
        <div className="mt-14 text-center">
          <button
            id="btn-view-all-accommodations"
            onClick={() => {
              setShowAll(!showAll);
              setActiveFilter('all');
            }}
            className="px-8 py-3.5 rounded-sm border border-[#1b2826] text-[#1b2826] hover:bg-[#1b2826] hover:text-[#dfc19c] text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 shadow-sm hover:shadow"
          >
            {showAll ? 'SHOW FEATURED ACCOMMODATIONS' : 'VIEW ALL ACCOMMODATIONS'}
          </button>
        </div>
      </div>
    </section>
  );
};
