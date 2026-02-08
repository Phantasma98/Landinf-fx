import styles from "./ArrowButton/ArrowButton.module.css";
import { ArrowRight } from "@/assets";

export default function ArrowRightButton({ onClick }) {
  return (
    <button type="button" className={styles.arrow} onClick={onClick}>
      <img
        className={styles.arrowIcon}
        src={ArrowRight}
        alt="Наступний"
        aria-hidden="true"
      />
    </button>
  );
}
