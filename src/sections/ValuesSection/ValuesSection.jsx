import styles from "./index.module.css";
import ValueCard from "@/components/ui/ValueCard";

export default function ValuesSection({ title, subtitle, image, values }) {
  return (
    <section className={styles.valuesMain}>
      <div className={`${styles.valuesSection} layout-1250`}>
        <div className="content-row">
          <h2 className={`col-left font-title-l title-l-m section-title ${styles.valuesTitle}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`col-right ${styles.subtitle} font-text-l-s`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={styles.valuesContent}>
          {image && (
            <div className={styles.imageWrap}>
              <img src={image} alt="" className={styles.image} loading="lazy" decoding="async" />
            </div>
          )}

          <div className={styles.valuesGridRow}>
            <div className={styles.valuesGridLeft}>
              {[0, 3].map((i) => values?.[i] && (
                <ValueCard
                  key={i}
                  title={values[i].title}
                  description={values[i].description}
                  className={styles.valueCard}
                />
              ))}
            </div>
            <div className={styles.valuesGridRight}>
              {[1, 2, 4, 5].map((i) => values?.[i] && (
                <ValueCard
                  key={i}
                  title={values[i].title}
                  description={values[i].description}
                  className={styles.valueCard}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
