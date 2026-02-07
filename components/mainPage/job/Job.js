"use client";
import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

import styles from "./index.module.css";
import PrimaryBtn from "@/components/elements/PrimaryBtn";
import ArrowButton from "@/components/elements/ArrowButton";
import { customFetch } from "@/components/Functions";

const Job = () => {
  const [activeJobCategory, setActiveJobCategory] = useState("ЗВʼЯЗОК");
  const [loadingData, setLoadingData] = useState(true);
  const [units, setUnits] = useState([]);
  const [jobListings, setjobListings] = useState([]);

  const fetchData = useCallback(async () => {
    setLoadingData(true);
    try {
      await customFetch(
        `/api/jobs`,
        (data) => {
          setUnits(data.units || []);
        },
        (err) => {
          console.log("API /api/jobs error:", err);
        },
      );
      await customFetch(
        `/api/vacancy`,
        (data) => {
          setjobListings(data.units || []);
        },
        (err) => {
          console.log("API /api/vacancy error:", err);
        },
      );
    } catch (error) {
      toast.error("Помилка серверу!");
    } finally {
      setLoadingData(false);
    }
  }, []); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onClickHandler = async (cat) => {
    setActiveJobCategory(cat);

    //get jobListings from api with cat option
    try {
      await customFetch(
        `/api/vacancy?category=${cat}`,
        (data) => {
          setjobListings(data.units || []);
        },
        (err) => {
          console.log("API /api/vacancy error:", err);
        },
      );
    } catch (error) {
      toast.error("Помилка серверу!");
    }
  };

  const content = {
    jobsHeader: "Вакансії",
    jobsSubtitle:
      "Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний механізм. Шукаємо тих, хто готовий привести команду до перемоги своїм розумом та навичками.",
    jobsText:
      "війна - гонка технологій та інженерних рішень. Перемога тут - це не індивідуальне досягнення пілота, це результат безперебійної роботи всієї команди.",
    PrimaryBtn: "стати частиною команди",
  };

  return (
    <section id="jobs" className={styles.jobMain}>
      <div className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m  `}>
            {content.jobsHeader}
          </h2>
          <p className={`${styles.jobsSubtitle} font-text-l-s `}>
            {content.jobsSubtitle}
          </p>
        </div>
        <div className={styles.jobCategoriesContainer}>
          <div className={styles.jobCategories}>
            {loadingData
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={`cat-skeleton-${idx}`}
                    className={`${styles.categoryBtn} ${styles.categorySkeleton} ${styles.skeleton}`}
                  />
                ))
              : units.map((cat) => (
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
            {loadingData
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <div key={`job-skeleton-${idx}`} className={styles.jobCard}>
                    <div className={styles.jobCardContainer}>
                      <div className={styles.jobCardContainerTitle}>
                        <div className={styles.skeletonTagRow}>
                          <span
                            className={`${styles.skeleton} ${styles.skeletonTag}`}
                          />
                          <span
                            className={`${styles.skeleton} ${styles.skeletonTag}`}
                          />
                        </div>
                        <div
                          className={`${styles.skeleton} ${styles.skeletonTitle}`}
                        />
                      </div>
                      <div className={styles.arrowButtonContainer}>
                        <div
                          className={`${styles.skeleton} ${styles.skeletonCircle}`}
                        />
                      </div>
                    </div>
                  </div>
                ))
              : jobListings.map((job, idx) => (
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
                        <ArrowButton
                          link={job.link}
                          buttonWhite={job.buttonWhite}
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className={styles.jobsAction}>
          <p className={`${styles.jobsQuote} font-headline-l headline-l-m `}>
            {content.jobsText}
          </p>
          <div className={styles.jobsButton}>
            <PrimaryBtn text={content.PrimaryBtn} href={"/vacancies"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
