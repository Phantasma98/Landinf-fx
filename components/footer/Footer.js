import Image from "next/image";

import styles from "./index.module.css";

const Footer = () => {
  const phoenixLogo = "/images/Icon_Phoenix_text.svg";

  const navLinks1 = [
    { text: "Головна", href: "#home" },
    { text: "Про Фенікс", href: "#about" },
    { text: "Вакансії", href: "#jobs" },
  ];

  const navLinks2 = [
    { text: "Контракт 18-24", href: "#contract" },
    { text: "Підтримати Фенікс", href: "#support" },
    { text: "Контакти", href: "#contact" },
  ];
  const socialLinks = [
    { icon: "/images/InstaIcon.svg", text: "IG", href: "#instagram" },
    { icon: "/images/TelegramIcon.svg", text: "TG", href: "#telegram" },
    { icon: "/images/FacebookIcon.svg", text: "FB", href: "#facebook" },
    { icon: "/images/YoutubeIcon.svg", text: "YU", href: "#youtube" },
    { icon: "/images/TiktokIcon.svg", text: "TK", href: "#tiktok" },
    { icon: "/images/ExIcon.svg", text: "X", href: "#twitter" },
  ];
  return (
    <section id="contact" className={styles.footerMain}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <p className={`${styles.footerOrganization} font-text-l-xs`}>
              ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ <br /> державної
              прикордонної служби України
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
              <a href="#privacy">Політика конфіденційності</a>
              <a href="#cookies">Використання cookies</a>
            </div>
            <div>
              <p>© ФЕНІКС 2026. ВСІ ПРАВА ЗАХИЩЕНІ</p>
            </div>
          </div>
          <div className={styles.footerSections}>
            <div className={styles.footerColumn}>
              <h4 className="font-headline-l headline-l-s  ">НАВІГАЦІЯ</h4>
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
                <h4 className="font-headline-l headline-l-s  ">РЕКРУТИНГ</h4>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  +38 (095) 8888 011
                </p>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  +38 (097) 8888 011
                </p>
              </div>

              <div className={styles.footerColumn}>
                <h4 className="font-headline-l headline-l-s  ">
                  ДЛЯ МЕДІА ТА СПІВПРАЦІ
                </h4>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  Медіа: media@feniks.army
                </p>
                <p className={`${styles.footerColumnList} font-text-l-s`}>
                  Співпраця: info@feniks.army
                </p>
              </div>

              <div className={styles.footerColumn}>
                <h4 className="font-headline-l headline-l-s  ">
                  НАШІ СОЦМЕРЕЖІ
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
                        alt=""
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
