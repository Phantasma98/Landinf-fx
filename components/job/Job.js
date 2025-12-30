import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./index.module.css";
import TeamBtn from "../elements/buttons/TeamBtn";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";

const Job = () => {
  const [activeJobCategory, setActiveJobCategory] = useState("БПЛА");

  const heroImage = "/images/Dron_main.svg";
  const Social1 = "/images/Component1.svg";

  const jobCategories = [
    "БПЛА",
    "НРК",
    "РЕБ / РЕР",
    "IT / ЗВʼЯЗОК",
    "ЛОГІСТИКА",
    "ІНЖЕНЕРІЯ / РЕМОНТ",
    "МЕДИЦИНА",
    "ШТАБ",
    "МЕДІА",
    "ІНШЕ",
  ];

  const jobListings = Array(16).fill({
    title: "Оператор БПЛА розвідувального типу",
    tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
  });

  return (
    <section id="jobs" className={styles.jobMain}>
      <div className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={styles.sectionTitle}>Вакансії</h2>
          <p className={styles.jobsSubtitle}>
            Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний
            механізм. Шукаємо тих, хто готовий привести команду до перемоги
            своїм розумом та навичками.
          </p>
        </div>
        <div className={styles.jobCategoriesContainer}>
          <div className={styles.jobCategories}>
            {jobCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${
                  activeJobCategory === cat ? styles.active : ""
                }`}
                onClick={() => setActiveJobCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.jobGrid}>
            {jobListings.map((job, idx) => (
              <div key={idx} className={styles.jobCard}>
                <h4>{job.title}</h4>
                <div className={styles.jobTags}>
                  {job.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.jobsAction}>
          <p className={styles.jobsQuote}>
            війна - гонка технологій та інженерних рішень. Перемога тут - це не
            індивідуальне досягнення пілота, це результат безперебійної роботи
            всієї команди.
          </p>
          <div className={styles.jobsButton}>
            <PrimaryBtn text={"стати частиною команди"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
