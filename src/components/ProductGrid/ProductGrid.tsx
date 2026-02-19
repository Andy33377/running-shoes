import type { Product } from "../../types";
import { ProductCard } from "../ProductCart/ProductCart";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
