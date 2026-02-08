import styles from "./RadioGroup.module.css";

export default function RadioGroup({
  name,
  options = [],
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = "Обов'язкове поле",
  className = "",
}) {
  const hasError = error || (required && !value);

  return (
    <div className={`${styles.radioWrapper} ${className}`}>
      <div className={`${styles.radioGroup} ${hasError ? styles.error : ""}`}>
        {options.map((option, idx) => {
          const optionValue = typeof option === "string" ? option : option.value;
          const optionLabel = typeof option === "string" ? option : option.label;
          const isSelected = value === optionValue;

          return (
            <label key={idx} className={styles.radioLabel}>
              <span className={`${styles.radioCircle} ${isSelected ? styles.selected : ""}`}>
                <span className={styles.radioInner} />
              </span>
              <span className={`${styles.radioText} font-subtitle-m`}>{optionLabel}</span>
              <input
                type="radio"
                name={name}
                value={optionValue}
                checked={isSelected}
                onChange={(e) => onChange(e.target.value)}
                className={styles.radioInput}
              />
            </label>
          );
        })}
      </div>
      {hasError && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
