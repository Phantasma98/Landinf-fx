import { useState } from "react";
import styles from "./Faq.module.css";

/**
 * Shared FAQ component
 * 
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "FAQ", "Екосистема")
 * @param {string} [props.subtitle] - Subtitle text below title
 * @param {Array<{question: string, answer: string}>} props.items - FAQ items
 * @param {string} [props.sectionId="faq"] - Section ID for anchor links
 */
const Faq = ({
    title,
    subtitle,
    items = [],
    sectionId = "faq",
}) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const arrowDown = "/images/FaqArrowDown.svg";
    const arrowUp = "/images/FaqArrowUp.svg";

    const toggleItem = (idx) => {
        setExpandedIndex(expandedIndex === idx ? null : idx);
    };

    return (
        <section id={sectionId} className={styles.faq}>
            <div className="container">
                <div className="content">
                    {/* Header */}
                    <div className={styles.faqHeader}>
                        <h2 className={`${styles.faqTitle} font-title-l title-l-m`}>
                            {title}
                        </h2>
                        {subtitle && (
                            <p className={`${styles.faqSubtitle} font-text-l-s`}>
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* FAQ List */}
                    <div className={styles.faqList}>
                        {items.map((item, idx) => (
                            <div key={idx} className={styles.faqItem}>
                                <button
                                    className={`${styles.faqQuestion} font-headline-l headline-l-m`}
                                    onClick={() => toggleItem(idx)}
                                    aria-expanded={expandedIndex === idx}
                                >
                                    <span className={styles.faqQuestionText}>
                                        {item.question}
                                    </span>
                                    <img
                                        src={expandedIndex === idx ? arrowUp : arrowDown}
                                        alt={expandedIndex === idx ? "Згорнути" : "Розгорнути"}
                                        width={54}
                                        height={54}
                                        className={styles.faqArrow}
                                    />
                                </button>

                                {expandedIndex === idx && (
                                    <div className={`${styles.faqAnswer} font-text-l-s`}>
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
