"use client";
import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

import styles from "./index.module.css";
import SecondaryBtn from "../elements/SecondaryBtn";
import ArrowButton from "../elements/ArrowButton";
import { customFetch } from "@/components/Functions";

const Job = ({ category }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [units, setUnits] = useState([]);

  // const jobListings = Array(8).fill({
  //   title: "Оператор БПЛА розвідувального типу",
  //   tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
  // });

  const fetchData = useCallback(async () => {
    setLoadingData(true);
    try {
      await customFetch(
        `/api/vacancy/jobs?category=${category}`,
        (data) => {
          setUnits(data.units || []);
        },
        (err) => {
          console.log("API /api/vacancy/jobs error:", err);
        },
      );
    } catch (error) {
      toast.error("Помилка серверу!");
    } finally {
      setLoadingData(false);
    }
  }, [category]); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section id="jobs" className={styles.jobMain}>
      <div className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m  `}>
            схожі вакансії
          </h2>
          <p className={`${styles.jobsSubtitle} font-text-l-s `}></p>
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
            : units.map((job, idx) => (
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
        <div className={styles.jobsAction}>
          <div className={styles.jobsButton}>
            <SecondaryBtn text={"переглянути всі вакансії"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
