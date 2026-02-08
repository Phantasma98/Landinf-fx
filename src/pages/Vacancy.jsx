import styles from "./Vacancy.module.css";
import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { vacancyPageConfig } from "@/pages/config/vacancy.config";

export default function VacancyPage() {
  const { startTheme, sections, footerDark } = vacancyPageConfig;

  return (
    <PageLayout startTheme={startTheme} className={styles.container} footerDark={footerDark}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
