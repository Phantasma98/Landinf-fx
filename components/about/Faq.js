import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const arrowDown = "/images/FaqArrowDown.svg";
  const arrowUp = "/images/FaqArrowUp.svg";

  const faqs = [
    {
      question: "ЛАБОРАТОРІЯ ДРОНІВ",
      answer: `                
    Ми створили власний сучасний навчальний центр для охочих стати операторами БПЛА. 
    Тут готують до перших місій з максимальним наближенням до бойових умов. 
    Всі інструктори мають великий бойовий досвід, що допомагає майбутнім пілотам розкрити свій потенціал на повну.
                  `,
    },
    {
      question: "МАЙСТЕРНЯ З ВИГОТОВЛЕННЯ БК",
      answer: `                
     Ми створили власний сучасний навчальний центр для охочих стати операторами БПЛА. 
    Тут готують до перших місій з максимальним наближенням до бойових умов. 
    Всі інструктори мають великий бойовий досвід, що допомагає майбутнім пілотам розкрити свій потенціал на повну.
                  `,
    },
    {
      question: "БАЗА ПІДГОТОВКИ операторів БПЛА",
      answer: `                
Ми створили власний сучасний навчальний центр для охочих стати операторами БПЛА. 
    Тут готують до перших місій з максимальним наближенням до бойових умов. 
    Всі інструктори мають великий бойовий досвід, що допомагає майбутнім пілотам розкрити свій потенціал на повну.
                  `,
    },
  ];
  const content = {
    faqHeader: "Екосистема",
    faqSubtitle:
      "Ми створили цілісну структуру безпілотних авіаційних систем яка працює як годинник.",
  };

  return (
    <section id="contract" className={styles.faqMain}>
      <div className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l title-l-m `}>
            {content.faqHeader}
          </h2>
          <p className={`${styles.faqSubtitle} font-text-l-s `}>
            {content.faqSubtitle}
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
