import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

import PrimaryBtn from "../PrimaryBtn";

const Form = () => {
  const [activePaymentMethods, setActivePaymentMethods] = useState("MONOBANK");

  return (
    <section id="form" className={styles.formMain}>
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={`${styles.formTitle} font-title-l  title-l-m `}>
            ДОЛУЧИТИСЬ
          </h2>
          <div className={`${styles.formInfo} font-text-l-s  `}>
            <p>
              Залишай заявку та будь на звʼязку. <br />
              Рекрутери Фенікса звʼяжуться з тобою.
            </p>
          </div>
        </div>
        <div className={styles.formContent}>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <div className={`${styles.inputField} font-subtitle-l`}>IMʼЯ</div>
            </div>
            <div className={styles.inputContainer}>
              <div className={`${styles.inputField} font-subtitle-l`}>
                НОМЕР ТЕЛЕФОНУ
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={`${styles.inputField} font-subtitle-l`}>
                БАЖАНИЙ СПОСІБ ЗВʼЯЗКУ
              </div>
            </div>
            <div className={styles.inputContainer1}>
              <div className={`${styles.inputField} font-subtitle-l`}>
                V Я ЦИВІЛЬНИЙ V Я ВІЙСЬКОВИЙ V Я В СЗЧ
              </div>
            </div>

            <PrimaryBtn text={"відправити заявку"} />

            <div className={styles.inputContainer2}>
              <div className={`${styles.inputBottomText} font-text-l-xs  `}>
                Відправляючи заявку, ти погоджуєшся з нашою{" "}
                <a className={styles.formLink}>Політикою конфіденційності</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
