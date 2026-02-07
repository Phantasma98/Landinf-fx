import styles from "./index.module.css";

import ComponentForm from "./ComponentForm";

const SectionForm = () => {
  const content = {
    formTitle: "ДОЛУЧИТИСЬ",
    formInfo: (
      <>
        Залишай заявку та будь на звʼязку. <br />
        Рекрутери Фенікса звʼяжуться з тобою.
      </>
    ),
  };
  return (
    <section id="form" className={styles.formMain}>
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={`${styles.formTitle} font-title-l  title-l-m `}>
            {content.formTitle}
          </h2>
          <div className={`${styles.formInfo} font-text-l-s  `}>
            <p>{content.formInfo}</p>
          </div>
        </div>
        <div className={styles.formContent}>
          <ComponentForm />
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
