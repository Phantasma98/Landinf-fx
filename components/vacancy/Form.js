import styles from "./index.module.css";

import ComponentForm from "@/components/form/ComponentForm";

const Form = () => {
  return (
    <section id="form" className={styles.formMain}>
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={`${styles.formTitle} font-title-l  title-l-m `}>
            На звʼязку
          </h2>
          <div className={`${styles.formInfo} font-text-l-s  `}>
            <p>
              Виникли додаткові питання?
              <br />
              Залишай заявку та будь на звʼязку. <br />
              Рекрутери Фенікса звʼяжуться з тобою.
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

export default Form;
