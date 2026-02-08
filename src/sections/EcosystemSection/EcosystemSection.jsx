import { useState } from "react";
import styles from "./index.module.css";

export default function EcosystemSection({ title, subtitle, items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.ecosystemMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          {subtitle && (
            <p className={`col-right ${styles.subtitle} font-text-l-s`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={styles.list}>
          {items?.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.card} ${isExpanded ? styles.open : ""}`}
              >
                <button className={styles.cardHeader} onClick={() => toggleCard(idx)}>
                  <h3 className={`${styles.cardTitle} font-headline-l headline-l-m`}>
                    {item.title}
                  </h3>
                  <span className={styles.arrow}>
                    <svg
                      className={styles.arrowIcon}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10.9226 9.081e-05L10.9226 14.7759L17.7189 7.97963L19.418 9.70903L9.70905 19.418L0.00011529 9.70903L1.69918 7.97963L8.49542 14.7759L8.49542 9.05979e-05L10.9226 9.081e-05Z" />
                    </svg>
                  </span>
                </button>
                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>
                    <p className={`${styles.cardText} font-text-l-s`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
