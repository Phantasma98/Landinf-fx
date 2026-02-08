import { useLanguage } from "@/contexts/LanguageContext";

import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { buildFundraisingPageConfig } from "@/pages/config/fundraising.config";

export default function FundraisingPage() {
  const { language } = useLanguage();
  const { startTheme, sections } = buildFundraisingPageConfig(language);

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
