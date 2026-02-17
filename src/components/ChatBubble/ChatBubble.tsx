import styles from "./ChatBubble.module.css";

export function ChatBubble() {
  return (
    <a
      href="#chat"
      className={styles.bubble}
      aria-label="Open chat"
      title="Chat"
    >
      <img
        src="/images/chat.svg"
        alt=""
        className={styles.icon}
        aria-hidden="true"
      />
    </a>
  );
}
