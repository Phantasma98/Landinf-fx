import styles from "./index.module.css";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import JobCard from "@/components/ui/JobCard";

export default function VacancyJobSection({ title, items = [], ctaText, ctaHref }) {
  return (
    <section className={styles.vacancyJobMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <h2 className={`${styles.sectionTitle} font-title-l title-l-m section-title`}>
          {title}
        </h2>
        <div className={styles.grid}>
          {items?.map((item, idx) => (
            <JobCard
              key={idx}
              title={item.title}
              tags={item.tags}
              link={item.link}
            />
          ))}
        </div>
        {ctaText ? (
          <div className={styles.ctaWrap}>
            <SecondaryBtn text={ctaText} href={ctaHref} size="m" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
