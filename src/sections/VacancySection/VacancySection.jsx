import styles from "./index.module.css";
import SecondaryBtn from "@/components/ui/SecondaryBtn";

export default function VacancySection({ title, blocks = [], ctaText, ctaHref }) {
  return (
    <section className={styles.vacancyMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <h1 className={`${styles.sectionTitle} font-title-l title-l-m section-title`}>
          {title}
        </h1>
        <div className={styles.content}>
          {blocks?.map((block, idx) => (
            <div key={idx} className={styles.block}>
              <h2 className={`${styles.blockTitle} font-headline-l headline-l-s`}>
                {block.title}
              </h2>
              <ul className={styles.list}>
                {block.items?.map((item, i) => (
                  <li key={i} className={`${styles.listItem} font-text-l-s`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {ctaText && (
          <div className={styles.ctaWrap}>
            <SecondaryBtn text={ctaText} href={ctaHref} />
          </div>
        )}
      </div>
    </section>
  );
}
