import React, { useState } from 'react';
import { LANDMARKS_DATA, RESORT_INFO } from '../data/resortData';
import { MapPin, Navigation, Car, Bike, Plane, Clock, Compass, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(LANDMARKS_DATA[0]);

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#f5f0ea] border-y border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            ISLAND DESTINATION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Discover Key West, Florida
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Nestled on the tranquil Atlantic coast of Key West, Ocean Haven offers private secluded beach serenity while remaining minutes away from iconic historic Old Town landmarks.
          </p>
        </div>

        {/* Location & Interactive Landmarks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Custom Styled Map & Coordinates Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 border border-[#e2dad0] shadow-md space-y-4">
            <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-[#d9e5e3] border border-[#cbd8d6] flex items-center justify-center">
              {/* Stylized Island Map Graphic */}
              <div className="absolute inset-0 bg-[#e8f1f0] opacity-90">
                {/* Coastal SVG Landmass & Water Aesthetic */}
                <svg className="w-full h-full object-cover" viewBox="0 0 600 400" preserveAspectRatio="none">
                  <path d="M0,0 L600,0 L600,400 L0,400 Z" fill="#e5f2f0" />
                  <path d="M120,80 Q250,50 420,110 T580,240 Q490,340 320,310 T100,220 Z" fill="#d5e6e1" stroke="#b4ceca" strokeWidth="2" />
                  {/* Ocean wave ripples */}
                  <path d="M50,50 Q100,40 150,50" stroke="#a3c7c2" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M400,320 Q460,310 520,320" stroke="#a3c7c2" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M30,300 Q80,290 130,300" stroke="#a3c7c2" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
              </div>

              {/* Resort Pin (Centerpiece) */}
              <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center animate-bounce [animation-duration:3s]">
                <div className="px-3 py-1 rounded-full bg-[#1b2826] text-[#dfc19c] text-[10px] font-bold tracking-widest uppercase shadow-lg border border-[#dfc19c] flex items-center gap-1.5 whitespace-nowrap mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#dfc19c] animate-ping" />
                  <span>OCEAN HAVEN RESORT</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center shadow-2xl border-2 border-white">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
              </div>

              {/* Nearby landmark pins on map */}
              <div
                className="absolute top-[28%] left-[30%] z-10 cursor-pointer group"
                onClick={() => setSelectedLandmark(LANDMARKS_DATA[0])}
              >
                <div className="p-1.5 rounded-full bg-white text-[#1b2826] shadow border border-[#cbd8d6] hover:bg-[#1b2826] hover:text-[#dfc19c] transition-colors">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="absolute left-6 top-0 text-[10px] font-bold bg-white/90 px-2 py-0.5 rounded shadow text-[#1b2826] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Mallory Square
                </span>
              </div>

              <div
                className="absolute top-[65%] left-[25%] z-10 cursor-pointer group"
                onClick={() => setSelectedLandmark(LANDMARKS_DATA[3])}
              >
                <div className="p-1.5 rounded-full bg-white text-[#1b2826] shadow border border-[#cbd8d6] hover:bg-[#1b2826] hover:text-[#dfc19c] transition-colors">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="absolute left-6 top-0 text-[10px] font-bold bg-white/90 px-2 py-0.5 rounded shadow text-[#1b2826] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Southernmost Point
                </span>
              </div>

              {/* Quick Map Controls Info Badge */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-[#cbd8d6] text-[11px] text-[#1b2826] shadow-sm">
                <p className="font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a072]" />
                  {RESORT_INFO.address}
                </p>
                <p className="text-[10px] text-[#6b7c77]">GPS: 24.5551° N, 81.7800° W • Key West, FL</p>
              </div>

              {/* Directions Button */}
              <a
                id="btn-google-maps-directions"
                href="https://maps.google.com/?q=Key+West+Florida"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] text-[11px] font-bold px-3 py-2 rounded-lg shadow-md flex items-center gap-1.5 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Travel Times Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="p-3 rounded-lg bg-[#faf8f5] border border-[#e8e2d8]">
                <Plane className="w-4 h-4 text-[#c5a072] mx-auto mb-1" />
                <span className="font-bold text-[#1b2826] block">Key West Airport</span>
                <span className="text-[11px] text-[#6b7c77]">8 min (3.2 mi)</span>
              </div>
              <div className="p-3 rounded-lg bg-[#faf8f5] border border-[#e8e2d8]">
                <Car className="w-4 h-4 text-[#c5a072] mx-auto mb-1" />
                <span className="font-bold text-[#1b2826] block">Historic Old Town</span>
                <span className="text-[11px] text-[#6b7c77]">4 min (1.2 mi)</span>
              </div>
              <div className="p-3 rounded-lg bg-[#faf8f5] border border-[#e8e2d8]">
                <Bike className="w-4 h-4 text-[#c5a072] mx-auto mb-1" />
                <span className="font-bold text-[#1b2826] block">Mallory Square</span>
                <span className="text-[11px] text-[#6b7c77]">10 min bike ride</span>
              </div>
            </div>
          </div>

          {/* Landmarks List & Selected Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#1b2826]">
              Iconic Key West Attractions
            </h3>
            <p className="text-xs text-[#6b7c77] leading-relaxed">
              Explore legendary island culture with complimentary resort bicycles, golf carts, and chauffeured concierge transport.
            </p>

            <div className="space-y-3 pt-2">
              {LANDMARKS_DATA.map((lm, idx) => {
                const isSelected = selectedLandmark.name === lm.name;
                return (
                  <div
                    key={idx}
                    id={`landmark-item-${idx}`}
                    onClick={() => setSelectedLandmark(lm)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#1b2826] shadow-md'
                        : 'bg-[#faf8f5] border-[#e8e2d8] hover:bg-white hover:border-[#c5a072]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-[#c5a072] uppercase block">
                          {lm.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1b2826] font-sans">
                          {lm.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#f1ede6] text-[#1b2826] whitespace-nowrap">
                        {lm.distance}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4a5568] mt-1.5 leading-relaxed">
                      {lm.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-[#6b7c77]">
                      <Clock className="w-3 h-3 text-[#c5a072]" />
                      <span>{lm.timeByCar}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
