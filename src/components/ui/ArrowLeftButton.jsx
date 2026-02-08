import styles from "./ArrowButton/ArrowButton.module.css";
import { ArrowLeft } from "@/assets";

export default function ArrowLeftButton({ onClick }) {
  return (
    <button type="button" className={styles.arrow} onClick={onClick}>
      <img
        className={styles.arrowIcon}
        src={ArrowLeft}
        alt="Попередній"
        aria-hidden="true"
      />
    </button>
  );
}
