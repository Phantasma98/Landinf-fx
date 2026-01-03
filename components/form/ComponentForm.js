import Form from "next/form";
import { useState } from "react";

import styles from "./index.module.css";

import PrimaryBtn from "../PrimaryBtn";

const ComponentForm = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const options = [
    { value: "option1", label: "Я ЦИВІЛЬНИЙ" },
    { value: "option2", label: "Я ВІЙСЬКОВИЙ" },
    { value: "option3", label: "Я В СЗЧ" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
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
          {options.map((option) => (
            <div key={option.value} className={styles.checkField}>
              <input
                className={styles.radioInput}
                type="radio"
                id={option.value}
                name="optionGroup"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <label htmlFor={option.value} className={styles.radioLabel}>
                <div className={styles.radioCircle}></div>
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <PrimaryBtn text={"відправити заявку"} />

      <div className={styles.inputContainer2}>
        <div className={`${styles.inputBottomText} font-text-l-xs  `}>
          Відправляючи заявку, ти погоджуєшся з нашою{" "}
          <a>Політикою конфіденційності</a>
        </div>
      </div>
    </div>
  );
};

export default ComponentForm;
