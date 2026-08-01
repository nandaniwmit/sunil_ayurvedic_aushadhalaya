export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  unit: string;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  mrp: number;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  isAyurvedic?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'ayurvedic' | 'medicines' | 'equipment';
  imageUrl: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  quantity?: string;
  prescriptionUploaded?: boolean;
  message: string;
  preferredDeliveryTime: string;
}
