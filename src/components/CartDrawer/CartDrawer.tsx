import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  selectCartItems,
  selectCartDistinctCount,
} from "../../store/cartSlice";
import { products } from "../../data/mockData";
import styles from "./CartDrawer.module.css";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  if (!isOpen) return null;

  const items = useSelector((state: RootState) => selectCartItems(state));
  const count = useSelector((state: RootState) =>
    selectCartDistinctCount(state),
  );

  const cartProducts = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, quantity: item.quantity };
    })
    .filter(
      (
        entry,
      ): entry is { product: (typeof products)[number]; quantity: number } =>
        entry !== null,
    );

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside className={styles.drawer} onClick={handleContentClick}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Your Cart <span className={styles.itemsCount}>{count} items</span>
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close cart"
          >
            <img
              src="/images/close.svg"
              alt="Close"
              style={{ filter: "brightness(0)" }}
            />
          </button>
        </header>

        <div className={styles.shippingBlock}>
          <p className={styles.shippingText}>
            You&apos;re $99 away from free standard shipping!
          </p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
        </div>

        <div className={styles.body}>
          {cartProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyTitle}>Not sure where to start?</p>
              <div className={styles.linkRow}>
                <button type="button" className={styles.linkButton}>
                  Shop Bestsellers
                </button>
                <button type="button" className={styles.linkButton}>
                  Shop New Arrivals
                </button>
              </div>
            </div>
          ) : (
            <ul className={styles.itemsList}>
              {cartProducts.map(({ product, quantity }) => (
                <li key={product.id} className={styles.itemRow}>
                  <div className={styles.itemImageWrap}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{product.name}</div>
                    <div className={styles.itemMeta}>
                      {product.price} {quantity > 1 ? `× ${quantity}` : ""}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className={styles.footer}>
          <div className={styles.subtotalRow}></div>
          <button
            type="button"
            className={styles.checkoutButton}
            disabled={cartProducts.length === 0}
            aria-disabled={cartProducts.length === 0}
          >
            {cartProducts.length === 0 ? "Your Cart is Empty" : "Checkout"}
          </button>
          <p className={styles.guarantee}>
            30-day Happy Fit Guarantee and Free Returns
          </p>
        </footer>
      </aside>
    </div>
  );
}
