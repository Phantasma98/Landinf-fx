import styles from "./index.module.css";

const Statistic = () => {
  const recruitmentItems = [
    { num: "ТОП-2", title: "ЗА РЕЗУЛЬТАТИВНІСТЮ В УГРУПОВАННІ СБС" },
    { num: "ТОП-3", title: "ЗА РЕЙТИНГОМ DELTA БПС" },
    { num: "26500", title: "ПОШКОДЖЕНО ТА ЗНИЩЕНО ВОРОЖИХ ЦІЛЕЙ" },
    { num: "5130", title: "ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА" },
    { num: "$ 2,2 МлРД", title: "ЗАГАЛЬНО ЗАВДАНО ЗБИТКІВ ВОРОГУ" },
  ];

  return (
    <section className={styles.statisticMain}>
      <div className={styles.statisticSection}>
        <h2 className={`${styles.statisticTitle} font-title-l title-l-m `}>
          фенікс <br /> сьогодні
        </h2>
        <div className={styles.statisticSteps}>
          {recruitmentItems.map((step) => (
            <div key={step.num} className={styles.statisticStep}>
              <h3 className="font-title-l title-l-s">{step.num}</h3>
              <p className="font-subtitle-l">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistic;
