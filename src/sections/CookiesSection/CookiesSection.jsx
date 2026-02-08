import styles from "./index.module.css";

export default function CookiesSection({ title, content }) {
  return (
    <section className={styles.cookies}>
      <div className={styles.container}>
        <h2 className={`${styles.title} font-title-l title-l-m section-title`}>{title}</h2>
        <div className={`${styles.content} font-text-l-s`}>{content}</div>
      </div>
    </section>
  );
}
