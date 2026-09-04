import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Room Booking');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 3500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#6b7c77] uppercase mb-2">
            CONCIERGE & INQUIRIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1b2826] font-normal tracking-tight">
            Connect with Our Key West Haven
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4 text-[#c5a072]">
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
            <span className="text-sm">✦ ❦ ✦</span>
            <div className="w-12 h-[1px] bg-[#dfc19c]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#6b7c77] leading-relaxed">
            Whether planning an intimate wedding, reserving executive villa suites, or tailoring bespoke yacht charters, our concierge team is at your service.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e2d8] shadow-sm space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1b2826]">
                Resort Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4a5568]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1ede6] text-[#1b2826] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#c5a072]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1b2826] block">Physical Address</span>
                    <span>{RESORT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1ede6] text-[#1b2826] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#c5a072]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1b2826] block">Direct Line & Reservations</span>
                    <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#c5a072] font-semibold">
                      {RESORT_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-[#6b7c77]">Toll-Free: {RESORT_INFO.tollFree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1ede6] text-[#1b2826] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#c5a072]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1b2826] block">Electronic Correspondence</span>
                    <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#c5a072]">
                      {RESORT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1ede6] text-[#1b2826] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#c5a072]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1b2826] block">Operational Hours</span>
                    <p className="text-xs">Front Desk: 24/7 Service</p>
                    <p className="text-xs">Haven Spa: 8:00 AM – 8:00 PM</p>
                    <p className="text-xs">Azure Horizon: 7:00 AM – 10:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Concierge Button */}
              <a
                id="btn-whatsapp-concierge"
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#e8e2d8] shadow-md">
            <h3 className="font-serif text-2xl font-bold text-[#1b2826] mb-2">
              Send a Concierge Request
            </h3>
            <p className="text-xs text-[#6b7c77] mb-6">
              Our guest services team will reply within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#eef7ee] border border-[#c3e6cb] text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#28a745] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#1b2826]">Message Received</h4>
                <p className="text-xs text-[#4a5568] max-w-md mx-auto">
                  Thank you, {name || 'valued guest'}. Your request has been dispatched to our Chief Concierge. We look forward to welcoming you to Key West.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Charlotte Montgomery"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. charlotte@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (305) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">
                      Primary Topic of Inquiry
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
                    >
                      <option value="Room Booking">Accommodation & Villa Reservation</option>
                      <option value="Wedding / Event">Intimate Weddings & Private Celebrations</option>
                      <option value="Dining Reservation">Azure Horizon Dining Reservation</option>
                      <option value="Haven Spa Appointment">Haven Spa Treatment Booking</option>
                      <option value="Private Yacht Charter">Private Yacht Charter & Excursions</option>
                      <option value="Other">General Guest Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1b2826] uppercase mb-1">
                    Your Message or Special Request *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide desired dates, dietary preferences, celebratory details, or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  className="w-full py-3.5 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] font-bold text-xs sm:text-sm tracking-[0.14em] uppercase rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
