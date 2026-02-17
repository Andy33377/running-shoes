import { useState } from "react";
import { navItems } from "../../data/mockData";
import styles from "./Header.module.css";

export function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img
          src="/images/main-logo.png"
          alt="Fleet Feet"
          className={styles.logoImg}
        />
      </a>
      <nav className={styles.nav}>
        {navItems
          .filter((item) => ["Women", "Men", "Gear", "Brands"].includes(item))
          .map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={styles.navLink}
            >
              {item}
            </a>
          ))}
      </nav>
      <div className={styles.actions}>
        <div className={styles.searchWrap}>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.search}
          />
          <img
            src="/images/search.svg"
            alt=""
            className={styles.searchIcon}
            aria-hidden="true"
          />
        </div>
        <button
          type="button"
          className={styles.cartButton}
          aria-label="Open cart"
        >
          <img
            src="/images/basket.svg"
            alt=""
            className={styles.cartIcon}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
