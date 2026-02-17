import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { selectCartItemById } from "../../store/cartSlice";
import type { Product } from "../../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const stylesText =
    product.stylesCount === 1 ? "1 Style" : `${product.stylesCount} Styles`;
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(product.id));
  const isInCart = !!cartItem;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/placeholder.svg";
          }}
        />
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.styles}>{stylesText}</p>
      <p className={styles.price}>{product.price}</p>
      <button
        type="button"
        className={`${styles.addButton} ${
          isInCart ? styles.addButtonActive : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          if (isInCart) {
            dispatch(removeFromCart(product.id));
          } else {
            dispatch(addToCart(product.id));
          }
        }}
        aria-label="Add to cart"
      >
        <img src="/images/drop.svg" alt="" className={styles.addIcon} />
      </button>
    </div>
  );
}
