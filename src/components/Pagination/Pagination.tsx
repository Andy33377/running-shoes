import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  hasNext?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export function Pagination({
  currentPage,
  hasNext = true,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className={styles.wrap}>
      {currentPage > 1 && (
        <button type="button" className={styles.btn} onClick={onPrev}>
          ← Prev Page
        </button>
      )}
      <span className={styles.page}>Page {currentPage}</span>
      {hasNext && (
        <button type="button" className={styles.btnPrimary} onClick={onNext}>
          Next Page →
        </button>
      )}
    </div>
  );
}
