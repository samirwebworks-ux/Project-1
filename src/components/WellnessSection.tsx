import React, { useState } from 'react';
import { SPA_TREATMENTS } from '../data/resortData';
import { SpaTreatment } from '../types';
import { Flower2, Sparkles, Clock, Check, Calendar, ArrowRight, X, Heart } from 'lucide-react';

interface WellnessProps {
  onBookSpa: (treatment: SpaTreatment) => void;
}

export const WellnessSection: React.FC<WellnessProps> = ({ onBookSpa }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'massage' | 'body' | 'facial' | 'ritual'>('all');

  const filteredTreatments = selectedCategory === 'all'
    ? SPA_TREATMENTS
    : SPA_TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="wellness" className="py-20 sm:py-28 bg-[#f5f0ea] border-y border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            HOLISTIC SANCTUARY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Haven Spa & Oceanfront Wellness
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Surrender to tranquil ocean breezes, organic Florida Keys botanicals, and restorative body therapies in our open-air garden pavilions.
          </p>

          {/* Treatment Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Therapies' },
              { id: 'massage', label: 'Restorative Massage' },
              { id: 'facial', label: 'Marine Facials' },
              { id: 'body', label: 'Botanical Body Scrubs' },
              { id: 'ritual', label: 'Couple’s Rituals' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-spa-${tab.id}`}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? 'bg-[#1b2826] text-[#dfc19c] shadow-sm'
                    : 'bg-white text-[#6b7c77] hover:text-[#1b2826] hover:bg-[#e8e2d8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={`card-spa-${treatment.id}`}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#e2dad0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#c5a072] block mb-1">
                      {treatment.category.toUpperCase()} TREATMENT
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1b2826] group-hover:text-[#c5a072] transition-colors">
                      {treatment.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-serif text-xl font-bold text-[#1b2826]">{treatment.price}</span>
                    <span className="block text-[11px] text-[#6b7c77] font-medium flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-[#c5a072]" />
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed mb-4">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="space-y-1.5 pt-3 border-t border-[#f1ede6] mb-6">
                  {treatment.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#6b7c77]">
                      <Check className="w-3.5 h-3.5 text-[#c5a072] flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#f1ede6]">
                <span className="text-[11px] text-[#6b7c77] italic">
                  Includes full access to hydrotherapy pools & herbal tea lounge
                </span>
                <button
                  id={`btn-book-spa-${treatment.id}`}
                  onClick={() => onBookSpa(treatment)}
                  className="px-4 py-2 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] text-xs font-bold tracking-wider uppercase rounded shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Therapy</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spa Sanctuary Banner */}
        <div className="mt-12 rounded-2xl overflow-hidden relative bg-[#1b2826] text-white p-8 sm:p-12 border border-[#3e5650] shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-[#dfc19c] text-xs font-bold tracking-widest uppercase mb-2">
              <Flower2 className="w-4 h-4 text-[#dfc19c]" />
              <span>Complimentary Wellness Rituals</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Daily Sunrise Yoga on the Oceanfront Deck
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
              Resort guests are invited every morning at 7:30 AM for a rejuvenating, gentle vinyasa flow guided by certified island instructors, followed by fresh coconut water and chilled eucalyptus towels.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                🌿 Organic Florida Botanicals
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                🌊 Saltwater Plunge Pools
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                🧘‍♂️ Private Yoga Sessions Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
