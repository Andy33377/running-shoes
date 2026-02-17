import styles from "./InfoSection.module.css";

interface InfoSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function InfoSection({ id, title, children }: InfoSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
