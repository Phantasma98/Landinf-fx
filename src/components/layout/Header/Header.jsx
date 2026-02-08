import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import { LogoPhoenixTop } from "@/assets";
import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";

const navItems = [
  { text: "Про Фенікс", href: "/about" },
  { text: "Вакансії", href: "/vacancies" },
  { text: "Контракт 18-24", href: "/contract" },
  { text: "Контакти", href: "/contacts" },
];

export default function Header({ isVisible = true, isScrolled = false, forceSolid = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { openModal } = useModal();
  const currentLang = (language || "ua").toUpperCase();
  const nextLang = language === "en" ? "ua" : "en";
  const nextLangLabel = nextLang.toUpperCase();

  const handleLanguageSelect = (langCode) => {
    setLanguage(langCode);
  };

  return (
    <header
      className={`${styles.header} ${!isVisible ? styles.headerHidden : ''} ${
        (isScrolled || forceSolid) ? styles.headerSolid : ''
      }`}
    >
      <div className={styles.container}>
        <div className={styles.frameParent}>
          <Link to="/" className={styles.logoLink}>
            <img
              className={styles.layer1Icon}
              src={LogoPhoenixTop}
              width={237}
              height={55}
              alt="Фенікс"
            />
          </Link>

          <nav className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
            {navItems.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <Link
                  to={item.href}
                  className={`${styles.link2} font-nav`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.langSwitcher}>
              <button
                type="button"
                className={`${styles.langBtn} font-nav`}
                aria-label="Обрати мову"
              >
                <span>{currentLang}</span>
                <svg
                  className={styles.langArrow}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.74999 4.94704e-07L6.74999 9.13125L10.95 4.93126L12 6L6.00001 12L-4.29138e-07 6L1.05 4.93125L5.24999 9.13125L5.24999 3.6357e-07L6.74999 4.94704e-07Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className={styles.langMenu}>
                <button
                  type="button"
                  className={`${styles.langItem} font-nav`}
                  onClick={() => handleLanguageSelect(nextLang)}
                >
                  {nextLangLabel}
                </button>
              </div>
            </div>

            <div className={styles.joinBtn}>
              <SecondaryBtn text="приєднатися" size="m" onClick={openModal} />
            </div>
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
