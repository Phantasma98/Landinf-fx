import { useLanguage } from "@/contexts/LanguageContext";

import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { buildPolicyPageConfig } from "@/pages/config/policy.config";

export default function PolicyPage() {
  const { language } = useLanguage();
  const { startTheme, sections } = buildPolicyPageConfig(language);

  return (
    <PageLayout startTheme={startTheme} forceHeaderSolid>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
