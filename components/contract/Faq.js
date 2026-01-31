import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const arrowDown = "/images/FaqArrowDown.svg";
  const arrowUp = "/images/FaqArrowUp.svg";

  const faqs = [
    {
      question: "ЯКІ ГОЛОВНІ ВИМОГИ ДО КАНДИДАТА?",
      answer: `                
                Коли термін контракту завершиться, ти зможеш обрати: 
                завершити службу або підписати новий контракт.
                Після виконання своїх зобов’язань за дворічним контрактом, 
                ти отримаєш право на відстрочку від призову на 1 рік.
                  `,
    },
    {
      question:
        "ЧИМ ЦЕЙ КОНТРАКТ ВІДРІЗНЯЄТЬСЯ ВІД ЗВИЧАЙНОГО КОНТРАКТУ “18-24”?",
      answer: `                
                     Коли термін контракту завершиться, ти зможеш обрати: 
                завершити службу або підписати новий контракт.
                Після виконання своїх зобов’язань за дворічним контрактом, 
                ти отримаєш право на відстрочку від призову на 1 рік.
                  `,
    },
    {
      question: "ЩО ВІДБУВАЄТЬСЯ ПІСЛЯ ЗАВЕРШЕННЯ КОНТРАКТУ?",
      answer: `                
                Коли термін контракту завершиться, ти зможеш обрати: 
                завершити службу або підписати новий контракт.
                Після виконання своїх зобов’язань за дворічним контрактом, 
                ти отримаєш право на відстрочку від призову на 1 рік.
                  `,
    },
  ];
  return (
    <section id="contract" className={styles.faqMain}>
      <div className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
            FAQ
          </h2>
          <p className={`${styles.faqSubtitle} font-text-l-s `}>
            Якщо виникають додаткові запитання - залишай заявку і наш рекрутер з
            тобою звʼяжеться.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} font-headline-l headline-l-m  `}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                {expandedFaq === idx ? (
                  <>
                    <div className={styles.faqQuestionTitle}>
                      {faq.question}
                    </div>
                    <Image src={arrowUp} alt="arrowUp" width={54} height={54} />
                  </>
                ) : (
                  <>
                    <div className={styles.faqQuestionTitle}>
                      {faq.question}
                    </div>
                    <Image
                      src={arrowDown}
                      alt="arrowDown"
                      width={54}
                      height={54}
                    />
                  </>
                )}
              </button>
              {expandedFaq === idx && (
                <div className={`${styles.faqAnswer} font-text-l-s  `}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
