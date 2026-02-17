import type { AppliedFilter } from "../../types";
import styles from "./AppliedFilters.module.css";

interface AppliedFiltersProps {
  filters: AppliedFilter[];
  onRemove?: (key: string, value: string) => void;
}

export function AppliedFilters({ filters, onRemove }: AppliedFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className={styles.wrap}>
      {filters.map((f) => (
        <span key={`${f.key}-${f.value}`} className={styles.tag}>
          {f.label}: {f.value}
          {onRemove && (
            <button
              type="button"
              className={styles.remove}
              onClick={() => onRemove(f.key, f.value)}
              aria-label={`Remove filter ${f.label}`}
            >
              ×
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
