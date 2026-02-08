import { useLanguage } from "@/contexts/LanguageContext";

import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { buildDonationsPageConfig } from "@/pages/config/donations.config";

export default function DonationsPage() {
  const { language } = useLanguage();
  const { startTheme, sections } = buildDonationsPageConfig(language);

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
