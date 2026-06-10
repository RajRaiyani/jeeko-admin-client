export interface ProductImage {
  id: string;
  key: string;
  url: string;
}

export interface ProductImageData {
  image_id: string;
  is_primary: boolean;
  image?: ProductImage;
}

export const PRODUCT_BRANDS = ["jeeko", "kishan king"] as const;

export type ProductBrand = (typeof PRODUCT_BRANDS)[number];

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
}

export interface Product {
  id: string;
  category_id: string;
  brand: ProductBrand;
  name: string;
  description?: string;
  tags: string[];
  points: string[];
  metadata: Record<string, any>;
  sale_price: number;
  sale_price_in_rupees?: number;
  created_at?: string;
  updated_at?: string;
  category?: ProductCategory;
  images?: ProductImageData[];
}

export interface CreateProductData {
  category_id: string;
  brand: ProductBrand;
  name: string;
  description?: string;
  tags: string[];
  points: string[];
  metadata: Record<string, any>;
  sale_price: number;
  image_id: string;
}

export interface UpdateProductData {
  category_id: string;
  brand: ProductBrand;
  name: string;
  description?: string;
  tags: string[];
  points: string[];
  metadata: Record<string, any>;
  sale_price: number;
  image_id: string;
}

export interface ProductFilterParams {
  category_id?: string;
  search?: string;
  offset?: number;
  limit?: number;
}

