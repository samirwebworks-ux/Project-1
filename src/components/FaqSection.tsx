import React, { useState } from 'react';
import { FAQ_DATA } from '../data/resortData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqProps {
  onOpenConcierge: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenConcierge }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Planning Your Ocean Haven Stay
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Essential information regarding check-in procedures, executive airport transfers, culinary reservations, and resort privileges.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-xl border border-[#e8e2d8] overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  id={`btn-faq-toggle-${idx}`}
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f1ede6] text-[#6b7c77] hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1b2826]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c5a072] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-[#f1ede6] text-xs sm:text-sm text-[#4a5568] leading-relaxed animate-fade-in">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Haven Concierge Assistance Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#f1ede6] border border-[#e2dad0] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#1b2826]">
              Have an extraordinary inquiry or special request?
            </h4>
            <p className="text-xs text-[#6b7c77]">
              Our Chief Concierge team is available 24/7 to personalize your arrival.
            </p>
          </div>
          <button
            id="btn-ask-concierge"
            onClick={onOpenConcierge}
            className="px-6 py-2.5 rounded-sm bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] text-xs font-bold tracking-wider uppercase whitespace-nowrap flex items-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat with Concierge</span>
          </button>
        </div>
      </div>
    </section>
  );
};
