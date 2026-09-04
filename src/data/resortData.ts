import { Room, Experience, DiningVenue, SpaTreatment, Review, Offer, GalleryItem, FaqItem, Landmark } from '../types';

export const RESORT_INFO = {
  name: "Ocean Haven Resort & Spa",
  locationTag: "Key West, Florida",
  tagline: "Your Oceanfront Paradise Awaits",
  address: "500 Ocean Haven Drive, Key West, FL 33040",
  phone: "(305) 555-0123",
  tollFree: "1 (800) 555-HAVEN",
  email: "reservations@oceanhavenresort.com",
  conciergeEmail: "concierge@oceanhavenresort.com",
  rating: 4.9,
  reviewCount: 1280,
  yearsEstablished: 14,
  weather: {
    temp: "82°F",
    condition: "Sunny & Gentle Breeze",
    oceanTemp: "79°F",
  },
  hours: {
    frontDesk: "24 Hours / 7 Days",
    spaWellness: "8:00 AM – 8:00 PM Daily",
    dining: "7:00 AM – 11:00 PM Daily",
    concierge: "7:00 AM – 10:00 PM Daily",
    poolBeach: "Sunrise to Sunset (Heated pools open till 10 PM)"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tripadvisor: "https://tripadvisor.com",
    twitter: "https://twitter.com"
  }
};

