import { useNavigate } from "react-router-dom";
import { useTransitionNavigate } from "@/components/PageAnimations";
import styles from "./JobCard.module.css";
import ArrowButton from "@/components/ui/ArrowButton";

export default function JobCard({
  title,
  tags = [],
  link,
  variant = "default", // "default" | "all"
  onClick,
  className = "",
}) {
  const transitionNavigate = useTransitionNavigate();
  const fallbackNavigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      (transitionNavigate || fallbackNavigate)(link);
    }
  };

  return (
    <div
      className={`${styles.jobCard} ${variant === "all" ? styles.jobCardAll : ""} card-hover-effect ${className}`}
      onClick={handleClick}
    >
      <div className={styles.jobCardContainer}>
        <div className={styles.jobCardContent}>
          <div className={styles.jobTags}>
            {tags.map((tag, i) => (
              <span key={`${tag}-${i}`} className="font-tag">{tag}</span>
            ))}
          </div>
          <h4 className="font-text-compact">{title}</h4>
        </div>
        <div className="arrow-btn-container">
          <ArrowButton link={link} />
        </div>
      </div>
    </div>
  );
}
