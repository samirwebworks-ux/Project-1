import React, { useState } from 'react';
import { Room } from '../types';
import { X, Check, Users, Maximize, Eye, Sparkles, Calendar, ChevronLeft, ChevronRight, BedDouble, Wind, Bath, Wifi } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (room: Room) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose, onBookNow }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  if (!room) return null;

  const nextImg = () => {
    setCurrentImgIdx((prev) => (prev + 1) % room.gallery.length);
  };

  const prevImg = () => {
    setCurrentImgIdx((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  return (
    <div
      id="modal-room-details-overlay"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="modal-room-details-content"
        className="bg-[#faf8f5] rounded-2xl max-w-3xl w-full overflow-hidden border border-[#e8e2d8] shadow-2xl relative my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-room-details"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel Header */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0 bg-black">
          <img
            src={room.gallery[currentImgIdx]}
            alt={`${room.name} photo ${currentImgIdx + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImg}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImg}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Room Title in Banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] font-bold tracking-widest text-[#dfc19c] uppercase mb-1 block">
              ACCOMMODATION SUITE
            </span>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">{room.name}</h3>
                <p className="text-xs text-white/80">{room.tagline}</p>
              </div>
              <div className="text-right">
                <span className="font-serif text-2xl font-bold text-[#dfc19c]">${room.pricePerNight}</span>
                <span className="text-xs text-white/80"> / night</span>
              </div>
            </div>
          </div>

          {/* Gallery Indicator Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {room.gallery.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImgIdx ? 'bg-[#dfc19c] w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-white p-4 rounded-xl border border-[#e2dad0]">
            <div>
              <span className="text-[#8e9f9b] uppercase text-[10px] font-bold block">Capacity</span>
              <span className="font-bold text-[#1b2826] flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-[#c5a072]" />
                Up to {room.maxGuests} Guests
              </span>
            </div>
            <div>
              <span className="text-[#8e9f9b] uppercase text-[10px] font-bold block">Size</span>
              <span className="font-bold text-[#1b2826] flex items-center gap-1 mt-0.5">
                <Maximize className="w-3.5 h-3.5 text-[#c5a072]" />
                {room.sizeSqFt} sq ft ({room.sizeM2} m²)
              </span>
            </div>
            <div>
              <span className="text-[#8e9f9b] uppercase text-[10px] font-bold block">Bedding</span>
              <span className="font-bold text-[#1b2826] flex items-center gap-1 mt-0.5">
                <BedDouble className="w-3.5 h-3.5 text-[#c5a072]" />
                {room.bedType}
              </span>
            </div>
            <div>
              <span className="text-[#8e9f9b] uppercase text-[10px] font-bold block">View</span>
              <span className="font-bold text-[#1b2826] flex items-center gap-1 mt-0.5">
                <Eye className="w-3.5 h-3.5 text-[#c5a072]" />
                {room.viewType}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b2826] mb-2">
              Suite Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b2826] mb-3">
              Included Luxury Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#2d3748] bg-white p-2.5 rounded border border-[#e8e2d8]">
                  <Check className="w-3.5 h-3.5 text-[#c5a072] flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Booking Privilege Notice */}
          <div className="p-4 rounded-xl bg-[#f1ede6] border border-[#dfc19c]/40 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c5a072] flex-shrink-0" />
            <p className="text-xs text-[#1b2826]">
              <strong>Direct Booking Privilege:</strong> Includes complimentary daily breakfast for two, high-speed Wi-Fi, and priority late check-out.
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#e8e2d8] flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#8e9f9b]">Direct Web Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-[#1b2826]">${room.pricePerNight}</span>
              <span className="text-xs text-[#6b7c77]">/ night</span>
            </div>
          </div>

          <button
            id={`btn-reserve-room-modal-${room.id}`}
            onClick={() => {
              onClose();
              onBookNow(room);
            }}
            className="px-8 py-3.5 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-widest uppercase rounded-sm shadow-md flex items-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVE THIS ROOM</span>
          </button>
        </div>
      </div>
    </div>
  );
};
