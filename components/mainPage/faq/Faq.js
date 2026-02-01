import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

const Faq = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const arrowDown = "/images/FaqArrowDown.svg";
  const arrowUp = "/images/FaqArrowUp.svg";

  const faqs = [
    {
      question: 'З ЯКОГО ВІКУ БЕРУТЬ У "ФЕНІКС"?',
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    "Феніксі". Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  `,
    },
    {
      question: "СКІЛЬКИ ТРИВАЄ КУРС БАЗОВОЇ ПІДГОТОВКИ?",
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    &quot;Феніксі&quot;. Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  `,
    },
    {
      question: "КОНТРАКТ ЧИ МОБІЛІЗАЦІЯ?",
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    "Феніксі". Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  `,
    },
    {
      question: "МОЖНА ПЕРЕВЕСТИСЯ З ІНШОГО ПІДРОЗДІЛУ?",
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    "Феніксі". Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  `,
    },
    {
      question: "ЯКІ ДОКУМЕНТИ ПОТРІБНІ ДЛЯ ЗАРАХУВАННЯ?",
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    "Феніксі". Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  `,
    },
    {
      question: "ЧИ Є КОТРАКТ 18-24?",
      answer: `                
                    Так. Контракт 18-24 доступний для підписання у
                    "Феніксі". Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
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
                    {faq.question}
                    <Image src={arrowUp} alt="arrowUp" width={54} height={54} />
                  </>
                ) : (
                  <>
                    {faq.question}
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
