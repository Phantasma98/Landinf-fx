import styles from "./index.module.css";
import StatItem from "@/components/ui/StatItem";

export default function RecruitSection({ title, steps }) {
  return (
    <section className={styles.recruitmentMain}>
      <div className={`${styles.contentWrapper} layout-1250 content-row`}>
        <h2 className={`${styles.sectionTitle} col-left font-title-l title-l-m section-title`}>
          {title}
        </h2>
        <div className={`${styles.pathSteps} col-right`}>
          {steps?.map((step, idx) => (
            <StatItem
              key={idx}
              title={step.num}
              text={step.title}
              titleClassName="font-title-l title-l-s"
              textClassName="font-subtitle-m"
              className={styles.pathStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
