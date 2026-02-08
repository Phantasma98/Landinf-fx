import styles from "./FaqItem.module.css";
import { ArrowDown } from "@/assets";

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  className = "",
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""} ${className}`}>
      <button className={styles.question} onClick={onToggle}>
        <span className={`${styles.questionText} font-title-l headline-l-m`}>{question}</span>
        <span className={styles.arrow}>
          <img src={ArrowDown} alt="" width={20} height={20} />
        </span>
      </button>
      <div className={styles.answerWrapper}>
        <div className={styles.answer}>
          <p className="font-subtitle-m">{answer}</p>
        </div>
      </div>
    </div>
  );
}
