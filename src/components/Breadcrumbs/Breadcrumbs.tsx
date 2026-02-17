import { breadcrumbs } from "../../data/mockData";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs() {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {breadcrumbs.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span className={styles.sep}> / </span>}
          <a href={item.href} className={styles.link}>
            {item.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
