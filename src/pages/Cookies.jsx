import { useLanguage } from "@/contexts/LanguageContext";

import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { buildCookiesPageConfig } from "@/pages/config/cookies.config";

export default function CookiesPage() {
  const { language } = useLanguage();
  const { startTheme, sections } = buildCookiesPageConfig(language);

  return (
    <PageLayout startTheme={startTheme} forceHeaderSolid>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
