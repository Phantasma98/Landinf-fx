import { useRef } from "react";
import styles from "./index.module.css";
import StatItem from "@/components/ui/StatItem";
import useCountUp from "@/hooks/useCountUp";
import { formatNumberWithSpaces } from "@/utils/formatNumberWithSpaces";

function AnimatedStatItem({ item, className }) {
  const isNumeric = typeof item.value === "number";

  const { ref, value } = useCountUp(isNumeric ? item.value : 0, {
    duration: 2000,
    decimals: item.decimals ?? 0,
  });

  const displayValue = isNumeric
    ? `${item.prefix ?? ""}${formatNumberWithSpaces(value, item.decimals ?? 0)}${item.suffix ?? ""}`
    : item.num;

  return (
    <div ref={ref}>
      <StatItem
        title={displayValue}
        text={item.title}
        className={className}
      />
    </div>
  );
}

export default function StatisticSection({ title, items }) {
  return (
    <section className={styles.statisticMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          <div className={`col-right ${styles.statsGrid}`}>
            {items?.map((item, idx) => (
              <AnimatedStatItem
                key={idx}
                item={item}
                className={styles.statItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
