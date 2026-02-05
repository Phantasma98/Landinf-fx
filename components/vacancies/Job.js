"use client";
import { useState, useCallback, useEffect } from "react";

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
  // const jobCategories = [
  //   "БПЛА",
  //   "НРК",
  //   "РЕБ / РЕР",
  //   "IT / ЗВʼЯЗОК",
  //   "ЛОГІСТИКА",
  //   "ІНЖЕНЕРІЯ / РЕМОНТ",
  //   "МЕДИЦИНА",
  //   "ШТАБ",
  //   "МЕДІА",
  //   "ІНШЕ",
  // ];

  // const jobListings = Array(8).fill({
  //   title: "Інженер мережевих інтеграцій",
  //   tags: ["#IT", "#КОНТРАКТ 18-24"],
  //   link: "/vacancy/1",
  // });

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

  return (
    <section id="jobs" className={styles.jobMain}>
      <div className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m  `}>
            Вакансії
          </h2>
          <p className={`${styles.jobsSubtitle} font-text-l-s `}>
            Твій цивільний досвід - фундамент результату. Ми шукаємо тих, хто
            готовий працювати на максимальних обертах. Обирай посаду, яка
            відповідає твоїм навичкам найкраще та відправляй заявку.
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
            Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний
            механізм.
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
