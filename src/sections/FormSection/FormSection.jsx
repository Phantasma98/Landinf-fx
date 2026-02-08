import styles from "./index.module.css";
import MainForm from "@/components/ui/MainForm";
import { submitApplication } from "@/services/applicationsApi";

export default function FormSection({ title, subtitle }) {
  const handleSubmit = async (formData) => {
    await submitApplication(formData);
  };

  return (
    <section className={styles.formMain} id="form">
      <div className={`${styles.contentWrapper} layout-1250`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          <p className={`col-right ${styles.subtitle} font-subtitle-m`}>
            {subtitle}
          </p>
        </div>

        <div className={styles.formWrapper}>
          <MainForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
