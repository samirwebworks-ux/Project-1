import React, { useState } from 'react';
import { SpaTreatment } from '../types';
import { SPA_TREATMENTS } from '../data/resortData';
import { X, Calendar, Clock, Flower2, CheckCircle2, Sparkles } from 'lucide-react';

interface SpaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment?: SpaTreatment | null;
}

export const SpaBookingModal: React.FC<SpaBookingModalProps> = ({ isOpen, onClose, treatment }) => {
  const [selectedId, setSelectedId] = useState(treatment?.id || SPA_TREATMENTS[0].id);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('11:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentTreatment = SPA_TREATMENTS.find(t => t.id === selectedId) || treatment || SPA_TREATMENTS[0];

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
            HAVEN SPA RESERVATION
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1b2826] mt-1">
            Book Botanical Therapy
          </h3>
          <p className="text-xs text-[#6b7c77]">Ocean breezes, essential flora oils & rejuvenation</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-[#28a745] mx-auto" />
            <h4 className="font-serif text-xl font-bold text-[#1b2826]">Spa Appointment Confirmed!</h4>
            <p className="text-xs text-[#6b7c77]">
              {currentTreatment.name} reserved for {date} at {time}. Confirmation emailed to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Select Treatment</label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white font-medium focus:outline-none focus:border-[#1b2826]"
              >
                {SPA_TREATMENTS.map((t) => (
                  <option key={t.id} value={t.id}>{t.name} ({t.duration} • {t.price})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Preferred Date</label>
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
                  <option value="09:00">9:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="17:00">5:00 PM (Sunset Serenity)</option>
                  <option value="18:30">6:30 PM (Evening Glow)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Evelyn Reed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Room # (If checked in)</label>
                <input
                  type="text"
                  placeholder="e.g. Suite 304 or Visiting"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. evelyn@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (305) 555-0188"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded border border-[#d3cbbe] bg-white focus:outline-none focus:border-[#1b2826]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs tracking-wider uppercase rounded shadow-sm flex items-center justify-center gap-2"
            >
              <Flower2 className="w-3.5 h-3.5" />
              <span>Confirm Spa Appointment ({currentTreatment.price})</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
