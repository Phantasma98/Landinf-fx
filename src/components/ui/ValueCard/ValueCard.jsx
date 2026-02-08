import styles from "./ValueCard.module.css";

export default function ValueCard({
  title,
  description,
  className = "",
}) {
  return (
    <div className={`${styles.valueCard} ${className}`} lang="uk">
      <h3 className={`${styles.valueTitle} font-headline-l headline-l-m`}>
        {title}
      </h3>
      <p className={`${styles.valueDesc} font-text-l-s`}>
        {description}
      </p>
    </div>
  );
}
