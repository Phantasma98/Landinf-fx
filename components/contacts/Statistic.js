import styles from "./index.module.css";

const Statistic = () => {
  const recruitmentItems = [
    {
      num: "рекрутинг",
      title: (
        <>
          +38 (095) 8888 011
          <br /> <br />
          +38 (095) 8888 011
        </>
      ),
    },
    { num: "співпраця", title: "ЗА РЕЙТИНГОМ DELTA БПС" },
    { num: "медіа", title: "ПОШКОДЖЕНО ТА ЗНИЩЕНО ВОРОЖИХ ЦІЛЕЙ" },
    { num: "соцмережі", title: "ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА" },
    { num: "месенджери", title: "ЗАГАЛЬНО ЗАВДАНО ЗБИТКІВ ВОРОГУ" },
  ];

  return (
    <section className={styles.statisticMain}>
      <div className={styles.statisticSection}>
        <h2 className={`${styles.statisticTitle} font-title-l title-l-m `}>
          контакти
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
