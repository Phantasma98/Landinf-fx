import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { vacanciesPageConfig } from "@/pages/config/vacancies.config";

export default function VacanciesPage() {
  const { startTheme, sections } = vacanciesPageConfig;

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
