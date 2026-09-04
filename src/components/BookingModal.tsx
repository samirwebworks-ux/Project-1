import React, { useState } from 'react';
import { ROOMS_DATA, BOOKING_ADDONS, RESORT_INFO } from '../data/resortData';
import { Room } from '../types';
import { X, Calendar, Users, Check, Sparkles, ShieldCheck, ArrowRight, ArrowLeft, Printer, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    roomType?: string;
    promoCode?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialData }) => {
  const today = new Date();
  const defCheckIn = initialData?.checkIn || new Date(today.getTime() + 86400000 * 2).toISOString().split('T')[0];
  const defCheckOut = initialData?.checkOut || new Date(today.getTime() + 86400000 * 5).toISOString().split('T')[0];

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [checkIn, setCheckIn] = useState(defCheckIn);
  const [checkOut, setCheckOut] = useState(defCheckOut);
  const [adults, setAdults] = useState(initialData?.adults || 2);
  const [children, setChildren] = useState(initialData?.children || 0);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialData?.roomType || ROOMS_DATA[0].id
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [promoCode, setPromoCode] = useState(initialData?.promoCode || '');
  const [promoApplied, setPromoApplied] = useState(false);

  // Guest Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Pricing calculations
  let roomSubtotal = currentRoom.pricePerNight * nights;
  let discountAmount = 0;
  if (promoApplied || promoCode.toUpperCase() === 'ROMANCE26' || promoCode.toUpperCase() === 'STAY5PAY4') {
    discountAmount = Math.round(roomSubtotal * 0.2); // 20% discount
  }

  let addonsTotal = 0;
  selectedAddons.forEach((addonId) => {
    const addon = BOOKING_ADDONS.find((a) => a.id === addonId);
    if (addon) {
      addonsTotal += addon.price;
    }
  });

  const resortFeeTotal = 45 * nights; // $45/night resort fee
  const taxesTotal = Math.round((roomSubtotal - discountAmount + addonsTotal) * 0.125); // 12.5% Florida & Monroe County Tax
  const grandTotal = roomSubtotal - discountAmount + addonsTotal + resortFeeTotal + taxesTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 2) {
      setPromoApplied(true);
    }
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'OH-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setStep(4);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#dfc19c', '#1b2826', '#c5a072', '#ffffff']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div
      id="booking-engine-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-engine-content"
        className="bg-[#faf8f5] rounded-2xl max-w-4xl w-full border border-[#e8e2d8] shadow-2xl overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#152220] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#2a3f3a]">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#dfc19c] uppercase block">
              DIRECT RESERVATION PORTAL
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Ocean Haven Resort & Spa
            </h3>
          </div>
          <button
            id="btn-close-booking-modal"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress bar */}
        <div className="bg-[#f1ede6] px-6 py-3 border-b border-[#e2dad0] flex items-center justify-between text-xs font-bold text-[#1b2826]">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#1b2826]' : 'text-[#8e9f9b]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#1b2826] text-[#dfc19c]' : 'bg-[#d8d0c3] text-white'}`}>1</span>
            <span className="hidden sm:inline">Dates & Guests</span>
          </div>
          <div className="w-8 h-[1px] bg-[#d8d0c3]" />
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#1b2826]' : 'text-[#8e9f9b]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#1b2826] text-[#dfc19c]' : 'bg-[#d8d0c3] text-white'}`}>2</span>
            <span className="hidden sm:inline">Room & Upgrades</span>
          </div>
          <div className="w-8 h-[1px] bg-[#d8d0c3]" />
          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#1b2826]' : 'text-[#8e9f9b]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-[#1b2826] text-[#dfc19c]' : 'bg-[#d8d0c3] text-white'}`}>3</span>
            <span className="hidden sm:inline">Guest Details</span>
          </div>
          <div className="w-8 h-[1px] bg-[#d8d0c3]" />
          <div className={`flex items-center gap-1.5 ${step === 4 ? 'text-green-700 font-bold' : 'text-[#8e9f9b]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 4 ? 'bg-green-600 text-white' : 'bg-[#d8d0c3] text-white'}`}>4</span>
            <span className="hidden sm:inline">Confirmed</span>
          </div>
        </div>

        {/* Step 1: Dates & Guests */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#1b2826]">
                Select Your Key West Stay Dates
              </h4>
              <p className="text-xs text-[#6b7c77] mt-1">
                Direct booking guarantees our lowest rates and priority upgrades.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e2dad0]">
                <label className="block text-xs font-bold text-[#1b2826] uppercase mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#c5a072]" />
                  <span>Check-In Date</span>
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={today.toISOString().split('T')[0]}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-semibold rounded border border-[#d3cbbe] bg-[#faf8f5]"
                />
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e2dad0]">
                <label className="block text-xs font-bold text-[#1b2826] uppercase mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#c5a072]" />
                  <span>Check-Out Date</span>
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-semibold rounded border border-[#d3cbbe] bg-[#faf8f5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e2dad0] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#1b2826] block">Adults</span>
                  <span className="text-[11px] text-[#6b7c77]">Ages 13+</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#e2dad0] font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold w-4 text-center">{adults}</span>
                  <button
                    onClick={() => setAdults(Math.min(8, adults + 1))}
                    className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#e2dad0] font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e2dad0] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#1b2826] block">Children</span>
                  <span className="text-[11px] text-[#6b7c77]">Ages 0-12</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#e2dad0] font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold w-4 text-center">{children}</span>
                  <button
                    onClick={() => setChildren(Math.min(6, children + 1))}
                    className="w-8 h-8 rounded-full bg-[#f1ede6] hover:bg-[#e2dad0] font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#e8e2d8]">
              <button
                id="btn-booking-step1-next"
                onClick={() => setStep(2)}
                className="px-8 py-3.5 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-widest uppercase rounded shadow flex items-center gap-2"
              >
                <span>Select Accommodations ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Room Selection & Enhancements */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <div>
              <h4 className="font-serif text-2xl font-bold text-[#1b2826]">
                Choose Room & Signature Enhancements
              </h4>
              <p className="text-xs text-[#6b7c77] mt-1">
                Stay Period: {checkIn} to {checkOut} ({nights} {nights === 1 ? 'Night' : 'Nights'})
              </p>
            </div>

            {/* Room Options */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1b2826]">
                Select Suite / Villa
              </label>
              {ROOMS_DATA.map((room) => {
                const isSelected = selectedRoomId === room.id;
                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-4 ${
                      isSelected
                        ? 'bg-white border-[#1b2826] shadow-md ring-2 ring-[#dfc19c]'
                        : 'bg-[#faf8f5] border-[#e2dad0] hover:bg-white'
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full sm:w-28 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 text-left w-full">
                      <div className="flex items-center justify-between">
                        <h5 className="font-serif text-base font-bold text-[#1b2826]">{room.name}</h5>
                        <div className="text-right">
                          <span className="font-serif text-lg font-bold text-[#1b2826]">${room.pricePerNight}</span>
                          <span className="text-[10px] text-[#6b7c77]"> / night</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6b7c77] mt-1 line-clamp-1">{room.description}</p>
                      <span className="text-[11px] text-[#c5a072] font-semibold block mt-1">
                        {room.bedType} • {room.sizeSqFt} sq ft • Up to {room.maxGuests} Guests
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhancements / Addons */}
            <div className="pt-4 border-t border-[#e8e2d8]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1b2826] mb-3">
                Curated Arrival Enhancements (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BOOKING_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked ? 'bg-white border-[#1b2826] shadow-sm' : 'bg-[#faf8f5] border-[#e8e2d8]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${isChecked ? 'bg-[#1b2826] text-[#dfc19c] border-[#1b2826]' : 'border-[#cbd5e1] bg-white'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-[#1b2826]">{addon.name}</span>
                          <span className="font-serif font-bold text-[#c5a072]">+${addon.price}</span>
                        </div>
                        <p className="text-[11px] text-[#6b7c77] mt-0.5">{addon.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex items-center gap-3 pt-3">
              <input
                type="text"
                placeholder="Promo Code (e.g. ROMANCE26)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="px-3 py-2 text-xs uppercase rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-4 py-2 bg-[#f1ede6] hover:bg-[#e2dad0] text-[#1b2826] text-xs font-bold rounded uppercase tracking-wider"
              >
                Apply
              </button>
              {promoApplied && (
                <span className="text-xs font-bold text-green-700">✓ 20% Discount Applied!</span>
              )}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#e8e2d8]">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-[#1b2826] text-[#1b2826] font-bold text-xs tracking-wider uppercase rounded flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-3.5 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-widest uppercase rounded shadow flex items-center gap-2"
              >
                <span>Continue to Guest Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Details & Pricing Summary */}
        {step === 3 && (
          <form onSubmit={handleConfirmReservation} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form inputs */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-serif text-2xl font-bold text-[#1b2826]">
                  Primary Guest Contact Information
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#1b2826] mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Harrison"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#1b2826] mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#1b2826] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. harrison@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#1b2826] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (305) 555-0144"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1b2826] mb-1">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="High floor preference, anniversary celebration, late check-in time..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#f1ede6] text-xs text-[#4a5568] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c5a072] flex-shrink-0" />
                  <span>No payment required now. You can pay upon arrival or settle with concierge.</span>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-[#e2dad0] shadow-sm space-y-3">
                <h5 className="font-serif text-lg font-bold text-[#1b2826] pb-2 border-b border-[#f1ede6]">
                  Reservation Summary
                </h5>

                <div className="text-xs space-y-2 text-[#4a5568]">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#1b2826]">{currentRoom.name}</span>
                    <span>{nights} Nights</span>
                  </div>
                  <div className="flex justify-between text-[#6b7c77]">
                    <span>Dates:</span>
                    <span>{checkIn} → {checkOut}</span>
                  </div>
                  <div className="flex justify-between text-[#6b7c77]">
                    <span>Guests:</span>
                    <span>{adults} Adults, {children} Children</span>
                  </div>

                  <div className="pt-2 border-t border-[#f1ede6] space-y-1.5">
                    <div className="flex justify-between">
                      <span>Room Subtotal:</span>
                      <span className="font-bold text-[#1b2826]">${roomSubtotal}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-700 font-semibold">
                        <span>Direct Booking Privilege (20%):</span>
                        <span>-${discountAmount}</span>
                      </div>
                    )}

                    {addonsTotal > 0 && (
                      <div className="flex justify-between">
                        <span>Enhancements:</span>
                        <span>+${addonsTotal}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[#6b7c77]">
                      <span>Resort Fee ($45/night):</span>
                      <span>+${resortFeeTotal}</span>
                    </div>

                    <div className="flex justify-between text-[#6b7c77]">
                      <span>Taxes & Monroe County Fees:</span>
                      <span>+${taxesTotal}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1b2826] flex justify-between items-center">
                    <span className="font-bold text-sm text-[#1b2826]">Estimated Total:</span>
                    <span className="font-serif text-2xl font-bold text-[#1b2826]">${grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#e8e2d8]">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-[#1b2826] text-[#1b2826] font-bold text-xs tracking-wider uppercase rounded flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                id="btn-confirm-booking-final"
                className="px-8 py-3.5 bg-[#dfc19c] hover:bg-[#ebd2b3] text-[#152220] font-bold text-xs sm:text-sm tracking-widest uppercase rounded shadow-md flex items-center gap-2 border border-[#dfc19c]"
              >
                <Sparkles className="w-4 h-4 text-[#152220]" />
                <span>CONFIRM DIRECT RESERVATION</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Instant Confirmation Voucher */}
        {step === 4 && (
          <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto border border-green-200 shadow-inner">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest text-[#c5a072] uppercase">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#1b2826] mt-1">
                Your Oceanfront Getaway Awaits, {firstName || 'Guest'}!
              </h3>
              <p className="text-xs text-[#6b7c77] mt-1 max-w-md mx-auto">
                We have emailed your official confirmation voucher & concierge itinerary to <strong>{email || 'your email'}</strong>.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="max-w-md mx-auto bg-white rounded-xl p-6 border border-[#e2dad0] shadow-md text-left space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#f1ede6]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8e9f9b]">Confirmation Number</span>
                  <p className="font-mono text-base font-bold text-[#1b2826]">{confirmationCode}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#8e9f9b]">Status</span>
                  <p className="text-xs font-bold text-green-700">Guaranteed</p>
                </div>
              </div>

              <div className="text-xs space-y-1.5 text-[#4a5568]">
                <p><strong>Room:</strong> {currentRoom.name}</p>
                <p><strong>Check-In:</strong> {checkIn} (from 4:00 PM)</p>
                <p><strong>Check-Out:</strong> {checkOut} (until 11:00 AM)</p>
                <p><strong>Guests:</strong> {adults} Adults, {children} Children</p>
                <p><strong>Estimated Total:</strong> ${grandTotal}</p>
              </div>

              <div className="pt-3 border-t border-[#f1ede6] text-[11px] text-[#6b7c77] italic">
                * Direct Booking Perk: Your $50 dining credit has been credited to your room folio.
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white border border-[#d3cbbe] text-[#1b2826] text-xs font-bold tracking-wider uppercase rounded flex items-center gap-1.5 hover:bg-[#faf8f5]"
              >
                <Printer className="w-4 h-4" />
                <span>Print Voucher</span>
              </button>

              <button
                onClick={onClose}
                className="px-8 py-2.5 bg-[#1b2826] text-[#dfc19c] text-xs font-bold tracking-wider uppercase rounded hover:bg-[#253935]"
              >
                Return to Resort
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
