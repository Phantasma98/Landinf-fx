import styles from "./index.module.css";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

export default function VacancySection({ title, blocks = [], ctaText, ctaHref }) {
  return (
    <section className={`${styles.vacancy} full-bleed`}>
      <div className={`${styles.container} layout-1250`}>
        <h2 className={`${styles.title} font-title-l title-l-m section-title`}>
          {title}
        </h2>
        {blocks.map((block, blockIdx) => (
          <div key={`${block.title}-${blockIdx}`} className={styles.block}>
            <h3 className={`${styles.blockTitle} font-headline-l headline-l-s`}>
              {block.title}
            </h3>
            <ul className={styles.list}>
              {block.items?.map((item, idx) => (
                <li key={idx} className={`font-text-l-s ${styles.listItem}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {ctaText ? (
          <div className={styles.ctaWrap}>
            <PrimaryBtn text={ctaText} href={ctaHref} className={styles.ctaBtn} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
