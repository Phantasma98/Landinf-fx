import styles from "./index.module.css";

export default function PolicySection({ title, blocks = [] }) {
  return (
    <section className={styles.policy}>
      <div className={`${styles.container} layout-1250`}>
        <h2 className={`${styles.title} font-title-l title-l-m section-title`}>
          {title}
        </h2>
        {blocks.map((block, idx) => (
          <div key={idx} className={styles.block}>
            <h3 className={`${styles.blockHeader} font-headline-l headline-l-m`}>
              {block.header}
            </h3>
            <div className={`${styles.blockText} font-text-l-s`}>
              {block.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
