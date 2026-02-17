export interface Product {
  id: string;
  name: string;
  stylesCount: number;
  price: string;
  priceRange?: { min: number; max: number };
  image: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  image: string;
  href: string;
}

export type SortOption = "popular" | "price-asc" | "price-desc" | "newest";

export interface FilterOption {
  id: string;
  label: string;
  value?: string;
}

export interface ColorOption extends FilterOption {
  hex: string;
}

export interface AppliedFilter {
  key: string;
  label: string;
  value: string;
}
