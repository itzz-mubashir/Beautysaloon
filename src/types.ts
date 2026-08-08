export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'hair' | 'makeup' | 'skincare' | 'nails';
  description: string;
  details: string[];
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'coloring' | 'bridal' | 'skincare' | 'nails';
  image: string;
  subtitle: string;
  aspect: 'tall' | 'square' | 'wide';
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
  treatment: string;
}

export interface ContactInfo {
  phone: string;
  formattedPhone: string;
  email: string;
  addressSummary: string; // E.g. "Upper East Side Atelier, New York"
  whatsappNumber: string;
  businessHours: {
    days: string;
    hours: string;
  }[];
}
