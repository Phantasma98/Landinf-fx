import styles from "./FormInput.module.css";

export default function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = "Обов'язкове поле",
  className = "",
  ...props
}) {
  const hasError = error || (required && props.touched && !value);

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.input} font-subtitle-m ${hasError ? styles.error : ""}`}
        {...props}
      />
      {hasError && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
