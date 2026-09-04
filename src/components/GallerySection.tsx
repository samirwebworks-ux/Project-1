import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/resortData';
import { GalleryItem } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            VISUAL INSPIRATION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Moments in Paradise
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Glimpse the sun-kissed tranquility, refined architectural craftsmanship, and vibrant coastal hues that define every stay at Ocean Haven.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Moments' },
              { id: 'rooms', label: 'Suites & Villas' },
              { id: 'ocean', label: 'Pool & Ocean' },
              { id: 'dining', label: 'Dining & Libations' },
              { id: 'wellness', label: 'Spa & Wellness' },
              { id: 'sunset', label: 'Key West Sunsets' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-gallery-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#1b2826] text-[#dfc19c] shadow-sm'
                    : 'bg-[#f1ede6] text-[#6b7c77] hover:text-[#1b2826] hover:bg-[#e8e2d8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer shadow-sm border border-[#e8e2d8] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-bold tracking-widest text-[#dfc19c] uppercase mb-1">
                  OCEAN HAVEN
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold leading-tight drop-shadow">
                  {item.title}
                </h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#dfc19c] font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge View</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-overlay"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            id="btn-close-lightbox"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            id="btn-prev-lightbox"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            id="btn-next-lightbox"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-50"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#dfc19c]">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                {filteredGallery[lightboxIndex].description}
              </p>
              <span className="text-[11px] text-white/50 mt-2 block">
                {lightboxIndex + 1} of {filteredGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