export const HIGHLIGHT_PILLARS = [
  {
    icon: 'Waves',
    title: 'Oceanfront Location',
    description: 'Stunning direct panoramic Atlantic views & private sugar-sand beach access.'
  },
  {
    icon: 'BedDouble',
    title: 'Luxury Accommodations',
    description: 'Spacious coastal rooms, suites & private villas with modern artisanal comfort.'
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Exceptional Dining',
    description: 'Fresh local Florida Keys seafood, farm-to-table flavors & oceanfront sunset lounges.'
  },
  {
    icon: 'Flower2',
    title: 'Wellness & Spa',
    description: 'Relax, rejuvenate & restore your soul with bespoke botanical therapies.'
  },
  {
    icon: 'Sparkles',
    title: 'World-Class Service',
    description: 'Personalized 24/7 concierge & island hospitality at every golden moment.'
  }
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'ocean-view-room',
    name: 'Ocean View Room',
    category: 'oceanfront',
    pricePerNight: 229,
    originalPrice: 289,
    description: 'Wake up to breathtaking panoramic sunrises over the azure Atlantic Ocean from your private teak balcony.',
    longDescription: 'Designed with soothing coastal neutral palettes, organic natural woods, and floor-to-ceiling sliding glass doors. Features a lavish plush King bed with 600-thread-count Egyptian cotton linens, a spa-inspired marble bathroom with rainfall shower, and a curated private espresso bar.',
    sizeSqFt: 480,
    maxGuests: 2,
    bedType: '1 King Bed',
    view: 'Direct Atlantic Ocean View',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Private furnished balcony', 'Rainfall shower & soaking tub', 'Nespresso artisanal station', 'Smart climate control'],
    amenities: ['High-Speed Fiber Wi-Fi', '55" Ultra HD Smart TV', 'Luxury Molton Brown Toiletries', 'Daily Housekeeping & Turndown', 'In-Room Safe & Refrigerator', 'Frette Plush Robes & Slippers'],
    popular: true
  },
  {
    id: 'poolside-suite',
    name: 'Poolside Suite',
    category: 'suite',
    pricePerNight: 429,
    originalPrice: 520,
    description: 'Steps from the sparkling infinity pool with a private sun terrace and lush tropical garden serenity.',
    longDescription: 'Our Poolside Suite blends seamless indoor-outdoor living with direct walkout access to the resort’s heated saltwater infinity pool and private poolside daybeds. Includes an expansive living salon, wet bar with wine cooler, and custom double vanity bathroom.',
    sizeSqFt: 720,
    maxGuests: 3,
    bedType: '1 King Bed + Sleeper Sofa',
    view: 'Infinity Pool & Tropical Garden View',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Direct pool deck walk-out terrace', 'Dedicated living lounge & wet bar', 'Deep freestanding soaking tub', 'Bespoke cocktail mixing kit'],
    amenities: ['Reserved Poolside Sun Loungers', 'High-Speed Fiber Wi-Fi', '65" OLED Smart TV', 'Dual Marble Vanities', 'Complimentary Evening Wine Hour', 'Priority Dining Reservations'],
    popular: true
  },
  {
    id: 'oceanfront-villa',
    name: 'Oceanfront Villa',
    category: 'villa',
    pricePerNight: 799,
    originalPrice: 980,
    description: 'Exclusive private villa with spacious living quarters, gourmet kitchen & direct private beach access.',
    longDescription: 'The pinnacle of secluded Florida Keys luxury. An ultra-private two-story sanctuary with wrap-around oceanfront veranda, private heated plunge pool, dedicated butler service, full chef’s kitchen, and custom handcrafted Key West furnishings.',
    sizeSqFt: 1450,
    maxGuests: 6,
    bedType: '2 King Bedrooms + 1 Queen Daybed',
    view: 'Unobstructed 180° Oceanfront Panorama',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Private heated plunge pool', 'Personal Villa Butler service', 'Full gourmet kitchen & dining room', 'Private beach cabana included'],
    amenities: ['Round-trip Airport Luxury SUV Transfer', 'Champagne & Tropical Fruit Welcome', 'Daily In-Villa Gourmet Breakfast', 'Private Sunset Yacht Charter Discount', 'Spa Treatment Priority Booking', 'Custom Pillow & Scent Menu'],
    popular: true
  },
  {
    id: 'royal-sunset-penthouse',
    name: 'Royal Sunset Penthouse',
    category: 'penthouse',
    pricePerNight: 1299,
    originalPrice: 1550,
    description: 'Top-floor presidential retreat with 360° panoramic views, private rooftop terrace & outdoor jacuzzi.',
    longDescription: 'Crown jewel of Ocean Haven. Boasting 2,200 square feet of sublime luxury, private elevator access, an expansive outdoor rooftop sky lounge with hot tub overlooking Key West’s celebrated sunsets, and bespoke private chef dining.',
    sizeSqFt: 2200,
    maxGuests: 4,
    bedType: '2 Master King Suites',
    view: '360° Oceanfront & Historic Key West Skyline',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Private rooftop jacuzzi & fire pit', 'Private elevator access', 'Sub-Zero & Wolf designer bar', 'Dedicated 24/7 concierge'],
    amenities: ['Unlimited Spa Access', 'Daily Krug Champagne In-Suite', 'Private Island Helicopter Transfer Option', 'Customized Private Excursions', 'Master Sommelier Wine Cellar Access', 'Complimentary Electric Moke Cart']
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'water-activities',
    category: 'water',
    title: 'Water Activities',
    subtitle: 'Snorkeling, kayaking, paddleboarding & more.',
    description: 'Explore the world’s third-largest living coral reef. Glide across crystal-clear turquoise waters on complimentary paddleboards or embark on guided mangrove sea kayaking.',
    duration: '2 – 4 Hours',
    price: 'Complimentary to Resort Guests',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palmtree',
    highlights: ['Complimentary paddleboards & glass kayaks', 'Guided reef snorkeling tours', 'PADI certified diving charters', 'Private jet ski safari']
  },
  {
    id: 'romantic-dining',
    category: 'dining',
    title: 'Romantic Dining',
    subtitle: 'Private dinners & unforgettable sunset experiences.',
    description: 'Dine barefoot in the sand under a canopy of stars. Enjoy a 5-course chef-curated tasting menu accompanied by acoustic guitar and the soothing sound of the tide.',
    duration: 'Evening 6:30 PM – 10:00 PM',
    price: 'From $180 / Couple',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    iconName: 'Utensils',
    highlights: ['Private beach tiki cabana setup', 'Sommelier wine pairing', 'Live soft acoustic serenades', 'Fresh Key West pink shrimp & spiny lobster']
  },
  {
    id: 'spa-wellness',
    category: 'wellness',
    title: 'Spa & Wellness',
    subtitle: 'Signature treatments for mind, body & complete relaxation.',
    description: 'Indulge in botanical restorative rituals utilizing organic Key lime scrubs, heated sea-stone massages, and oceanfront open-air hydrotherapy pavillions.',
    duration: '60 – 120 Minutes',
    price: 'From $140',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    iconName: 'Flower',
    highlights: ['Open-air oceanfront cabana treatments', 'Heated volcanic stone massage', 'Botanical body polishes', 'Morning sunrise yoga on the deck']
  },
  {
    id: 'explore-key-west',
    category: 'island',
    title: 'Explore Key West',
    subtitle: 'Discover the island’s charm, history & hidden gems.',
    description: 'Immerse yourself in legendary Conch Republic heritage. From Ernest Hemingway’s historic sanctuary and Mallory Square sunset celebrations to private luxury catamaran sailing.',
    duration: 'Half or Full Day',
    price: 'Custom Curated',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
    iconName: 'Compass',
    highlights: ['Private luxury catamaran sunset sail', 'VIP historic Old Town bike tour', 'Hemingway House private access', 'Eco-charters to Dry Tortugas']
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'azure-horizon',
    name: 'The Azure Horizon',
    tagline: 'Fine Oceanfront Seafood & Grille',
    cuisine: 'Modern Coastal & Florida Keys Seafood',
    hours: 'Breakfast: 7:00 AM – 11:00 AM | Dinner: 5:30 PM – 10:30 PM',
    dressCode: 'Resort Elegant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    description: 'Overlooking the rolling Atlantic surf, The Azure Horizon showcases daily line-caught seafood, prime aged steaks, and an award-winning 600-label wine cellar curated by our Master Sommelier.',
    signatureDishes: [
      { name: 'Key West Pink Shrimp Carpaccio', description: 'Citrus emulsion, pickled shallots, sea salt pearls, fresh mango gel', price: '$26' },
      { name: 'Pan-Roasted Local Yellowtail Snapper', description: 'Saffron sweet corn risotto, charred baby leeks, Key lime beurre blanc', price: '$48' },
      { name: 'Wood-Fired Prime Tomahawk for Two', description: 'Truffled bone marrow butter, roasted fingerling potatoes, rosemary jus', price: '$145' }
    ]
  },
  {
    id: 'sol-and-sand',
    name: 'Sol & Sand Lounge',
    tagline: 'Poolside Cocktails & Sunset Tapas',
    cuisine: 'Tropical Cocktails, Raw Bar & Artisanal Small Plates',
    hours: '11:00 AM – 11:00 PM Daily',
    dressCode: 'Resort Casual',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1000&q=80',
    description: 'A relaxed open-air coastal sanctuary where hand-crafted botanical rum cocktails meet freshly shucked Apalachicola oysters, ceviches, and wood-fired flatbreads with sunset live jazz.',
    signatureDishes: [
      { name: 'Conch & Ahi Tuna Ceviche', description: 'Fresh coconut water marinade, avocado mousse, crisp plantain chips', price: '$22' },
      { name: 'Smoked Mahi Fish Tacos', description: 'Jicama slaw, chipotle crema, grilled pineapple salsa, house tortillas', price: '$24' },
      { name: 'The Haven Hibiscus Mojito', description: 'Key West distillery rum, fresh muddled mint, organic hibiscus reduction', price: '$18' }
    ]
  },
  {
    id: 'the-palms-cafe',
    name: 'The Palms Roastery & Bakery',
    tagline: 'Artisanal Coffee & Tropical Pastries',
    cuisine: 'Specialty Espresso, Fresh Juice Bar, Gourmet Pastries',
    hours: '6:30 AM – 3:00 PM Daily',
    dressCode: 'Casual',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    description: 'Start your island morning with locally roasted single-origin espresso, cold-pressed tropical juices, freshly baked Key lime tarts, and organic acai bowls.',
    signatureDishes: [
      { name: 'Traditional Key Lime Brioche Tart', description: 'Torched meringue, Graham streusel, fresh lime zest', price: '$12' },
      { name: 'Avocado & Florida Blue Crab Toast', description: 'Artisanal sourdough, poached organic egg, chili flakes', price: '$19' },
      { name: 'Key West Cold Brew Flight', description: 'Coconut vanilla, spiced cinnamon, and classic dark roast', price: '$14' }
    ]
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'ocean-stone',
    category: 'massage',
    name: 'Ocean Mineral & Volcanic Stone Ritual',
    duration: '80 Minutes',
    price: '$235',
    description: 'Smooth heated marine basalt stones infused with organic coconut and sweet almond oil melt away deep tension and restore natural posture.',
    benefits: ['Deep muscular relaxation', 'Improved lymphatic circulation', 'Immune and sensory grounding']
  },
  {
    id: 'key-lime-glow',
    category: 'body',
    name: 'Key Lime & Sea Salt Body Polish',
    duration: '60 Minutes',
    price: '$185',
    description: 'An invigorating full-body scrub utilizing natural Florida sea salts, wild Key lime essential oils, and deeply nourishing shea butter.',
    benefits: ['Silky luminous skin texture', 'Cellular detoxification', 'Invigorating citrus aromatherapy']
  },
  {
    id: 'marine-collagen-facial',
    category: 'facial',
    name: 'Marine Algae & Collagen Facial',
    duration: '75 Minutes',
    price: '$220',
    description: 'A deeply hydrating, age-defying facial utilizing pure Atlantic sea kelp extract, cryo-sculpting globes, and customized peptide infusions.',
    benefits: ['Instant radiant glow', 'Plumped hydration & firming', 'Reduction of sun-induced stress']
  },
  {
    id: 'couples-escape',
    category: 'ritual',
    name: 'Haven Oceanfront Couple’s Serenity',
    duration: '110 Minutes',
    price: '$490 / Couple',
    description: 'Side-by-side aromatherapy massage in our private oceanfront open-air pavilion, followed by a rose petal hydrotherapy soak and champagne with artisan chocolates.',
    benefits: ['Unforgettable intimate connection', 'Complete sensory decompression', 'Exclusive private cabana time']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Jessica M.',
    location: 'Miami, FL',
    rating: 5,
    date: 'February 2026',
    stayType: 'Romantic Getaway',
    content: 'The most beautiful resort we’ve ever stayed at! The ocean views from our balcony were breathtaking, the service was genuinely attentive, and the attention to detail in every single room was absolutely perfect. Watching the sunset while sipping cocktails by the infinity pool is an experience we will cherish forever.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    roomStayed: 'Ocean View Room',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Michael & David T.',
    location: 'Austin, TX',
    rating: 5,
    date: 'January 2026',
    stayType: 'Anniversary Trip',
    content: 'From the oceanfront villa to the incredible culinary team at Azure Horizon, everything was beyond our highest expectations. The personal concierge helped us book a private catamaran sunset sail that was the highlight of our entire year. Can’t wait to come back!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    roomStayed: 'Oceanfront Villa',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sarah L.',
    location: 'Chicago, IL',
    rating: 5,
    date: 'February 2026',
    stayType: 'Wellness Retreat',
    content: 'A true paradise! Escaping the winter chill for Ocean Haven was the best decision ever. The spa treatments were world-class, the rooms are spotless with divine linens, and the staff made our anniversary unforgettable. 10/10 recommendation.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    roomStayed: 'Poolside Suite',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Robert & Elena K.',
    location: 'New York, NY',
    rating: 5,
    date: 'December 2025',
    stayType: 'Family Vacation',
    content: 'Unmatched luxury in Key West. Having direct beach access with attentive beachside drink service and paddleboards ready to go made our vacation effortless. The penthouse was simply sublime.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    roomStayed: 'Royal Sunset Penthouse',
    verified: true
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'romantic-escape',
    tag: 'MOST POPULAR',
    title: 'Romantic Island Rendezvous',
    discount: 'Save 25% + $150 Resort Credit',
    description: 'Celebrate love with chilled champagne upon arrival, daily gourmet breakfast in bed, a private sunset dinner, and $150 credit towards Haven Spa treatments.',
    perks: ['Bottle of Veuve Clicquot on arrival', '$150 Haven Spa credit', 'Daily gourmet breakfast for two', 'Guaranteed 2:00 PM late check-out'],
    validUntil: 'Book by Oct 31, 2026',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    code: 'ROMANCE26'
  },
  {
    id: 'extended-stay',
    tag: 'LONGER STAY PERK',
    title: 'Stay 5 Nights, Pay For 4',
    discount: '1 Complimentary Night + Free Upgrade',
    description: 'Immerse yourself deeper into the tranquil island rhythm. Enjoy a complimentary 5th night along with a complimentary room category upgrade based on availability.',
    perks: ['5th night free of charge', 'Complimentary room upgrade upon arrival', 'Daily paddleboard & snorkel gear included', 'Round-trip airport executive transfer'],
    validUntil: 'Year-Round Privilege',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    code: 'STAY5PAY4'
  },
  {
    id: 'sunset-adventure',
    tag: 'SIGNATURE ADVENTURE',
    title: 'Key West Sail & Spa Retreat',
    discount: 'Includes Private Yacht Charter',
    description: 'The ultimate Key West escape featuring a 3-hour private luxury sunset catamaran cruise, couples signature massage, and VIP dining privileges.',
    perks: ['Private 42-ft catamaran sunset charter', 'Dual 80-minute Ocean Stone massages', 'Chef tasting dinner with wine pairing', 'Personal vacation concierge'],
    validUntil: 'Available through Dec 2026',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
    code: 'SAILSPA'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunset Infinity Pool & Lounge Deck',
    category: 'ocean',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking golden hour views across our heated oceanfront infinity pool.'
  },
  {
    id: 'gal-2',
    title: 'Ocean View King Suite',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern luxury finishes with private balcony overlooking the Atlantic ocean.'
  },
  {
    id: 'gal-3',
    title: 'Azure Horizon Waterfront Dining',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Romantic open-air dining under palm fronds with fresh coastal cuisine.'
  },
  {
    id: 'gal-4',
    title: 'Oceanfront Villa Private Veranda',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'Private multi-story luxury villa steps away from soft white sands.'
  },
  {
    id: 'gal-5',
    title: 'Botanical Spa & Massage Pavilion',
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    description: 'Restorative wellness treatments infused with organic marine botanicals.'
  },
  {
    id: 'gal-6',
    title: 'Key West Twilight Sunset Sail',
    category: 'sunset',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
    description: 'Private catamaran charters gliding through legendary Key West waters.'
  },
  {
    id: 'gal-7',
    title: 'Poolside Cabana Living',
    category: 'ocean',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    description: 'Relax in shaded teak cabanas with dedicated refreshment service.'
  },
  {
    id: 'gal-8',
    title: 'Handcrafted Island Cocktails',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    description: 'Fresh citrus, aged rum, and floral botanicals at Sol & Sand Lounge.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Check-In & Stay',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in begins at 4:00 PM and check-out is at 11:00 AM. Early check-in and late check-out (up to 2:00 PM) can be arranged subject to availability and are complimentary for direct suite & villa bookings.'
  },
  {
    id: 'faq-2',
    category: 'Airport & Transportation',
    question: 'How do I get to Ocean Haven from Key West International Airport (EYW)?',
    answer: 'Ocean Haven is conveniently located just 8 minutes (3.2 miles) from Key West International Airport (EYW). We offer complimentary luxury SUV executive airport transfers for all Suite and Villa reservations. Private valet parking is also available on-site with complimentary Level 2 EV charging.'
  },
  {
    id: 'faq-3',
    category: 'Resort Amenities',
    question: 'What is included in the Resort Fee?',
    answer: 'Our daily resort fee covers: high-speed fiber Wi-Fi throughout the property, complimentary use of stand-up paddleboards, sea kayaks, and snorkel gear, daily morning sunrise yoga, beach and pool lounger service with chilled towels, in-room Nespresso selections, and daily evening sunset champagne sabering in the lobby.'
  },
  {
    id: 'faq-4',
    category: 'Dining & Dietary',
    question: 'Are reservations required for The Azure Horizon restaurant?',
    answer: 'While walk-ins are warmly welcomed, we strongly recommend reserving your dinner table in advance, particularly for sunset terrace dining. Our culinary team readily accommodates gluten-free, vegan, kosher-friendly, and specific allergy requirements.'
  },
  {
    id: 'faq-5',
    category: 'Pet Policy',
    question: 'Is Ocean Haven Resort pet-friendly?',
    answer: 'Yes! We warmly welcome well-behaved dogs up to 40 lbs in designated Ocean View Rooms and Ground Floor Poolside Suites. Your four-legged companion receives a custom plush bed, organic artisanal treats, and a souvenir water bowl upon arrival ($95 per stay cleaning fee applies).'
  },
  {
    id: 'faq-6',
    category: 'Direct Booking Perks',
    question: 'What are the benefits of booking directly on this official website?',
    answer: 'When you book direct with Ocean Haven, you receive: our Best Rate Guarantee, flexible cancellation up to 72 hours prior to arrival, priority room category upgrades upon availability, early check-in preference, and a $50 resort dining credit.'
  }
];

