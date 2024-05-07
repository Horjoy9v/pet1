export interface Product {
  id: string;
  name: string;
  available: boolean;
  characteristic: [];
  description: string;
  images: { src: string; alt: string }[];
  price: string;
  brand: string;
  sales: string;
}
