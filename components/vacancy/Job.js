import styles from "./index.module.css";
import SecondaryBtn from "../elements/SecondaryBtn";
import ArrowButton from "../elements/ArrowButton";

const Job = () => {
  const jobListings = Array(8).fill({
    title: "Оператор БПЛА розвідувального типу",
    tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
  });

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
                  <ArrowButton />
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
