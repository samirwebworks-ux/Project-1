export interface Room {
  id: string;
  name: string;
  category: 'oceanfront' | 'suite' | 'villa' | 'penthouse';
  pricePerNight: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  sizeSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  image: string;
  galleryImages: string[];
  features: string[];
  amenities: string[];
  popular?: boolean;
}

export interface Experience {
  id: string;
  category: 'water' | 'dining' | 'wellness' | 'island';
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  iconName: string;
  highlights: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  hours: string;
  dressCode: string;
  image: string;
  description: string;
  signatureDishes: { name: string; description: string; price: string }[];
}

export interface SpaTreatment {
  id: string;
  category: 'massage' | 'facial' | 'body' | 'ritual';
  name: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  stayType: string;
  content: string;
  avatar: string;
  roomStayed: string;
  verified: boolean;
}

export interface Offer {
  id: string;
  tag: string;
  title: string;
  discount: string;
  description: string;
  perks: string[];
  validUntil: string;
  image: string;
  code: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'ocean' | 'dining' | 'wellness' | 'sunset';
  image: string;
  description: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomTypeId: string;
  addons: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
  arrivalMethod: string;
}

export interface Landmark {
  name: string;
  category: string;
  distance: string;
  timeByCar: string;
  description: string;
}
