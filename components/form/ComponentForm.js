import { useState } from "react";
import toast from "react-hot-toast";

import styles from "./index.module.css";
import PrimaryBtn from "../elements/PrimaryBtn";

const ComponentForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadioOption, setSelectedRadioOption] = useState("");
  const radioOptions = [
    { value: "Zyvilny", label: "Я ЦИВІЛЬНИЙ" },
    { value: "Viyskovy", label: "Я ВІЙСЬКОВИЙ" },
    { value: "SZC", label: "Я В СЗЧ" },
  ];

  const options = [
    { value: "whatsapp", label: "Whatsapp" },
    { value: "viber", label: "Viber" },
  ];

  const content = {
    inputName: "ІМʼЯ",
    inputPhone: "ТЕЛЕФОН",
    inputConnect: "БАЖАНИЙ СПОСІБ ЗВʼЯЗКУ",
    PrimaryBtn: "відправити заявку",
    inputBottomText1: "Відправляючи заявку, ти погоджуєшся з нашою",
    inputBottomText2: "Політикою конфіденційності",
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionRadioChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        body: formData,
      });
      const reesponseData = await response.json();
      toast.success(`${reesponseData.name}, Ваша заявка збережена.`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <div className={`${styles.inputField} font-subtitle-l`}>
            <input
              className={`${styles.textInput} font-subtitle-l`}
              type="text"
              placeholder={content.inputName}
              name="name"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={`${styles.inputField} font-subtitle-l`}>
            <input
              className={`${styles.textInput} font-subtitle-l`}
              type="text"
              placeholder={content.inputPhone}
              name="phone"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={`${styles.inputField} font-subtitle-l`}>
            <select
              name="contact"
              id="contact"
              placeholder={content.inputConnect}
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
                {content.inputConnect}
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
                  name="type"
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

        <PrimaryBtn text={content.PrimaryBtn} type="submit" />

        <div className={styles.inputContainer2}>
          <div className={`${styles.inputBottomText} font-text-l-xs  `}>
            {content.inputBottomText1}
            <a href="/policy"> {content.inputBottomText2}</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComponentForm;
