import React, { useState } from 'react';
import { DINING_VENUES } from '../data/resortData';
import { DiningVenue } from '../types';
import { UtensilsCrossed, Clock, Sparkles, Wine, Calendar, Check, X, Users } from 'lucide-react';

interface DiningProps {
  onReserveTable: (venueName: string) => void;
}

export const DiningSection: React.FC<DiningProps> = ({ onReserveTable }) => {
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue>(DINING_VENUES[0]);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <section id="dining" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            CULINARY EXCELLENCE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Waterfront Flavors & Sunset Libations
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Taste the bounties of the Florida Keys with locally caught seafood, farm-fresh ingredients, and sommelier-curated vintages under the warm coastal evening sky.
          </p>

          {/* Venue Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {DINING_VENUES.map((venue) => (
              <button
                key={venue.id}
                id={`tab-dining-${venue.id}`}
                onClick={() => setSelectedVenue(venue)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  selectedVenue.id === venue.id
                    ? 'bg-[#1b2826] text-[#dfc19c] shadow-sm'
                    : 'bg-[#f1ede6] text-[#6b7c77] hover:text-[#1b2826] hover:bg-[#e8e2d8]'
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Venue Showcase */}
        <div className="bg-white rounded-2xl border border-[#e8e2d8] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-500">
          {/* Venue Image */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] overflow-hidden">
            <img
              src={selectedVenue.image}
              alt={selectedVenue.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 bg-[#1b2826]/90 backdrop-blur-md text-[#dfc19c] text-[10px] font-bold tracking-widest uppercase rounded-full mb-2 border border-[#dfc19c]/30">
                {selectedVenue.cuisine}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">{selectedVenue.name}</h3>
              <p className="text-xs text-white/80">{selectedVenue.tagline}</p>
            </div>
          </div>

          {/* Venue Details & Signature Menu Preview */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-[#faf8f5]">
            <div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#6b7c77] pb-4 border-b border-[#e8e2d8]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c5a072]" />
                  <span>{selectedVenue.hours}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wine className="w-3.5 h-3.5 text-[#c5a072]" />
                  <span>Attire: {selectedVenue.dressCode}</span>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#4a5568] leading-relaxed">
                {selectedVenue.description}
              </p>

              {/* Signature Dishes List */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b2826] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a072]" />
                  <span>Chef's Signature Selections</span>
                </h4>
                {selectedVenue.signatureDishes.map((dish, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white border border-[#e8e2d8]/70 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#1b2826]">{dish.name}</p>
                      <p className="text-[11px] text-[#6b7c77] mt-0.5">{dish.description}</p>
                    </div>
                    <span className="font-serif font-bold text-sm text-[#c5a072] flex-shrink-0">{dish.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-[#e8e2d8] flex flex-wrap items-center gap-3">
              <button
                id={`btn-reserve-table-${selectedVenue.id}`}
                onClick={() => onReserveTable(selectedVenue.name)}
                className="flex-1 py-3 px-5 rounded-sm bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 border border-[#dfc19c]/30"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE A TABLE</span>
              </button>

              <button
                id={`btn-view-menu-${selectedVenue.id}`}
                onClick={() => setMenuModalOpen(true)}
                className="py-3 px-5 rounded-sm border border-[#1b2826] text-[#1b2826] hover:bg-[#1b2826] hover:text-[#dfc19c] text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200"
              >
                VIEW FULL MENU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Modal */}
      {menuModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setMenuModalOpen(false)}
        >
          <div
            className="bg-[#faf8f5] rounded-xl max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto border border-[#e8e2d8] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#e8e2d8] text-[#1b2826]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center pb-6 border-b border-[#e8e2d8]">
              <p className="text-xs font-bold tracking-widest text-[#c5a072] uppercase">Seasonal Culinary Menu</p>
              <h3 className="font-serif text-2xl font-bold text-[#1b2826] mt-1">{selectedVenue.name}</h3>
              <p className="text-xs text-[#6b7c77] mt-1">{selectedVenue.cuisine} • {selectedVenue.hours}</p>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1b2826] pb-2 border-b border-[#e8e2d8] mb-4">
                  Raw Bar & Appetizers
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-[#1b2826]">Apalachicola Oysters on the Half Shell (Half Dozen)</p>
                      <p className="text-[#6b7c77]">Key lime mignonette, house cocktail sauce, fresh horseradish</p>
                    </div>
                    <span className="font-serif font-bold text-[#c5a072]">$24</span>
                  </div>
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-[#1b2826]">Florida Spiny Lobster Bisque</p>
                      <p className="text-[#6b7c77]">Cognac cream, butter-poached lobster morsels, chive oil</p>
                    </div>
                    <span className="font-serif font-bold text-[#c5a072]">$19</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1b2826] pb-2 border-b border-[#e8e2d8] mb-4">
                  Entrees & Catch of the Day
                </h4>
                <div className="space-y-3">
                  {selectedVenue.signatureDishes.map((dish, i) => (
                    <div key={i} className="flex justify-between items-start text-xs">
                      <div>
                        <p className="font-bold text-[#1b2826]">{dish.name}</p>
                        <p className="text-[#6b7c77]">{dish.description}</p>
                      </div>
                      <span className="font-serif font-bold text-[#c5a072]">{dish.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1b2826] pb-2 border-b border-[#e8e2d8] mb-4">
                  Handcrafted Desserts & Digestifs
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-[#1b2826]">Signature Key Lime Pavlova</p>
                      <p className="text-[#6b7c77]">Crispy meringue nest, Key lime curd, passionfruit coulis, toasted coconut</p>
                    </div>
                    <span className="font-serif font-bold text-[#c5a072]">$14</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8e2d8] flex justify-end">
              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  onReserveTable(selectedVenue.name);
                }}
                className="w-full py-3 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-wider uppercase rounded"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