export const LANDMARKS_DATA: Landmark[] = [
  {
    name: 'Mallory Square Sunset Celebration',
    category: 'Sightseeing & Culture',
    distance: '1.8 Miles',
    timeByCar: '6 min drive (or 10 min bicycle)',
    description: 'World-famous historic waterfront plaza where street performers, artists, and live music celebrate legendary Key West sunsets nightly.'
  },
  {
    name: 'Ernest Hemingway Home & Museum',
    category: 'Historic Landmark',
    distance: '1.4 Miles',
    timeByCar: '5 min drive',
    description: 'Iconic 1930s French Colonial residence and gardens where Nobel laureate Ernest Hemingway penned his greatest works, home to famous polydactyl cats.'
  },
  {
    name: 'Duval Street & Historic Old Town',
    category: 'Dining & Nightlife',
    distance: '1.2 Miles',
    timeByCar: '4 min drive',
    description: 'Vibrant mile-long cultural boulevard packed with legendary bistros, jazz clubs, art galleries, and Victorian architecture.'
  },
  {
    name: 'Southernmost Point Buoy',
    category: 'Iconic Landmark',
    distance: '1.9 Miles',
    timeByCar: '6 min drive',
    description: 'The famous painted monument marking the southernmost point in the continental United States, only 90 miles from Cuba.'
  },
  {
    name: 'Fort Zachary Taylor Historic State Park',
    category: 'Beach & Nature',
    distance: '2.4 Miles',
    timeByCar: '8 min drive',
    description: 'A National Historic Landmark renowned for crystal clear ocean swimming, pine-shaded nature trails, and pristine coral reef snorkeling.'
  }
];

export const BOOKING_ADDONS = [
  { id: 'champagne', name: 'Veuve Clicquot & Strawberries on Arrival', price: 95, description: 'Chilled bottle of French Champagne & hand-dipped dark chocolate strawberries in your room' },
  { id: 'breakfast', name: 'Daily Gourmet In-Room Breakfast for Two', price: 45, priceUnit: '/ day', description: 'Freshly baked pastries, eggs benedict, tropical fruit platter, artisanal coffees & juices' },
  { id: 'spa-credit', name: '$150 Haven Spa Botanical Treatment Credit', price: 120, discountTag: 'Save $30', description: 'Applicable towards any massage, facial, or hydrotherapy body polish' },
  { id: 'transfer', name: 'Round-Trip Luxury SUV Airport Transfer', price: 75, description: 'Chauffeured Cadillac Escalade pickup & drop-off at Key West International Airport' },
  { id: 'cabana', name: 'Full-Day Reserved Oceanfront Beach Cabana', price: 125, priceUnit: '/ day', description: 'Dedicated teak cabana with daybed, chilled sparkling water, fresh fruit skewers, and butler' }
];
