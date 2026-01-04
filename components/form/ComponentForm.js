import Form from "next/form";
import { useState } from "react";

import styles from "./index.module.css";

import PrimaryBtn from "../PrimaryBtn";

const ComponentForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadioOption, setSelectedRadioOption] = useState("");
  const radioOptions = [
    { value: "option1", label: "Я ЦИВІЛЬНИЙ" },
    { value: "option2", label: "Я ВІЙСЬКОВИЙ" },
    { value: "option3", label: "Я В СЗЧ" },
  ];

  const options = [
    // { value: "choose", label: "БАЖАНИЙ СПОСІБ ЗВʼЯЗКУ" },
    { value: "whatsapp", label: "Whatsapp" },
    { value: "viber", label: "Viber" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionRadioChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <div className={`${styles.inputField} font-subtitle-l`}>
          <input
            className={`${styles.textInput} font-subtitle-l`}
            type="text"
            placeholder="ІМʼЯ"
            name="name"
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={`${styles.inputField} font-subtitle-l`}>
          <input
            className={`${styles.textInput} font-subtitle-l`}
            type="text"
            placeholder="ТЕЛЕФОН"
            name="phone"
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={`${styles.inputField} font-subtitle-l`}>
          <select
            name="contact-select"
            id="contact-select"
            placeholder="БАЖАНИЙ СПОСІБ ЗВʼЯЗКУ"
            value={selectedOption}
            onChange={handleOptionChange}
            className={`${styles.selectInput} font-subtitle-l`}
          >
            <option
              className={`${styles.selectValue} font-subtitle-l`}
              value=""
              disabled
              hidden
            >
              БАЖАНИЙ СПОСІБ ЗВʼЯЗКУ
            </option>
            {options.map((option, idx) => (
              <option
                className={`${styles.selectValue} font-subtitle-l`}
                key={idx}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.inputContainer1}>
        <div className={`${styles.inputField} font-subtitle-l`}>
          {radioOptions.map((option) => (
            <div key={option.value} className={styles.checkField}>
              <input
                className={styles.radioInput}
                type="radio"
                id={option.value}
                name="optionGroup"
                value={option.value}
                checked={selectedRadioOption === option.value}
                onChange={handleOptionRadioChange}
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
          <a href="/policy"> Політикою конфіденційності</a>
        </div>
      </div>
    </div>
  );
};

export default ComponentForm;
