import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { contractPageConfig } from "@/pages/config/contract.config";

export default function ContractPage() {
  const { startTheme, sections } = contractPageConfig;

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
