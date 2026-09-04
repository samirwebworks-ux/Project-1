import React, { useState } from 'react';
import { DINING_VENUES } from '../data/resortData';
import { X, Calendar, Clock, Users, Utensils, CheckCircle, Sparkles } from 'lucide-react';

interface TableModalProps {
  isOpen: boolean;
  onClose: () => void;
  venueName?: string;
}

export const TableReservationModal: React.FC<TableModalProps> = ({ isOpen, onClose, venueName }) => {
  const [selectedVenue, setSelectedVenue] = useState(venueName || 'Azure Horizon');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seatingPref, setSeatingPref] = useState('Oceanfront Sunset Deck');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#faf8f5] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#e8e2d8] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7c77] hover:text-[#1b2826]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pb-4 border-b border-[#e8e2d8]">
          <span className="text-[10px] font-bold tracking-widest text-[#c5a072] uppercase">
            CULINARY TABLE RESERVATION
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1b2826] mt-1">
            Reserve Your Waterfront Table
          </h3>
          <p className="text-xs text-[#6b7c77]">Ocean breezes & artisanal Key West gastronomy</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2 animate-fade-in">
            <CheckCircle className="w-12 h-12 text-[#28a745] mx-auto" />
            <h4 className="font-serif text-xl font-bold text-[#1b2826]">Table Reserved!</h4>
            <p className="text-xs text-[#6b7c77]">
              Confirmation sent to {email}. We look forward to hosting you at {selectedVenue}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Select Venue</label>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white font-medium focus:outline-none focus:border-[#1b2826]"
              >
                {DINING_VENUES.map((v) => (
                  <option key={v.id} value={v.name}>{v.name} ({v.cuisine})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                >
                  <option value="17:30">5:30 PM (Early Sunset)</option>
                  <option value="18:30">6:30 PM (Golden Hour)</option>
                  <option value="19:30">7:30 PM (Prime Dinner)</option>
                  <option value="20:30">8:30 PM (Starlit)</option>
                  <option value="21:15">9:15 PM (Late Evening)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Seating Area</label>
                <select
                  value={seatingPref}
                  onChange={(e) => setSeatingPref(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                >
                  <option value="Oceanfront Sunset Deck">Oceanfront Sunset Deck</option>
                  <option value="Covered Terrace">Covered Breezy Terrace</option>
                  <option value="Wine Cellar Room">Intimate Wine Cellar</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Liam Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. liam@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-wider uppercase rounded shadow-sm flex items-center justify-center gap-2"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Confirm Table Reservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
