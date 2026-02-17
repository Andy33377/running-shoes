import { sortOptions } from "../../data/mockData";
import type { SortOption } from "../../types";
import styles from "./SortBy.module.css";

interface SortByProps {
  value: SortOption;
  onChange?: (value: SortOption) => void;
}

export function SortBy({ value, onChange }: SortByProps) {
  return (
    <div className={styles.wrap}>
      <label htmlFor="sort-select" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sort-select"
        className={styles.select}
        value={value}
        onChange={(e) => onChange?.(e.target.value as SortOption)}
      >
        {sortOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
