import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  title,
  subtitle,
  children,
  layout = "row", // "row" | "column"
  gap,
  titleClassName = "",
  subtitleClassName = "",
  className = "",
}) {
  const layoutClass = layout === "column" ? styles.column : styles.row;
  const style = gap ? { gap: `${gap}px` } : undefined;

  // Support both string subtitle and JSX children
  const subtitleContent = children || subtitle;
  const isStringSubtitle = typeof subtitleContent === "string";

  return (
    <div className={`${styles.header} ${layoutClass} ${className}`} style={style}>
      <h2 className={`${styles.title} font-title-l title-l-m section-title ${titleClassName}`}>
        {title}
      </h2>
      {subtitleContent && (
        isStringSubtitle ? (
          <p className={`${styles.subtitle} font-text-l-s ${subtitleClassName}`}>
            {subtitleContent}
          </p>
        ) : (
          <div className={subtitleClassName}>
            {subtitleContent}
          </div>
        )
      )}
    </div>
  );
}
