export const FRAME_BASE_URL = "/frames";
export const FRAME_FILE_PREFIX = "ezgif-frame-";
export const FRAME_EXTENSION = ".jpg";
export const FRAME_COUNT = 278;

export const VIDEO_BASE_URL = "/videos";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Dates", path: "/dates" },
  { name: "Travel", path: "/travel" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Support", path: "/support" }
];

export const STAY_CARDS = [
  {
    title: "The Ocean Villas",
    price: "From $1,200 / Night",
    description: "Overwater sanctuaries with private infinity pools and direct lagoon access.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3432&auto=format&fit=crop",
    dark: false
  },
  {
    title: "The Beach Residence",
    price: "From $2,500 / Night",
    description: "Sprawling beachfront estates surrounded by lush tropical gardens.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop",
    dark: true
  },
  {
    title: "The Royal Estate",
    price: "Inquire for Pricing",
    description: "The crown jewel of the island. 5 bedrooms, private chef, and yacht access.",
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
    dark: false,
    accent: true
  }
];

export const DESTINATION_CARDS = [
  {
    id: "santorini",
    title: "Santorini Dreams",
    subtitle: "Mediterranean luxury awaits",
    stats: "From $4,500 | 7 nights",
    description: "Experience the golden hour over the caldera.",
    size: "large",
    videoPath: `${VIDEO_BASE_URL}/santorini-hero.mp4`
  },
  {
    id: "tropical",
    title: "Tropical Paradise",
    subtitle: "Island escapes",
    stats: "From $3,200 | 5 nights",
    description: "Relax with palm silhouettes and ocean breezes.",
    size: "medium",
    videoPath: `${VIDEO_BASE_URL}/tropical-sunset-palms.mp4`
  },
  {
    id: "first-class",
    title: "First-Class Journey",
    subtitle: "Fly in style",
    stats: "Upgrade from $1,200",
    description: "Sip champagne at 30,000 feet.",
    size: "medium",
    videoPath: `${VIDEO_BASE_URL}/champagne-bubbles.mp4`
  },
  {
    id: "aviation",
    title: "Sky High Adventures",
    subtitle: "World awaits",
    stats: "150+ Cities",
    description: "Explore the world with seamless connections.",
    size: "wide",
    videoPath: `${VIDEO_BASE_URL}/wing-golden-hour.mp4`
  },
  {
    id: "penthouse",
    title: "Penthouse Keycard",
    subtitle: "Exclusive Access",
    stats: "Elite Members Only",
    description: "Unlocking the ultimate luxury experience.",
    size: "medium",
    videoPath: `${VIDEO_BASE_URL}/penthouse.mp4`,
    accent: true
  }
];

export const TRAVEL_PACKAGES = [
  {
    id: "kyoto",
    title: "Kyoto Ancient Stays",
    location: "Japan",
    price: "$8,500",
    description:
      "Immerse yourself in the tranquility of ancient temples and bamboo forests. Private tea ceremonies included.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "amalfi",
    title: "Amalfi Coast Villa",
    location: "Italy",
    price: "$12,000",
    description:
      "Cliffside luxury overlooking the Tyrrhenian Sea. Private yacht tours and lemon grove tastings.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2666&auto=format&fit=crop"
  },
  {
    id: "aspen",
    title: "Aspen Winter Chalet",
    location: "USA",
    price: "$15,000",
    description: "Ski-in and ski-out access with a private chef and heated outdoor pool.",
    image:
      "https://images.unsplash.com/photo-1518182170546-07fb612d21e3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "mykonos",
    title: "Mykonos White House",
    location: "Greece",
    price: "$10,500",
    description: "Iconic white aesthetics with a private infinity pool facing the sunset.",
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: "bali",
    title: "Ubud Jungle Resort",
    location: "Indonesia",
    price: "$6,200",
    description: "Suspended infinity pools in the heart of the rainforest. Yoga and wellness retreats.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2676&auto=format&fit=crop"
  },
  {
    id: "reykjavik",
    title: "Northern Lights Igloo",
    location: "Iceland",
    price: "$7,800",
    description:
      "Glass-roofed luxury pods designed for the ultimate aurora borealis viewing experience.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop"
  }
];

export const INFO_PAGE_DEFAULT_HIGHLIGHTS = [
  "Curated itineraries",
  "VIP concierge service",
  "Exclusive access",
  "24/7 support"
];

export const INFO_PAGES = {
  about: {
    title: "About Us",
    subtitle: "Our Story",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop"
  },
  dates: {
    title: "Availability",
    subtitle: "Plan Your Stay",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop"
  },
  gallery: {
    title: "Gallery",
    subtitle: "Visual Journey",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2670&auto=format&fit=crop"
  },
  contact: {
    title: "Contact",
    subtitle: "Get in Touch",
    image:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2670&auto=format&fit=crop"
  },
  support: {
    title: "Support",
    subtitle: "We're Here to Help",
    image:
      "https://images.unsplash.com/photo-1557992260-ec58e38d363c?q=80&w=2574&auto=format&fit=crop"
  }
};

export const SERVICE_PAGES = {
  "private-jets": {
    title: "Private Aviation",
    subtitle: "Fly on Your Terms",
    heroImage:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2574&auto=format&fit=crop",
    description:
      "Bypass long lines and commercial terminals. Experience the ultimate freedom of private aviation with our fleet of long-range jets, tailored catering, and seamless ground transport.",
    features: [
      { title: "Global Reach", desc: "Access to 5,000+ airports" },
      { title: "On-Demand", desc: "Ready in as little as 4 hours" },
      { title: "Pet Friendly", desc: "Bring your companions" },
      { title: "Privacy", desc: "Discrete terminals and lounges" }
    ]
  },
  villas: {
    title: "Luxury Villas",
    subtitle: "Your Private Sanctuary",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
    description:
      "From clifftop estates in Amalfi to beachfront mansions in Turks and Caicos. Our portfolio of private villas offers the space, privacy, and amenities of a five-star resort, exclusively for you.",
    features: [
      { title: "Private Staff", desc: "Chefs, butlers, and housekeeping" },
      { title: "Exclusive Access", desc: "Beaches and golf courses" },
      { title: "Concierge", desc: "24/7 itinerary planning" },
      { title: "Design", desc: "Award-winning architecture" }
    ]
  },
  experiences: {
    title: "Curated Experiences",
    subtitle: "Memories for a Lifetime",
    heroImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
    description:
      "Go beyond the guidebook. Whether it's a private after-hours tour of the Vatican, shark diving in South Africa, or truffle hunting in Piedmont, we unlock the world's most exclusive moments.",
    features: [
      { title: "Access", desc: "Behind closed doors" },
      { title: "Guides", desc: "Local experts and historians" },
      { title: "Adventure", desc: "Custom expeditions" },
      { title: "Culture", desc: "Immersive workshops" }
    ]
  },
  concierge: {
    title: "Global Concierge",
    subtitle: "Your Wish, Granted",
    heroImage:
      "https://images.unsplash.com/photo-1565551984260-60a674488a0b?q=80&w=2574&auto=format&fit=crop",
    description:
      "Our dedicated lifestyle managers are at your service 24/7. From last-minute restaurant reservations to sourcing rare gifts, we handle the details so you can enjoy the journey.",
    features: [
      { title: "24/7 Support", desc: "Always available" },
      { title: "Dining", desc: "Priority reservations" },
      { title: "Events", desc: "VIP tickets and access" },
      { title: "Logistics", desc: "Seamless transfers" }
    ]
  }
};
