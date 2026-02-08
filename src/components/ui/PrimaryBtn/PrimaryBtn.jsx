import { Link } from "react-router-dom";
import styles from "./PrimaryBtn.module.css";

export default function PrimaryBtn({
  text,
  href,
  onClick,
  type = "button",
  size = "l",
  className = "",
  disabled = false,
}) {
  const classes = `${styles.btn} ${styles[size]} font-button-l ${disabled ? styles.disabled : ""} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
