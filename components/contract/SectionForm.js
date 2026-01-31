import styles from "./index.module.css";

import ComponentForm from "../form/ComponentForm";

const SectionForm = () => {
  return (
    <section id="form" className={styles.formMain}>
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={`${styles.formTitle} font-title-l  title-l-m `}>
            ДОЛУЧИТИСЬ
          </h2>
          <div className={`${styles.formInfo} font-text-l-s  `}>
            <p>
              Твій перший крок на шляху до Фенікса. <br />
              Залишай заявку та будь на звʼязку. <br />
              Наші рекрутери звʼяжуться з тобою.
            </p>
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
