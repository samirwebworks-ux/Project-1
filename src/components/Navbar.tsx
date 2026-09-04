import React, { useState, useEffect } from 'react';
import { Palmtree, Phone, Menu, X, Sun, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';
import { AmbientAudio } from './AmbientAudio';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'stay', label: 'STAY', href: '#stay' },
    { id: 'experiences', label: 'EXPERIENCES', href: '#experiences' },
    { id: 'dining', label: 'DINING', href: '#dining' },
    { id: 'wellness', label: 'WELLNESS', href: '#wellness' },
    { id: 'gallery', label: 'GALLERY', href: '#gallery' },
    { id: 'offers', label: 'OFFERS', href: '#offers' },
    { id: 'contact', label: 'CONTACT', href: '#contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-announcement bar for Key West weather & direct booking privilege */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-[#152220] text-[#e8e2d8] text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 border-b border-[#253935] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#dfc19c] font-medium">
              <Sun className="w-3.5 h-3.5 text-[#dfc19c] animate-spin [animation-duration:12s]" />
              <span>Key West, FL • {RESORT_INFO.weather.temp} {RESORT_INFO.weather.condition}</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/70">
              Direct Booking Benefit: Complimentary $50 Dining Credit & Priority Upgrade
            </span>
          </div>

          <div className="flex items-center gap-4">
            <AmbientAudio />
            <a
              id="link-nav-phone"
              href={`tel:${RESORT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-[#dfc19c] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{RESORT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`px-4 sm:px-8 py-3.5 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-md border-b border-[#e8e2d8]'
              : 'bg-[#faf8f5]/85 backdrop-blur-sm border-b border-[#e8e2d8]/60'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo matching the exact layout in reference image */}
            <a
              id="brand-logo"
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 border border-[#dfc19c]/30">
                <Palmtree className="w-5 h-5 text-[#dfc19c]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-[0.14em] text-[#1b2826] leading-tight">
                  OCEAN HAVEN
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#6b7c77] font-semibold uppercase">
                  RESORT & SPA
                </span>
                <span className="text-[8px] tracking-[0.18em] text-[#c5a072] uppercase font-medium">
                  KEY WEST, FLORIDA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-xs tracking-[0.12em] font-semibold transition-all duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#1b2826] font-bold'
                        : 'text-[#4a5568] hover:text-[#1b2826]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1b2826] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action: Book Now button */}
            <div className="flex items-center gap-3">
              <button
                id="btn-nav-book-now"
                onClick={onOpenBooking}
                className="px-5 sm:px-6 py-2.5 rounded-sm bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] hover:text-white text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-98 flex items-center gap-2 border border-[#dfc19c]/30"
              >
                <Calendar className="w-3.5 h-3.5 text-[#dfc19c]" />
                <span>BOOK NOW</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-sm text-[#1b2826] hover:bg-[#e8e2d8]/60 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#faf8f5] shadow-2xl p-6 pt-24 flex flex-col justify-between overflow-y-auto border-l border-[#e8e2d8]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-[#e8e2d8]">
                <div className="w-10 h-10 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center border border-[#dfc19c]/30">
                  <Palmtree className="w-5 h-5 text-[#dfc19c]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1b2826] tracking-wider">
                    OCEAN HAVEN
                  </h3>
                  <p className="text-[10px] text-[#c5a072] uppercase tracking-widest">
                    Key West, Florida
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold text-[#223530] hover:bg-[#f1ede6] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#c5a072]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e8e2d8] space-y-4">
              <button
                id="btn-mobile-book-now"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-sm bg-[#1b2826] text-[#dfc19c] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md hover:bg-[#253935]"
              >
                <Calendar className="w-4 h-4 text-[#dfc19c]" />
                <span>BOOK YOUR STAY</span>
              </button>

              <div className="text-center text-xs text-[#6b7c77] space-y-1">
                <p>{RESORT_INFO.address}</p>
                <p className="text-[#1b2826] font-medium">{RESORT_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
