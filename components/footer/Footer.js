import Image from "next/image";

import styles from "./index.module.css";

const Footer = ({ backgroundDark }) => {
  const phoenixLogo = "/images/Icon_Phoenix_text.svg";

  const backgroundFooter = backgroundDark
    ? styles.footerMainDark
    : styles.footerMain;
  const navLinks1 = [
    { text: "Головна", href: "/#home" },
    { text: "Про Фенікс", href: "/about" },
    { text: "Вакансії", href: "/vacancies" },
  ];

  const navLinks2 = [
    {
      text: "Контракт 18-24",
      href: "/contract",
    },
    {
      text: "Підтримати Фенікс",
      href: "/#support",
    },
    { text: "Контакти", href: "/contacts" },
  ];
  const socialLinks = [
    { icon: "/images/InstaIcon.svg", text: "IG", href: "#instagram" },
    { icon: "/images/TelegramIcon.svg", text: "TG", href: "#telegram" },
    { icon: "/images/FacebookIcon.svg", text: "FB", href: "#facebook" },
    { icon: "/images/YoutubeIcon.svg", text: "YU", href: "#youtube" },
    { icon: "/images/TiktokIcon.svg", text: "TK", href: "#tiktok" },
    { icon: "/images/ExIcon.svg", text: "X", href: "#twitter" },
  ];
  const content = {
    footerOrganization1: "ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ",
    footerOrganization2: "державної прикордонної служби України",
    footerLinkConf: "Політика конфіденційності",
    footerLinkCookies: "Використання cookies",
    footerC: "© ФЕНІКС 2026. ВСІ ПРАВА ЗАХИЩЕНІ",
    footerTitle1: "НАВІГАЦІЯ",
    footerTitle2: "РЕКРУТИНГ",
    footerTitle3: "ДЛЯ МЕДІА ТА СПІВПРАЦІ",
    footerTitle3item1: "Медіа",
    footerTitle3item2: "Співпраця",
    footerTitle4: "НАШІ СОЦМЕРЕЖІ",
  };
  return (
    <section id="contact" className={backgroundFooter}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <p className={`${styles.footerOrganization} font-text-l-xs`}>
              {content.footerOrganization1} <br /> {content.footerOrganization2}
            </p>

            <div className={styles.footerLogo}>
              <Image
                src={phoenixLogo}
                alt="logo"
                width={384}
                height={87}
                // style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={`${styles.footerBottom} font-text-l-xs`}>
            <div className={styles.footerLinks}>
              <a href="/policy">{content.footerLinkConf}</a>
              <a href="/cookies">{content.footerLinkCookies}</a>
            </div>
            <div>
              <p>{content.footerC}</p>
            </div>
          </div>
          <div className={styles.footerSections}>
            <div className={styles.footerColumn}>
              <h4 className="font-headline-l headline-l-s  ">
                {content.footerTitle1}
              </h4>
              <div className={`${styles.footerColumnList} font-text-l-s`}>
                <ul>
                  {navLinks1.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {navLinks2.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.footerColumnContainer}>
              <div className={styles.footerColumn}>
                <h4 className="font-headline-l headline-l-s  ">
                  {content.footerTitle2}
                </h4>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  +38 (095) 8888 011
                </p>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  +38 (097) 8888 011
                </p>
              </div>

              <div className={styles.footerColumn}>
                <h4 className="font-headline-l headline-l-s  ">
                  {content.footerTitle3}
                </h4>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  {content.footerTitle3item1}: media@feniks.army
                </p>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  {content.footerTitle3item2}: info@feniks.army
                </p>
              </div>

              <div className={styles.footerColumn}>
                <h4 className="font-headline-l headline-l-s  ">
                  {content.footerTitle4}
                </h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((link, idx) => (
                    <a key={idx} href={link.href}>
                      <Image
                        className={styles.vectorIcon1}
                        src={link.icon}
                        width={26.7}
                        height={26.5}
                        sizes="100vw"
                        alt="icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
