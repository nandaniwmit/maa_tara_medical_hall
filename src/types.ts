export interface Medicine {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  description: string;
  price: number;
  packSize: string;
  isAvailable: boolean;
  requiresPrescription: boolean;
  manufacturer: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  requiresPrescription: boolean;
  uploadedPrescriptionName: string;
  uploadedPrescriptionBase64?: string;
  message: string;
  preferredDeliveryTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'customers' | 'storefront';
  imageUrl: string;
  description: string;
}

export type ActivePage = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';
