import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import MainForm from "@/components/ui/MainForm";
import { useModal } from "@/contexts/ModalContext";
import { submitApplication } from "@/services/applicationsApi";

const modalLabels = {
  name: "ІМ'Я",
  surname: "ПРІЗВИЩЕ",
  phone: "НОМЕР ТЕЛЕФОНУ",
  contact: "БАЖАНИЙ СПОСІБ ЗВ'ЯЗКУ",
  submit: "ВІДПРАВИТИ ЗАЯВКУ",
  privacy: "Відправляючи заявку, ти погоджуєшся з нашою",
  privacyLink: "Політикою конфіденційності",
};

const modalContactOptions = ["WHATSAPP", "SIGNAL", "VIBER", "TELEGRAM", "ДЗВІНОК РЕКРУТЕРА"];

export default function Modal() {
  const { isOpen, closeModal } = useModal();
  const handleSubmit = async (formData) => {
    await submitApplication(formData);
    closeModal();
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent('modal-state', { detail: { open: true } }));

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new CustomEvent('modal-state', { detail: { open: false } }));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.modalOverlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className={styles.modalContent}>
        <button type="button" className={styles.modalClose} onClick={closeModal} aria-label="Закрити">
          ×
        </button>

        <h2 className={`font-title-l title-l-s section-title ${styles.modalTitle}`}>ЗАЯВКА У ФЕНІКС</h2>

        <MainForm
          className={styles.modalForm}
          labels={modalLabels}
          contactOptions={modalContactOptions}
          onSubmit={handleSubmit}
          onPrivacyClick={closeModal}
        />
      </div>
    </div>,
    document.body
  );
}
