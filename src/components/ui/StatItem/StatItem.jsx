import styles from "./StatItem.module.css";

export default function StatItem({
  title,
  text,
  titleClassName = "font-title-l title-l-s",
  textClassName = "font-subtitle-l",
  className = "",
}) {
  return (
    <div className={`${styles.statItem} ${className}`}>
      <h3 className={titleClassName}>{title}</h3>
      <p className={textClassName}>{text}</p>
    </div>
  );
}
