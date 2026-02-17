import styles from "./FreeShipping.module.css";

export function FreeShipping() {
  return (
    <section id="shipping" className={styles.section}>
      <div className={styles.card}>
        <img
          src="/images/bg-runing-footer.jpg"
          alt="Runner on a path"
          className={styles.image}
        />
        <h2 className={styles.title}>Free Shipping & Returns</h2>
        <p className={styles.text}>
          Not sure about buying a new pair? Don&apos;t sweat it. Get free
          shipping on orders over $99 when you shop on fleetfeet.com.
        </p>
        <p className={styles.text}>
          If you don&apos;t like how your new gear looks, fits or feels,
          we&apos;ll take it back within 30 days. That&apos;s our Happy Fit
          Guarantee.
        </p>
      </div>
    </section>
  );
}
