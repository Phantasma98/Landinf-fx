import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { PageSections } from "@/components/layout";
import { getHomePageConfig } from "@/pages/config/home.config";
import { useLanguage } from "@/contexts/LanguageContext";
import { preloadImagesFromData } from "@/utils/preloadImages";

export default function Home() {
  const { language } = useLanguage();
  const { startTheme, sections } = getHomePageConfig(language);

  // Preload всіх зображень при монтуванні компонента
  useEffect(() => {
    sections.forEach(section => {
      if (section.props) {
        preloadImagesFromData(section.props);
      }
    });
  }, [sections]);

  return (
    <PageLayout startTheme={startTheme}>
      <PageSections sections={sections} />
    </PageLayout>
  );
}
