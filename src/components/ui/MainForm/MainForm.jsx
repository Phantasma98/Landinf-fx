import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainForm.module.css";
import FormInput from "@/components/ui/FormInput";
import FormSelect from "@/components/ui/FormSelect";
import RadioGroup from "@/components/ui/RadioGroup";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

const defaultLabels = {
  name: "Ім'я",
  surname: "Прізвище",
  phone: "Номер телефону",
  contact: "БАЖАНИЙ СПОСІБ ЗВ'ЯЗКУ",
  submit: "Відправити заявку",
  privacy: "Відправляючи заявку, ти погоджуєшся з нашою",
  privacyLink: "Політикою конфіденційності",
};

const defaultStatusOptions = [
  { value: "civilian", label: "Я ЦИВІЛЬНИЙ" },
  { value: "military", label: "Я ВІЙСЬКОВИЙ" },
  { value: "szch", label: "Я В СЗЧ" },
];

const defaultContactOptions = [
  "WhatsApp",
  "Signal",
  "Viber",
  "Telegram",
  "Дзвінок рекрутера",
];

export default function MainForm({
  labels = {},
  statusOptions = defaultStatusOptions,
  contactOptions = defaultContactOptions,
  onSubmit,
  onPrivacyClick,
  privacyHref = "/policy",
  className = "",
}) {
  const mergedLabels = { ...defaultLabels, ...labels };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    contact: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    phone: "",
    contact: "",
    status: "",
  });
  const [submitState, setSubmitState] = useState("idle"); // idle | loading | success | error
  const [submitMessage, setSubmitMessage] = useState("");

  // Валідація тексту - тільки букви, пробіли, апостроф, дефіс (мін 2, макс 20)
  const validateTextField = (value, fieldName) => {
    if (!value.trim()) {
      return "Обов'язкове поле";
    }
    // Українські, латинські букви, пробіл, апостроф, дефіс
    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\-\s]+$/;
    if (!nameRegex.test(value)) {
      return "Тільки букви без цифр та символів";
    }
    if (value.trim().length < 2) {
      return "Мінімум 2 символи";
    }
    if (value.trim().length > 20) {
      return "Максимум 20 символів";
    }
    return "";
  };

  // Валідація телефону - має бути +380 і 9 цифр після
  const validatePhone = (phone) => {
    if (!phone || phone === "+380") {
      return "Обов'язкове поле";
    }
    // Видаляємо пробіли для перевірки
    const cleanPhone = phone.replace(/\s/g, "");
    // Має бути +380 і рівно 9 цифр
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return "Формат: +380XXXXXXXXX";
    }
    return "";
  };

  // Фільтр для тексту - видаляє все крім букв, обмежує 20 символів
  const filterTextField = (value) => {
    const filtered = value.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ'\-\s]/g, "");
    return filtered.slice(0, 20);
  };

  // Фільтр для телефону - тільки цифри після +380
  const filterPhone = (value) => {
    // Якщо намагаються видалити +380, повертаємо +380
    if (!value.startsWith("+380")) {
      return "+380";
    }
    // Залишаємо тільки цифри після +380
    const afterPrefix = value.slice(4).replace(/\D/g, "");
    // Обмежуємо до 9 цифр
    return "+380" + afterPrefix.slice(0, 9);
  };

  const handleNameChange = (e) => {
    const filtered = filterTextField(e.target.value);
    setFormData({ ...formData, name: filtered });
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSurnameChange = (e) => {
    const filtered = filterTextField(e.target.value);
    setFormData({ ...formData, surname: filtered });
    if (errors.surname) {
      setErrors((prev) => ({ ...prev, surname: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const filtered = filterPhone(e.target.value);
    setFormData({ ...formData, phone: filtered });
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneFocus = () => {
    // Підставляємо +380 при фокусі, якщо поле пусте
    if (!formData.phone) {
      setFormData({ ...formData, phone: "+380" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валідуємо всі поля при сабміті
    const newErrors = {
      name: validateTextField(formData.name, "name"),
      surname: validateTextField(formData.surname, "surname"),
      phone: validatePhone(formData.phone),
      contact: !formData.contact ? "Обов'язкове поле" : "",
      status: !formData.status ? "Обов'язкове поле" : "",
    };

    setErrors(newErrors);

    // Перевіряємо чи є помилки
    const hasErrors = Object.values(newErrors).some(Boolean);

    if (!hasErrors) {
      setSubmitState("loading");
      setSubmitMessage("");
      try {
        await Promise.resolve(onSubmit?.(formData));
        setSubmitState("success");
        setSubmitMessage("Заявку успішно відправлено");
        setFormData({ name: "", surname: "", phone: "", contact: "", status: "" });
        setErrors({ name: "", surname: "", phone: "", contact: "", status: "" });
      } catch (error) {
        setSubmitState("error");
        setSubmitMessage(error?.message || "Помилка відправки. Спробуй ще раз");
      }
      return;
    }

    setSubmitState("idle");
    setSubmitMessage("");
  };

  const submitLabel =
    submitState === "loading"
      ? "ВІДПРАВЛЯЄМО..."
      : submitState === "success"
        ? "УСПІШНО ВІДПРАВЛЕНО"
        : mergedLabels.submit;

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
      <FormInput
        type="text"
        placeholder={mergedLabels.name}
        value={formData.name}
        onChange={handleNameChange}
        error={!!errors.name}
        errorMessage={errors.name}
      />

      <FormInput
        type="text"
        placeholder={mergedLabels.surname}
        value={formData.surname}
        onChange={handleSurnameChange}
        error={!!errors.surname}
        errorMessage={errors.surname}
      />

      <FormInput
        type="tel"
        placeholder={mergedLabels.phone}
        value={formData.phone}
        onChange={handlePhoneChange}
        onFocus={handlePhoneFocus}
        error={!!errors.phone}
        errorMessage={errors.phone}
      />

      <FormSelect
        placeholder={mergedLabels.contact}
        value={formData.contact}
        onChange={(e) => {
          setFormData({ ...formData, contact: e.target.value });
          if (errors.contact) {
            setErrors((prev) => ({ ...prev, contact: "" }));
          }
        }}
        options={contactOptions}
        error={!!errors.contact}
        errorMessage={errors.contact}
      />

      <RadioGroup
        name="status"
        options={statusOptions}
        value={formData.status}
        onChange={(value) => {
          setFormData({ ...formData, status: value });
          if (errors.status) {
            setErrors((prev) => ({ ...prev, status: "" }));
          }
        }}
        error={!!errors.status}
        errorMessage={errors.status}
      />

      <div className={styles.submitWrapper}>
        <PrimaryBtn
          text={submitLabel}
          type="submit"
          className={`${styles.submitBtn} ${
            submitState === "success"
              ? styles.submitBtnSuccess
              : submitState === "error"
                ? styles.submitBtnError
                : ""
          }`}
          disabled={submitState === "loading"}
        />
        {submitMessage ? (
          <p
            className={`${styles.submitMessage} ${
              submitState === "success" ? styles.successMessage : styles.errorMessage
            }`}
          >
            {submitMessage}
          </p>
        ) : null}
        <p className={styles.privacy}>
          {mergedLabels.privacy}{" "}
          <Link to={privacyHref} className={styles.privacyLink} onClick={onPrivacyClick}>
            {mergedLabels.privacyLink}
          </Link>
        </p>
      </div>
    </form>
  );
}
