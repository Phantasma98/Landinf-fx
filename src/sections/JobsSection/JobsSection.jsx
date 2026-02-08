import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./index.module.css";
import TabButtons from "@/components/ui/TabButtons";
import JobCard from "@/components/ui/JobCard";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import { useModal } from "@/contexts/ModalContext";

const MODAL_CTA_TEXTS = [
  "долучитись",
  "приєднатися",
  "стати частиною команди",
  "відправити заявку",
];

const Job = ({
  id = "jobs",
  title,
  subtitle,
  categories = [],
  jobs = [],
  defaultCategory,
  quote,
  ctaText,
  ctaHref,
  isVacanciesPage = false,
}) => {
  const location = useLocation();
  const { openModal } = useModal();
  const [activeJobCategory, setActiveJobCategory] = useState(defaultCategory || categories[0] || "");
  const ctaTextNormalized = (ctaText || "").toLowerCase();
  const shouldOpenModalFromCta = MODAL_CTA_TEXTS.some((value) =>
    ctaTextNormalized.includes(value)
  );

  useEffect(() => {
    const categoryFromQuery = new URLSearchParams(location.search).get("category");

    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setActiveJobCategory(categoryFromQuery);
      return;
    }

    if (defaultCategory && categories.includes(defaultCategory)) {
      setActiveJobCategory(defaultCategory);
      return;
    }

    setActiveJobCategory(categories[0] || "");
  }, [categories, defaultCategory, location.search]);

  // Logic:
  // - On vacancies page: show all jobs, no "all vacancies" card
  // - On home page: if 8+ jobs, show 7 + "all vacancies" card; if 7 or less, show all
  const showAllCard = !isVacanciesPage && jobs.length >= 8;
  const displayedJobs = isVacanciesPage
    ? jobs
    : (showAllCard ? jobs.slice(0, 7) : jobs);
  const allInCategoryLink = activeJobCategory
    ? `/vacancies?category=${encodeURIComponent(activeJobCategory)}#jobs`
    : "/vacancies#jobs";

  return (
    <section id={id} className={`${styles.jobMain} full-bleed`}>
      <div className={`${styles.jobsSection} layout-1250`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          <p className={`col-right ${styles.subtitle} font-text-l-s`}>
            {subtitle}
          </p>
        </div>

        <div className={`${styles.jobCategoriesContainer} stagger-container`}>
          <TabButtons
            items={categories}
            activeItem={activeJobCategory}
            onSelect={setActiveJobCategory}
            className={styles.jobCategories}
          />
          <div className={`${styles.jobGrid} stagger-container row-stagger-grid`}>
            {displayedJobs.map((job, idx) => (
              <JobCard
                key={`${job.title}-${idx}`}
                title={job.title}
                tags={job.tags}
                link={job.link}
              />
            ))}
            {showAllCard && (
              <JobCard
                title="ВСІ ВАКАНСІЇ В КАТЕГОРІЇ"
                tags={[`#${activeJobCategory}`]}
                link={allInCategoryLink}
                variant="all"
              />
            )}
          </div>
        </div>

        <div className={styles.jobsAction}>
          <p className={`${styles.jobsQuote} font-headline-l headline-l-m`}>
            {quote}
          </p>
          {ctaText ? (
            <div className={styles.jobsButton}>
              <PrimaryBtn
                text={ctaText}
                href={shouldOpenModalFromCta ? undefined : ctaHref}
                onClick={shouldOpenModalFromCta ? openModal : undefined}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Job;
