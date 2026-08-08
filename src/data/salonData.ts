import { ServiceItem, GalleryItem, WhyUsItem, ReviewItem, ContactInfo } from '../types';
import heroModelImg from '../assets/images/hero_beauty_model_1786105021127.jpg';
import facialImg from '../assets/images/facial_treatment_1786105034153.jpg';
import hairStylingImg from '../assets/images/hair_styling_1786105047198.jpg';

export const HERO_IMAGE = heroModelImg;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hair-styling',
    title: 'Haute Hair Styling',
    subtitle: 'Bespoke Cuts & Silk Sculpting',
    category: 'hair',
    description: 'Custom architectural haircuts and silk blowouts tailored to your natural facial contours, hair movement, and personal aesthetic.',
    details: [
      'Tailored sculptural cutting & texture mapping',
      'Organic botanical scalp treatment',
      'Silk press & diamond gloss finish',
      'Personalized home maintenance prescription'
    ],
    image: hairStylingImg,
    badge: 'Signature'
  },
  {
    id: 'hair-coloring',
    title: 'Dimensional Coloring',
    subtitle: 'French Balayage & Glossing',
    category: 'hair',
    description: 'Multi-tonal hand-painted highlights, seamless French balayage, and ammonia-free glazes designed for luminous depth.',
    details: [
      'Precision color consultation & tone analysis',
      'Bond-building keratin protection treatment',
      'Hand-painted dimensional balayage',
      'UV-protective botanical shine seal'
    ],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    badge: 'Couture'
  },
  {
    id: 'bridal-makeup',
    title: 'Couture Bridal Glamour',
    subtitle: 'Red Carpet & Atelier Makeup',
    category: 'makeup',
    description: 'Weightless, luminous bridal and event makeup crafted with high-definition pigments to accentuate natural bone structure.',
    details: [
      'Private bridal trial & portrait lighting test',
      'Cellular hydration skin preparation',
      'Airbrush finish with waterproof seal',
      'Luxury touch-up kit with custom lip tint'
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    badge: 'Exclusive'
  },
  {
    id: 'facial-treatments',
    title: 'Cellular Facial Renewal',
    subtitle: 'Hydra-Lifting & Botanical Infusions',
    category: 'skincare',
    description: 'A transformative facial journey blending micro-current lifting, cold laser therapy, and organic Swiss botanical extracts.',
    details: [
      'Dermal diagnostic analysis',
      'Enzymatic resurfacing & lymphatic drainage',
      'Oxygenated peptide serum infusion',
      'Cryo-sculpting facial massage'
    ],
    image: facialImg,
    badge: 'Restorative'
  },
  {
    id: 'luxury-skincare',
    title: 'Derm-Epithelial Therapies',
    subtitle: 'Gold Masking & Bio-Peptides',
    category: 'skincare',
    description: 'Ultra-concentrated 24k gold leaf and peptide masking treatments that restore elasticity, firmness, and radiance.',
    details: [
      '24k pure gold leaf application',
      'Growth-factor stem cell mask',
      'Deep acupressure scalp & neck release',
      'Customized post-care regimen'
    ],
    image: 'https://images.unsplash.com/photo-1512290900676-26c2a0d0e5ae?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'nail-care',
    title: 'Haute Couture Nail Care',
    subtitle: 'Botanical Soaks & Gel Sculpting',
    category: 'nails',
    description: 'Spa manicures and pedicures elevated with essential oils, rose-water steams, and non-toxic breathability formulas.',
    details: [
      'Warm rose-water & botanical essential oil soak',
      'Organic sugar & crushed pearl exfoliation',
      'Nail plate restoration & cuticle care',
      'Long-wear breathable gel finish'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop',
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Golden Hour Balayage',
    category: 'coloring',
    subtitle: 'Dimensional honey tone blending',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'g2',
    title: 'Radiant Luminous Skin',
    category: 'skincare',
    subtitle: '24k Gold & Peptide hydration glow',
    image: facialImg,
    aspect: 'square'
  },
  {
    id: 'g3',
    title: 'Couture Editorial waves',
    category: 'hair',
    subtitle: 'Sculpted glossy silk texture',
    image: hairStylingImg,
    aspect: 'tall'
  },
  {
    id: 'g4',
    title: 'Atelier Bridal Glamour',
    category: 'bridal',
    subtitle: 'Soft nude palette with featherweight lashes',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'g5',
    title: 'Botanical Rose Manicure',
    category: 'nails',
    subtitle: 'Clean minimalist nude gel art',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'g6',
    title: 'Velvet Espresso Bob Cut',
    category: 'hair',
    subtitle: 'Precision architectural silhouette',
    image: heroModelImg,
    aspect: 'tall'
  }
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'products',
    title: 'Luxury Products',
    description: '100% cruelty-free, organic botanical actives sourced directly from French & Swiss sustainable ateliers.',
    iconName: 'Sparkles',
    highlight: 'Pure Formulations'
  },
  {
    id: 'specialists',
    title: 'Experienced Specialists',
    description: 'Master artists with over 15 years of couture runway, film, and high-fashion salon experience globally.',
    iconName: 'Award',
    highlight: 'Master Artistry'
  },
  {
    id: 'plans',
    title: 'Personalized Beauty Plans',
    description: 'Comprehensive diagnostic consultations evaluating bone architecture, skin biology, and lifestyle.',
    iconName: 'HeartHandshake',
    highlight: 'Bespoke Curation'
  },
  {
    id: 'atmosphere',
    title: 'Relaxing Atmosphere',
    description: 'Private acoustically insulated suites featuring organic aromatherapy, ambient light therapy, and herbal teas.',
    iconName: 'Feather',
    highlight: 'Serene Haven'
  },
  {
    id: 'hygiene',
    title: 'Exceptional Hygiene',
    description: 'Hospital-grade autoclaves, medical UV-C air purification, and single-use organic Egyptian cotton linens.',
    iconName: 'ShieldCheck',
    highlight: 'Uncompromising Safety'
  },
  {
    id: 'experience',
    title: 'Premium Customer Experience',
    description: 'Dedicated white-glove concierge, valet escort, and seamless post-treatment follow-up consultations.',
    iconName: 'Crown',
    highlight: 'White-Glove Care'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Genevieve Vance',
    role: 'Vogue Fashion Director',
    quote: 'ÉLÉGANCE is not merely a salon—it is an ethereal sanctuary. The attention to detail in their silk wave sculpting and custom skin elixirs is unmatched anywhere in Paris or New York.',
    rating: 5,
    location: 'Upper East Side, NY',
    treatment: 'Dimensional Balayage & Facial Renewal'
  },
  {
    id: 'r2',
    author: 'Isabella Saint-Clair',
    role: 'Couture Bridal Client',
    quote: 'For my wedding in Lake Como, the team crafted a look that felt completely weightless yet lasted throughout 14 hours of celebrations. I felt like the most serene version of myself.',
    rating: 5,
    location: 'Manhattan, NY',
    treatment: 'Couture Bridal Package'
  },
  {
    id: 'r3',
    author: 'Dr. Camille Laurent',
    role: 'Architectural Designer',
    quote: 'The minimalist aesthetic, tranquil private suites, and precise dermal therapies make every visit a essential ritual. My skin has never looked so luminous and restored.',
    rating: 5,
    location: 'Tribeca, NY',
    treatment: '24k Gold & Cellular Facial'
  },
  {
    id: 'r4',
    author: 'Aria Thorne',
    role: 'Creative Director',
    quote: 'From the moment you step through the doors, the aroma of eucalyptus and the whisper of soft ivory silk instantly reset your energy. Truly a $20k experience in every detail.',
    rating: 5,
    location: 'SoHo, NY',
    treatment: 'Haute Hair Styling & Silk Press'
  }
];

export const CONTACT_DATA: ContactInfo = {
  phone: '+1 (212) 880-9281',
  formattedPhone: '+1 212 880 9281',
  email: 'concierge@elegance-atelier.com',
  addressSummary: 'Fifth Avenue Atelier, New York',
  whatsappNumber: '12128809281',
  businessHours: [
    { days: 'Tuesday – Friday', hours: '09:00 AM – 07:00 PM' },
    { days: 'Saturday', hours: '09:00 AM – 06:00 PM' },
    { days: 'Sunday – Monday', hours: 'By Private Appointment' }
  ]
};
