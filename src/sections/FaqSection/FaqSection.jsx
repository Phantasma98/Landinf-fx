import { useState } from "react";
import styles from "./index.module.css";
import FaqItem from "@/components/ui/FaqItem";

export default function FaqSection({ title, subtitle, questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          <p className={`col-right ${styles.subtitle} font-subtitle-m`}>
            {subtitle}
          </p>
        </div>
        <div className={`${styles.list} stagger-container`}>
          {questions?.map((item, idx) => (
            <FaqItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
