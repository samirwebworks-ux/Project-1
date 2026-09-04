import React, { useState } from 'react';
import { OFFERS_DATA } from '../data/resortData';
import { Offer } from '../types';
import { Tag, Sparkles, Check, ArrowRight, Copy, CheckCheck } from 'lucide-react';

interface OffersProps {
  onClaimOffer: (offer: Offer) => void;
}

export const OffersSection: React.FC<OffersProps> = ({ onClaimOffer }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="py-20 sm:py-28 bg-[#f5f0ea] border-y border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            EXCLUSIVE RETREATS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Special Packages & Island Privileges
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Enhance your Key West vacation with curated packages offering complimentary nights, spa credits, champagne welcome amenities, and bespoke island adventures.
          </p>
        </div>

        {/* 3 Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS_DATA.map((offer) => (
            <div
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="bg-white rounded-xl overflow-hidden border border-[#e2dad0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Promo Tag */}
              <div className="relative h-56 overflow-hidden bg-[#e8e2d8]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 bg-[#1b2826] text-[#dfc19c] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#dfc19c]/30 shadow-sm">
                  {offer.tag}
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#dfc19c]">
                    {offer.discount}
                  </span>
                </div>
              </div>

              {/* Offer Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1b2826] mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#6b7c77] leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Perks Checklist */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-[#f1ede6]">
                    {offer.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2d3748]">
                        <Check className="w-3.5 h-3.5 text-[#c5a072] flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Promo Code Copy Row */}
                  <div className="flex items-center justify-between p-2.5 rounded bg-[#faf8f5] border border-[#e8e2d8] mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-[#8e9f9b] uppercase block">PROMO CODE</span>
                      <span className="font-mono text-xs font-bold text-[#1b2826] tracking-wider">{offer.code}</span>
                    </div>
                    <button
                      id={`btn-copy-code-${offer.id}`}
                      onClick={() => handleCopyCode(offer.code)}
                      className="px-2.5 py-1 text-[11px] font-bold text-[#1b2826] hover:text-[#c5a072] flex items-center gap-1 transition-colors"
                      title="Copy promo code"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <CheckCheck className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    id={`btn-claim-offer-${offer.id}`}
                    onClick={() => onClaimOffer(offer)}
                    className="w-full py-3 rounded-sm bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-[0.14em] uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 border border-[#dfc19c]/30"
                  >
                    <span>BOOK THIS PACKAGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-[#8e9f9b] mt-2 italic">
                    {offer.validUntil}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
