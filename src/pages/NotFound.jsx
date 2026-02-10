import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/sections/HeroSection/HeroSection";
import { ContractHeroImage } from "@/assets";
import { useLanguage } from "@/contexts/LanguageContext";
import { mainSocials } from "@/data/main";

const notFoundContent = {
  ua: {
    backgroundImage: ContractHeroImage,
    backgroundAlt: "404 background",
    meta: "ПОМИЛКА 404",
    title: (
      <>
        СТОРІНКУ НЕ
        <br />
        ЗНАЙДЕНО
      </>
    ),
    primaryAction: {
      text: "ПЕРЕЙТИ НА ГОЛОВНУ СТОРІНКУ",
      href: "/",
    },
  },
  en: {
    backgroundImage: ContractHeroImage,
    backgroundAlt: "404 background",
    meta: "ERROR 404",
    title: "PAGE NOT FOUND",
    primaryAction: {
      text: "BACK TO MAIN PAGE",
      href: "/",
    },
  },
};

export default function NotFoundPage() {
  const { language } = useLanguage();
  const content = notFoundContent[language] || notFoundContent.ua;

  return (
    <PageLayout startTheme="dark">
      <HeroSection {...content} socials={mainSocials} />
    </PageLayout>
  );
}
