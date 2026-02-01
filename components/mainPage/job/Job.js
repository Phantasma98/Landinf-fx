import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";
import PrimaryBtn from "../../elements/PrimaryBtn";
import ArrowButton from "../../elements/ArrowButton";

const Job = () => {
  const [activeJobCategory, setActiveJobCategory] = useState("IT / ЗВʼЯЗОК");

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

  const jobListings = Array(8).fill({
    title: "Інженер мережевих інтеграцій",
    tags: ["#IT", "#КОНТРАКТ 18-24"],
    link: "/vacancy/1",
  });

  const onClickHandler = (cat) => {
    setActiveJobCategory(cat);
    //get jobListings from api with cat option
  };
  return (
    <section id="jobs" className={styles.jobMain}>
      <div className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m  `}>
            Вакансії
          </h2>
          <p className={`${styles.jobsSubtitle} font-text-l-s `}>
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
                className={`${styles.categoryBtn} font-jobButton-l  ${
                  activeJobCategory === cat ? styles.active : ""
                }`}
                onClick={() => onClickHandler(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.jobGrid}>
            {jobListings.map((job, idx) => (
              <div key={idx} className={styles.jobCard}>
                <div className={styles.jobCardContainer}>
                  <div className={styles.jobCardContainerTitle}>
                    <div className={`${styles.jobTags} font-jobButton-l `}>
                      {job.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                    <h4 className={`font-text-l-s`}>{job.title}</h4>
                  </div>
                  <div className={styles.arrowButtonContainer}>
                    <ArrowButton link={job.link} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.jobsAction}>
          <p className={`${styles.jobsQuote} font-headline-l headline-l-m `}>
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
