import styles from "./index.module.css";

const Recruit = () => {
  const recruitmentItems = [
    { num: "01", title: "ЗАПОВНЕННЯ АНКЕТИ" },
    { num: "02", title: "СПІВБЕСІДА З РЕКРУТЕРАМИ" },
    { num: "03", title: "ЗАРАХУВАННЯ ДО ПІДРОЗДІЛУ" },
    { num: "04", title: "БАЗОВА ВІЙСЬКОВА ПІДГОТОВКА" },
    { num: "05", title: "ФАХОВА ПІДГОТОВКА" },
    { num: "06", title: "ВИКОНАННЯ ЗАВДАНЬ" },
  ];
  const content = {
    recruitmentTitle: "шлях рекрута",
  };

  return (
    <section className={styles.recruitmentMain}>
      <div className={styles.recruitmentSection}>
        <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
          {content.recruitmentTitle}
        </h2>
        <div className={styles.pathSteps}>
          {recruitmentItems.map((step) => (
            <div key={step.num} className={styles.pathStep}>
              <h3 className="font-title-l title-l-s">{step.num}</h3>
              <p className="font-subtitle-l">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruit;
