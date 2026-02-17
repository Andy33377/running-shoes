import type { CategoryCard as CategoryCardType } from "../../types";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: CategoryCardType;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a href={category.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={category.image}
          alt={category.title}
          className={styles.image}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/placeholder.svg";
          }}
        />
      </div>
      <span className={styles.title}>{category.title}</span>
    </a>
  );
}
