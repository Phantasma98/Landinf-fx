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

  return (
    <section className={styles.recruitmentMain}>
      <div className={styles.recruitmentSection}>
        <h2 className={styles.sectionTitle}>шлях рекрута</h2>
        <div className={styles.pathSteps}>
          {recruitmentItems.map((step) => (
            <div key={step.num} className={styles.pathStep}>
              <h3>{step.num}</h3>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruit;
