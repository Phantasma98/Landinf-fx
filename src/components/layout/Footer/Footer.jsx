import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useLanguage } from "@/contexts/LanguageContext";
import SocialLinks from "@/components/ui/SocialLinks";
import {
  IconPhoenixText,
  InstaIcon,
  YoutubeIcon,
  FacebookIcon,
  TiktokIcon,
} from "@/assets";
import TelegramIconFooter from "@/assets/icons/social/TelegramIconFooter.svg";

const Footer = () => {
  const { language } = useLanguage();

  const navLinksUa = [
    { text: "Головна", href: "/" },
    { text: "Про Фенікс", href: "/about" },
    { text: "Вакансії", href: "/vacancies" },
    { text: "Контракт 18-24", href: "/contract" },
    { text: "Підтримати Фенікс", href: "/donations" },
    { text: "Контакти", href: "/contacts" },
  ];

  const navLinksEn = [
    { text: "Home", href: "/" },
    { text: "About Feniks", href: "/about" },
    { text: "Vacancies", href: "/vacancies" },
    { text: "Contract 18-24", href: "/contract" },
    { text: "Support Feniks", href: "/donations" },
    { text: "Contacts", href: "/contacts" },
  ];

  const socialItems = [
    { icon: InstaIcon, href: "https://instagram.com/phoenix_dpsu", alt: "Instagram" },
    { icon: TelegramIconFooter, href: "https://t.me/phoenix_dpsu", alt: "Telegram" },
    { icon: YoutubeIcon, href: "https://youtube.com", alt: "YouTube" },
    { icon: FacebookIcon, href: "https://facebook.com/phoenix.dpsu", alt: "Facebook" },
    { icon: TiktokIcon, href: "https://tiktok.com/@phoenix_dpsu", alt: "TikTok" },
  ];

  const navLinks = language === "ua" ? navLinksUa : navLinksEn;

  return (
    <section id="contact" className={`${styles.footerMain} full-bleed`}>
      <footer className={`${styles.footer} layout-1250`}>
        <div className={styles.footerLayout}>
          <div className={styles.brandColumn}>
            <div className={styles.brandTop}>
              <p className={`${styles.footerOrganization} font-text-l-xs`}>
                {language === "ua"
                  ? <>ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ <br /> ДЕРЖАВНОЇ СЛУЖБИ УКРАЇНИ</>
                  : <>MAIN DEPARTMENT OF UNMANNED AERIAL SYSTEMS <br /> OF THE STATE SERVICE OF UKRAINE</>
                }
              </p>
              <div className={styles.footerLogo}>
                <img
                  src={IconPhoenixText}
                  alt="Фенікс"
                  width={386}
                  height={87}
                />
              </div>
            </div>

            <div className={styles.brandBottom}>
              <div className={`${styles.footerLinks} font-link-l`}>
                <Link to="/policy">{language === "ua" ? "Політика конфіденційності" : "privacy policy"}</Link>
                <Link to="/cookies">{language === "ua" ? "Використання cookies" : "cookie policy"}</Link>
              </div>
              <p className={`${styles.copyright} font-text-l-xs`}>
                {language === "ua" ? "© ФЕНІКС 2026. ВСІ ПРАВА ЗАХИЩЕНІ" : "© FENIKS 2026. ALL RIGHTS RESERVED"}
              </p>
            </div>
          </div>

          <div className={styles.navColumn}>
            <h4 className={`${styles.sectionTitle} font-headline-l headline-l-s`}>
              {language === "ua" ? "НАВІГАЦІЯ" : "NAVIGATION"}
            </h4>
            <ul className={`${styles.navList} font-text-l-s`}>
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h4 className={`${styles.sectionTitle} font-headline-l headline-l-s`}>
                {language === "ua" ? "РЕКРУТИНГ" : "RECRUITMENT"}
              </h4>
              <div className={`${styles.infoLines} font-text-l-s`}>
                <a href="tel:+380958888011" className={styles.contactLink}>
                  +38 (095) 8888 011
                </a>
                <a href="tel:+380978888011" className={styles.contactLink}>
                  +38 (097) 8888 011
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={`${styles.sectionTitle} font-headline-l headline-l-s`}>
                {language === "ua" ? "ДЛЯ МЕДІА ТА СПІВПРАЦІ" : "MEDIA AND COOPERATION"}
              </h4>
              <div className={`${styles.infoLines} font-text-l-s`}>
                <p>
                  {language === "ua" ? "Медіа" : "Media"}: <a href="mailto:Медіа: pr@usfenix.army" className={styles.contactLink}>pr@usfenix.army</a>
                </p>
                <p>
                  {language === "ua" ? "Співпраця" : "Cooperation"}: <a href="mailto:Співпраця: info@usfenix.army" className={styles.contactLink}>info@usfenix.army</a>
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h4 className={`${styles.sectionTitle} font-headline-l headline-l-s`}>
                {language === "ua" ? "НАШІ СОЦМЕРЕЖІ" : "OUR SOCIALS"}
              </h4>
              <SocialLinks socials={socialItems} className={styles.socialLinks} iconSize={44} gap={15} />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
