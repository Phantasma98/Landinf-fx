import { useState, useRef, useEffect } from "react";
import styles from "./FormSelect.module.css";

export default function FormSelect({
  placeholder,
  value,
  onChange,
  options = [],
  error = false,
  errorMessage = "Обов'язкове поле",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Закриваємо при кліку поза компонентом
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const optionValue = typeof option === "string" ? option : option.value;
    onChange({ target: { value: optionValue } });
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;
    const selected = options.find(
      (opt) => (typeof opt === "string" ? opt : opt.value) === value
    );
    return selected
      ? typeof selected === "string"
        ? selected
        : selected.label
      : placeholder;
  };

  return (
    <div className={`${styles.selectWrapper} ${className}`} ref={selectRef}>
      <button
        type="button"
        className={`${styles.select} font-subtitle-m ${error ? styles.error : ""} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? styles.selectedValue : styles.placeholder}>
          {getDisplayValue()}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option, idx) => {
            const optionValue = typeof option === "string" ? option : option.value;
            const optionLabel = typeof option === "string" ? option : option.label;
            return (
              <button
                key={idx}
                type="button"
                className={`${styles.option} font-subtitle-m ${value === optionValue ? styles.optionActive : ""}`}
                onClick={() => handleSelect(option)}
              >
                {optionLabel}
              </button>
            );
          })}
        </div>
      )}

      {error && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
}
