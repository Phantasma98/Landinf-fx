import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { homePageConfig } from "@/pages/config/home.config";

export default function Home() {
  const { startTheme, sections } = homePageConfig;

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
