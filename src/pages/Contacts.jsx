import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { contactsPageConfig } from "@/pages/config/contacts.config";

export default function ContactsPage() {
  const { startTheme, sections } = contactsPageConfig;

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
