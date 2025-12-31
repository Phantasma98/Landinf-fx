import Image from "next/image";

import styles from "./index.module.css";

const Footer = () => {
  const phoenixLogo = "/images/Icon_Phoenix_text.svg";
  return (
    <section id="contact" className={styles.footerMain}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <p className={styles.footerOrganization}>
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

          <div className={styles.footerSections}>
            <div className={styles.footerColumn}>
              <h4>НАВІГАЦІЯ</h4>
              <ul>
                <li>
                  <a href="#home">Головна</a>
                </li>
                <li>
                  <a href="#about">Про Фенікс</a>
                </li>
                <li>
                  <a href="#jobs">Вакансії</a>
                </li>
                <li>
                  <a href="#contract">Контракт 18-24</a>
                </li>
                <li>
                  <a href="#support">Підтримати Фенікс</a>
                </li>
                <li>
                  <a href="#contact">Контакти</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumnContainer}>
              <div className={styles.footerColumn}>
                <h4>РЕКРУТИНГ</h4>
                <p>+38 (095) 8888 011</p>
                <p>+38 (097) 8888 011</p>
              </div>

              <div className={styles.footerColumn}>
                <h4>ДЛЯ МЕДІА ТА СПІВПРАЦІ</h4>
                <p>Медіа: media@feniks.army</p>
                <p>Співпраця: info@feniks.army</p>
              </div>

              <div className={styles.footerColumn}>
                <h4>НАШІ СОЦМЕРЕЖІ</h4>
                <div className={styles.socialLinks}>
                  <a href="#facebook">FB</a>
                  <a href="#twitter">TW</a>
                  <a href="#instagram">IG</a>
                  <a href="#youtube">YT</a>
                  <a href="#tiktok">TK</a>
                  <a href="#twitter">X</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© ФЕНІКС 2026. ВСІ ПРАВА ЗАХИЩЕНІ</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Політика конфіденційності</a>
            <a href="#cookies">Використання cookies</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
