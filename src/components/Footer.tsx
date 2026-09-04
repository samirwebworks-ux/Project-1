import React, { useState } from 'react';
import { Palmtree, Phone, Mail, MapPin, Send, CheckCircle2, Facebook, Instagram, Twitter, Compass, Sparkles, X } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <>
      <footer className="bg-[#152220] text-[#e8e2d8] pt-16 pb-10 border-t border-[#253935]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Main 5-Column Grid matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#253935]">
            {/* Column 1: Brand & Social */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center border border-[#dfc19c]/40">
                  <Palmtree className="w-5 h-5 text-[#dfc19c]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold tracking-[0.14em] text-white leading-tight">
                    OCEAN HAVEN
                  </span>
                  <span className="text-[9px] tracking-[0.25em] text-[#dfc19c] font-semibold uppercase">
                    RESORT & SPA
                  </span>
                  <span className="text-[8px] tracking-[0.18em] text-white/60 uppercase">
                    KEY WEST, FLORIDA
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#a0b0ab] leading-relaxed">
                Oceanfront luxury resort in Key West, FL. Where every moment is made for unforgettable memories.
              </p>

              {/* Social Media Icons matching reference */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ocean Haven on Facebook"
                  className="w-8 h-8 rounded-full bg-[#1b2826] hover:bg-[#dfc19c] hover:text-[#152220] text-[#dfc19c] flex items-center justify-center border border-[#304842] transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ocean Haven on Instagram"
                  className="w-8 h-8 rounded-full bg-[#1b2826] hover:bg-[#dfc19c] hover:text-[#152220] text-[#dfc19c] flex items-center justify-center border border-[#304842] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ocean Haven on TripAdvisor"
                  className="w-8 h-8 rounded-full bg-[#1b2826] hover:bg-[#dfc19c] hover:text-[#152220] text-[#dfc19c] flex items-center justify-center border border-[#304842] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ocean Haven on X"
                  className="w-8 h-8 rounded-full bg-[#1b2826] hover:bg-[#dfc19c] hover:text-[#152220] text-[#dfc19c] flex items-center justify-center border border-[#304842] transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#dfc19c] mb-4">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-xs text-[#a0b0ab]">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#stay" className="hover:text-white transition-colors">Stay</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#dining" className="hover:text-white transition-colors">Dining</a></li>
                <li><a href="#wellness" className="hover:text-white transition-colors">Wellness</a></li>
                <li><a href="#offers" className="hover:text-white transition-colors">Offers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Resort Details */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#dfc19c] mb-4">
                RESORT
              </h4>
              <div className="space-y-3 text-xs text-[#a0b0ab]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#dfc19c] flex-shrink-0 mt-0.5" />
                  <span>500 Ocean Haven Drive<br />Key West, FL 33040</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#dfc19c] flex-shrink-0" />
                  <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-white">
                    {RESORT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#dfc19c] flex-shrink-0" />
                  <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-white truncate">
                    info@oceanhavenresort.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Hours */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#dfc19c] mb-4">
                HOURS
              </h4>
              <div className="space-y-3 text-xs text-[#a0b0ab]">
                <div>
                  <span className="text-white block font-medium">Front Desk</span>
                  <span>24/7</span>
                </div>
                <div>
                  <span className="text-white block font-medium">Spa & Wellness</span>
                  <span>9:00 AM – 8:00 PM</span>
                </div>
                <div>
                  <span className="text-white block font-medium">Dining</span>
                  <span>7:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Column 5: Stay Connected & Newsletter */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#dfc19c] mb-4">
                STAY CONNECTED
              </h4>
              <p className="text-xs text-[#a0b0ab] leading-relaxed mb-4">
                Subscribe to get exclusive offers & resort updates.
              </p>

              {subscribed ? (
                <div className="p-3 rounded bg-[#1e332f] border border-[#3e5f57] text-[#dfc19c] text-xs font-medium flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Welcome to Haven Insider!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded text-xs bg-[#1b2826] border border-[#304842] text-white placeholder:text-[#6b7c77] focus:outline-none focus:border-[#dfc19c]"
                  />
                  <button
                    type="submit"
                    id="btn-footer-subscribe"
                    className="w-full py-2.5 rounded bg-[#dfc19c] hover:bg-[#ebd2b3] text-[#152220] font-bold text-xs tracking-[0.16em] uppercase transition-all duration-200 shadow-sm"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#839792] gap-4">
            <p>© 2026 Ocean Haven Resort & Spa. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPolicyModal('privacy')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button
                onClick={() => setPolicyModal('terms')}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Policy Modal */}
      {policyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPolicyModal(null)}
        >
          <div
            className="bg-[#faf8f5] text-[#1b2826] rounded-xl max-w-xl w-full p-6 sm:p-8 max-h-[80vh] overflow-y-auto border border-[#e8e2d8] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPolicyModal(null)}
              className="absolute top-4 right-4 p-2 text-[#6b7c77] hover:text-[#1b2826]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold mb-4">
              {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Stay'}
            </h3>

            <div className="space-y-4 text-xs text-[#4a5568] leading-relaxed">
              <p>
                <strong>Last Updated: August 2026</strong>
              </p>
              {policyModal === 'privacy' ? (
                <>
                  <p>
                    At Ocean Haven Resort & Spa, safeguarding the confidentiality and security of our guests' personal data is paramount. We collect information solely to deliver customized hospitality services, facilitate secure direct reservations, and curate tailored island experiences.
                  </p>
                  <p>
                    We never sell, lease, or disseminate your personal contact details to unauthorized third parties. Financial transactions are encrypted using bank-grade SSL protocols.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Check-In & Identification:</strong> Guests must present valid government-issued photo identification and a major credit card upon arrival. Minimum check-in age is 21.
                  </p>
                  <p>
                    <strong>Cancellation & Guarantee:</strong> Standard direct reservations may be cancelled without penalty up to 72 hours prior to 4:00 PM local arrival time.
                  </p>
                  <p>
                    <strong>Resort Amenities:</strong> Full access to swimming pools, fitness pavillion, and beach loungers is strictly reserved for registered Ocean Haven guests.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#e8e2d8] text-right">
              <button
                onClick={() => setPolicyModal(null)}
                className="px-5 py-2 bg-[#1b2826] text-[#dfc19c] font-bold text-xs rounded uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
