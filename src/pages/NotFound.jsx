import Header from "@/components/layout/Header/Header";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SocialLinks from "@/components/ui/SocialLinks";
import { ContractHeroImage } from "@/assets";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./NotFound.module.css";

const CONTENT = {
  ua: {
    meta: "ПОМИЛКА 404",
    title: (
      <>
        СТОРІНКУ НЕ
        <br />
        ЗНАЙДЕНО
      </>
    ),
    cta: "ПЕРЕЙТИ НА ГОЛОВНУ СТОРІНКУ",
  },
  en: {
    meta: "ERROR 404",
    title: "PAGE NOT FOUND",
    cta: "BACK TO MAIN PAGE",
  },
};

export default function NotFoundPage() {
  const { language } = useLanguage();
  const content = language === "en" ? CONTENT.en : CONTENT.ua;

  return (
    <div className={`page-container ${styles.page}`}>
      <Header isVisible forceSolid />

      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${ContractHeroImage})` }}
        role="img"
        aria-label="404 background"
      >
        <div className={`${styles.contentWrap} layout-1250`}>
          <div className={styles.content}>
            <p className={`${styles.meta} font-subtitle-l`}>{content.meta}</p>
            <h1 className={`${styles.title} font-title-l title-l-m`}>{content.title}</h1>
            <PrimaryBtn text={content.cta} href="/" className={styles.backBtn} />
          </div>

          <SocialLinks className={styles.socials} iconSize={27} gap={25} />
        </div>
      </section>
    </div>
  );
}
