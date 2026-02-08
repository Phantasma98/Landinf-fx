import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { aboutPageConfig } from "@/pages/config/about.config";

export default function AboutPage() {
  const { startTheme, sections } = aboutPageConfig;

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
