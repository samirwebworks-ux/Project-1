import React, { useState } from 'react';
import { Play, Calendar, Users, Home, ChevronDown, Sparkles, Star, MapPin, ArrowRight } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface HeroProps {
  onOpenBooking: (initialData?: { checkIn: string; checkOut: string; adults: number; children: number; roomType?: string }) => void;
  onOpenVideo: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo, onExploreClick }) => {
  // Today and 3 days later default dates
  const today = new Date();
  const defaultCheckIn = new Date(today.getTime() + 86400000 * 2).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.getTime() + 86400000 * 5).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return 'Select Date';
    const d = new Date(dateString + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleCheckAvailability = () => {
    onOpenBooking({
      checkIn,
      checkOut,
      adults,
      children
    });
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Image Container with Gradient Overlay for optimal contrast & luxury feel */}
      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Ocean Haven Resort & Spa Sunset Pool View"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-10000 hover:scale-105"
          />
          {/* Subtle Warm Vignette Overlay matching reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent sm:from-black/75 sm:via-black/40 sm:to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152220] via-transparent to-black/30" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full py-12 lg:py-16">
          <div className="max-w-2xl text-left">
            {/* Refined Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#dfc19c] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#dfc19c]" />
              <span>ESCAPE. RELAX. RECHARGE.</span>
            </div>

            {/* Editorial Headline with Italic Accent Script */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.12] tracking-tight mb-4 sm:mb-6 drop-shadow-md">
              Your Oceanfront <br className="hidden sm:block" />
              Paradise Awaits <br />
              <span className="font-script text-3xl sm:text-5xl lg:text-6xl text-[#dfc19c] font-normal italic drop-shadow">
                in Key West
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed max-w-xl mb-8 drop-shadow">
              Oceanfront luxury, world-class comfort, and unforgettable experiences in the heart of paradise.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="px-7 py-3.5 rounded-sm bg-[#152220] hover:bg-[#203330] text-[#dfc19c] hover:text-white text-xs sm:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-lg border border-[#dfc19c]/40 hover:scale-[1.02] active:scale-[0.99] flex items-center gap-2"
              >
                <span>EXPLORE THE RESORT</span>
                <ArrowRight className="w-4 h-4 text-[#dfc19c]" />
              </button>

              <button
                id="btn-hero-watch-video"
                onClick={onOpenVideo}
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 border border-white/30 flex items-center gap-2.5 group shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#152220] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>

            {/* Verified Rating Micro-Badge */}
            <div className="flex items-center gap-3 text-white/90 text-xs font-medium">
              <div className="flex items-center text-[#dfc19c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">1,280+ Verified Guest Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Availability Booking Widget - Exactly matches the reference image */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14">
        <div className="bg-[#1b2826] text-white rounded-lg sm:rounded-xl shadow-2xl p-4 sm:p-5 border border-[#324b45] backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {/* Check In */}
            <div className="relative p-2.5 sm:p-3 rounded-lg bg-[#152220]/80 border border-[#2b3e39] hover:border-[#dfc19c]/60 transition-colors">
              <label className="block text-[10px] tracking-[0.16em] uppercase text-[#dfc19c] font-bold mb-1 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#dfc19c]" />
                <span>CHECK IN</span>
              </label>
              <input
                id="input-hero-checkin"
                type="date"
                value={checkIn}
                min={today.toISOString().split('T')[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-white text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check Out */}
            <div className="relative p-2.5 sm:p-3 rounded-lg bg-[#152220]/80 border border-[#2b3e39] hover:border-[#dfc19c]/60 transition-colors">
              <label className="block text-[10px] tracking-[0.16em] uppercase text-[#dfc19c] font-bold mb-1 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#dfc19c]" />
                <span>CHECK OUT</span>
              </label>
              <input
                id="input-hero-checkout"
                type="date"
                value={checkOut}
                min={checkIn || today.toISOString().split('T')[0]}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-white text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
              />
            </div>

            {/* Guests Selector */}
            <div className="relative p-2.5 sm:p-3 rounded-lg bg-[#152220]/80 border border-[#2b3e39] hover:border-[#dfc19c]/60 transition-colors">
              <label className="block text-[10px] tracking-[0.16em] uppercase text-[#dfc19c] font-bold mb-1 flex items-center gap-1.5">
                <Users className="w-3 h-3 text-[#dfc19c]" />
                <span>GUESTS</span>
              </label>
              <button
                id="btn-guests-dropdown-toggle"
                type="button"
                onClick={() => {
                  setGuestDropdownOpen(!guestDropdownOpen);
                  setRoomDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-white focus:outline-none text-left"
              >
                <span>{adults} Adults, {children} Children</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#dfc19c]" />
              </button>

              {/* Guest Selector Dropdown */}
              {guestDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1b2826] border border-[#3e5650] rounded-lg shadow-2xl p-4 z-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Adults</p>
                      <p className="text-[10px] text-[#8e9f9b]">Ages 13+</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        id="btn-adults-decrement"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-[#243733] hover:bg-[#324a44] text-white flex items-center justify-center text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{adults}</span>
                      <button
                        id="btn-adults-increment"
                        onClick={() => setAdults(Math.min(8, adults + 1))}
                        className="w-6 h-6 rounded bg-[#243733] hover:bg-[#324a44] text-white flex items-center justify-center text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#2b3e39]">
                    <div>
                      <p className="text-xs font-semibold text-white">Children</p>
                      <p className="text-[10px] text-[#8e9f9b]">Ages 0-12</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        id="btn-children-decrement"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-[#243733] hover:bg-[#324a44] text-white flex items-center justify-center text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{children}</span>
                      <button
                        id="btn-children-increment"
                        onClick={() => setChildren(Math.min(6, children + 1))}
                        className="w-6 h-6 rounded bg-[#243733] hover:bg-[#324a44] text-white flex items-center justify-center text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    id="btn-guests-done"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full py-1.5 mt-2 bg-[#dfc19c] text-[#152220] rounded text-[11px] font-bold tracking-wider uppercase"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Rooms Selector */}
            <div className="relative p-2.5 sm:p-3 rounded-lg bg-[#152220]/80 border border-[#2b3e39] hover:border-[#dfc19c]/60 transition-colors">
              <label className="block text-[10px] tracking-[0.16em] uppercase text-[#dfc19c] font-bold mb-1 flex items-center gap-1.5">
                <Home className="w-3 h-3 text-[#dfc19c]" />
                <span>ROOMS</span>
              </label>
              <button
                id="btn-rooms-dropdown-toggle"
                type="button"
                onClick={() => {
                  setRoomDropdownOpen(!roomDropdownOpen);
                  setGuestDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-white focus:outline-none text-left"
              >
                <span>{rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#dfc19c]" />
              </button>

              {roomDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1b2826] border border-[#3e5650] rounded-lg shadow-2xl p-3 z-50 space-y-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      id={`btn-select-rooms-${num}`}
                      onClick={() => {
                        setRooms(num);
                        setRoomDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold ${
                        rooms === num ? 'bg-[#dfc19c] text-[#152220]' : 'text-white hover:bg-[#253935]'
                      }`}
                    >
                      {num} {num === 1 ? 'Room' : 'Rooms'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Check Availability CTA */}
            <div className="w-full">
              <button
                id="btn-hero-check-availability"
                onClick={handleCheckAvailability}
                className="w-full py-3.5 sm:py-4 px-4 rounded-lg bg-[#dfc19c] hover:bg-[#edd2b1] text-[#152220] font-bold text-xs sm:text-sm tracking-[0.14em] uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 border border-[#edd2b1]"
              >
                <span>CHECK AVAILABILITY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
