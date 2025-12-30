"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Commander from "@/components/commander/Commander";
import Values from "@/components/values/Values";
import Job from "@/components/job/Job";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeJobCategory, setActiveJobCategory] = useState("БПЛА");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Image assets from Figma node 14:36

  const donationImage = "/images/Mono_zbir.svg";
  const faqExpandIcon =
    "http://localhost:3845/assets/d554d532d8a39a03297afc05ca928d38946b5f01.svg";
  const faqCollapseIcon =
    "http://localhost:3845/assets/c9783d6ac6304100021bcccc1b881d25e985a662.svg";

  const faqs = [
    'З ЯКОГО ВІКУ БЕРУТЬ У "ФЕНІКС"?',
    "СКІЛЬКИ ТРИВАЄ КУРС БАЗОВОЇ ПІДГОТОВКИ?",
    "КОНТРАКТ ЧИ МОБІЛІЗАЦІЯ?",
    "МОЖНА ПЕРЕВЕСТИСЯ З ІНШОГО ПІДРОЗДІЛУ?",
    "ЯКІ ДОКУМЕНТИ ПОТРІБНІ ДЛЯ ЗАРАХУВАННЯ?",
    "ЧИ Є КОТРАКТ 18-24?",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header
        className={`${styles.header} ${
          !isHeaderVisible ? styles.headerHidden : ""
        }`}
      >
        <Header />
      </header>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Commander Section */}
      <Commander />

      {/* Values Section */}
      <Values />

      {/* Jobs Section */}
      <Job />

      {/* Recruitment Path */}
      <section className={styles.recruitmentSection}>
        <h2 className={styles.sectionTitle}>шлях РЕКРУТА</h2>
        <div className={styles.pathSteps}>
          {[
            { num: "01", title: "ЗАПОВНЕННЯ АНКЕТИ" },
            { num: "02", title: "СПІВБЕСІДА З РЕКРУТЕРАМИ" },
            { num: "03", title: "ЗАРАХУВАННЯ ДО ПІДРОЗДІЛУ" },
            { num: "04", title: "БАЗОВА ВІЙСЬКОВА ПІДГОТОВКА" },
            { num: "05", title: "ФАХОВА ПІДГОТОВКА" },
            { num: "06", title: "ВИКОНАННЯ ЗАВДАНЬ" },
          ].map((step) => (
            <div key={step.num} className={styles.pathStep}>
              <h3>{step.num}</h3>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
        <p className={styles.recruitQuote}>
          &ldquo;ми перетворюємо службу на високотехнологічну роботу, де
          цивільний інтелект та навички конвертуються в загальний
          результат.&rdquo;
        </p>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportHeader}>
          <h2 className={styles.sectionTitle}>ПІДТРИМАТИ</h2>
          <div className={styles.supportInfo}>
            <p>Збір на дрони - перехоплювачі.</p>
            <p>Ціль: 1 500 000 грн</p>
            <p>Зачистимо українське небо від ворожої присутності!</p>
          </div>
        </div>
        <div className={styles.supportContent}>
          {donationImage && (
            <div className={styles.donationImage}>
              <Image
                src={donationImage}
                alt="Donation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <div className={styles.paymentMethods}>
            <div className={styles.paymentButtons}>
              <button className={styles.primaryBtn}>MONOBANK</button>
              <button className={styles.secondaryBtn}>КАРТКА</button>
              <button className={styles.secondaryBtn}>PAYPAL</button>
              <button className={styles.secondaryBtn}>РЕКВІЗИТИ</button>
            </div>
            <div className={styles.bankInfo}>
              <p>ПЕРЕЙТИ НА БАНКУ</p>
              <p>https://send.monobank.ua/jar/2ZnCUmV6bZ</p>
            </div>
            <button className={styles.secondaryBtn}>
              переглянути закриті збори
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <p className={styles.faqSubtitle}>
            Якщо виникають додаткові запитання - залишай заявку і наш рекрутер з
            тобою звʼяжеться.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                {faq}
              </button>
              {expandedFaq === idx && (
                <div className={styles.faqAnswer}>
                  <p>
                    Так. Контракт 18-24 доступний для підписання у
                    &quot;Феніксі&quot;. Всі виплати, пільги і бонуси, які
                    передбачають умови контракту 18-24, поширюються на молодих
                    добровольців, які бажатимуть підписати контракт і розпочати
                    365 днів служби у професійному підрозділі.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <p className={styles.footerOrganization}>
              ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ
            </p>
            <p className={styles.footerOrganization}>
              державної прикордонної служби України
            </p>
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
                  <a href="#contact">Підтримати Фенікс</a>
                </li>
                <li>
                  <a href="#contact">Контакти</a>
                </li>
              </ul>
            </div>

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

        <div className={styles.footerBottom}>
          <p>© ФЕНІКС 2026. ВСІ ПРАВА ЗАХИЩЕНІ</p>
          <div className={styles.footerLinks}>
            <a href="#privacy">Політика конфіденційності</a>
            <a href="#cookies">Використання cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
