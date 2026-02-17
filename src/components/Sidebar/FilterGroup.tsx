import styles from "./Sidebar.module.css";

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
}

export function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.filterTitle}>{title}</h3>
      <div className={styles.filterContent}>{children}</div>
    </div>
  );
}
