"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeJobCategory, setActiveJobCategory] = useState("БПЛА");

  // Image assets from Figma node 7:1154
  const phoenixLogo = "/images/Logo_phoenix.svg";
  const heroImage = "/images/Dron_main.svg";
  const aboutImages = [
    "http://localhost:3845/assets/6b2af5565f17fd4a6f7082b7dc94fa601fc17956.png",
    "http://localhost:3845/assets/45c8bb0651b342dba5611df718ed4be487521bc3.png",
    "http://localhost:3845/assets/cd9b1f3f623b26962393ecade12e53739662814e.png",
  ];
  const commanderImage =
    "http://localhost:3845/assets/bc0fe0338b0b7c7baf55c455d1ff2384f915de6b.png";
  const valuesImage =
    "http://localhost:3845/assets/8d0d3214066e73e89978c28c16c855cbb84a0f6b.png";
  const arrowIcon =
    "http://localhost:3845/assets/80efe2203ff376ea5c001e579a777a83b64f9baa.svg";
  const donationImage =
    "http://localhost:3845/assets/88811032689b124daf337e09bde5493354621ae9.png";
  const faqExpandIcon =
    "http://localhost:3845/assets/d554d532d8a39a03297afc05ca928d38946b5f01.svg";
  const faqCollapseIcon =
    "http://localhost:3845/assets/c9783d6ac6304100021bcccc1b881d25e985a662.svg";

  const jobCategories = [
    "БПЛА",
    "НРК",
    "РЕБ / РЕР",
    "IT / ЗВʼЯЗОК",
    "ЛОГІСТИКА",
    "ІНЖЕНЕРІЯ / РЕМОНТ",
    "МЕДИЦИНА",
    "ШТАБ",
    "МЕДІА",
    "ІНШЕ",
  ];

  const jobListings = Array(16).fill({
    title: "Оператор БПЛА розвідувального типу",
    tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
  });

  const faqs = [
    'З ЯКОГО ВІКУ БЕРУТЬ У "ФЕНІКС"?',
    "СКІЛЬКИ ТРИВАЄ КУРС БАЗОВОЇ ПІДГОТОВКИ?",
    "КОНТРАКТ ЧИ МОБІЛІЗАЦІЯ?",
    "МОЖНА ПЕРЕВЕСТИСЯ З ІНШОГО ПІДРОЗДІЛУ?",
    "ЯКІ ДОКУМЕНТИ ПОТРІБНІ ДЛЯ ЗАРАХУВАННЯ?",
    "ЧИ Є КОТРАКТ 18-24?",
  ];

  const values = [
    {
      title: "Радикальна Чесність",
      description:
        "Ми не боїмось казати правду. Якщо існує проблема - про неї кажуть вголос миттєво. Ініціатива не карається, а заохочується. Брехня в команді наш червоний прапор.",
    },
    {
      title: "культ результату",
      description:
        "Якщо нам треба порушити застарілу інструкцію, щоб покращити результативність і оптимізувати процеси - ми це робимо.",
    },
    {
      title: "Анти-Застій",
      description:
        "Ми - як військовий стартап. Ми вчимося щодня. Якщо ти не розвиваєшся, команда шукає тобі заміну. Ми даємо драйв, ти даєш динаміку.",
    },
    {
      title: "Екосистема Важливості",
      description:
        "Пілот дрона - це вершина нашої екосистеми, але без ідеального забезпечення він просто не може літати. Ми цінуємо «механіків» так само як «гонщиків».",
    },
    {
      title: "Спеціалізація Піт-стоп",
      description:
        "У гонці механік не сідає за кермо, а пілот не крутить гайки. Ми гарантуємо: ти будеш займатися тим, у чому ти найефективніший.",
    },
    {
      title: "Принцип Телеметрії",
      description:
        "Ми керуємось даними, а не емоціями. Ми ведемо війну спираючись на стріми, дані розвідки та аналітику. Немає даних - немає наказу.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Image src={phoenixLogo} alt="Phoenix" width={40} height={55} />
            <h2>фенікс</h2>
          </div>
          <nav className={styles.nav}>
            <a href="#about">Про Фенікс</a>
            <a href="#jobs">Вакансії</a>
            <a href="#contract">Контракт 18-24</a>
            <a href="#contact">Контакти</a>
          </nav>
          <button className={styles.joinBtn}>Приєднатися</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroMeta}>
            ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ
          </p>
          <p className={styles.heroMeta}>
            державної прикордонної служби України «ФЕНІКС»
          </p>
          <h1 className={styles.heroTitle}>
            спалюємо <br /> межі можливого
          </h1>
          <div className={styles.heroActions}>
            <button className={styles.primaryBtn}>Приєднатися</button>
            <button className={styles.secondaryBtn}>Підтримати</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.sectionTitle}>про нас</h2>
          <div className={styles.aboutText}>
            <p className={styles.aboutDescription}>
              Фенікс - це найрезультативніший підрозділ ДПСУ.
            </p>
            <p className={styles.aboutDescription}>
              Ми створили власну екосистему безпілотних авіаційних систем, що
              забезпечує весь процес: від створення БК до нанесення нищівних
              ударів ворогу.
            </p>
          </div>
        </div>
        <div className={styles.carousel}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className={styles.carouselItem}>
              <Image
                src={img}
                alt={`About ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <p className={styles.statsQuote}>
          &ldquo;ми перетворюємо службу на високотехнологічну роботу, де
          цивільний інтелект та навички конвертуються в загальний
          результат.&rdquo;
        </p>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <h3>ТОП-2</h3>
            <p>В УГРУПОВАННІ СИЛ БЕЗПІЛОТНИХ СИСТЕМ</p>
          </div>
          <div className={styles.statItem}>
            <h3>126500</h3>
            <p>ВИЛЬОТІВ НА БОЙОВІ ЗАВДАННЯ</p>
          </div>
          <div className={styles.statItem}>
            <h3>26500</h3>
            <p>ПОШКОДЖЕНО ТА ЗНИЩЕНО ЦІЛЕЙ</p>
          </div>
          <div className={styles.statItem}>
            <h3>5130</h3>
            <p>ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА</p>
          </div>
        </div>
      </section>

      {/* Commander Section */}
      <section className={styles.commanderSection}>
        <div className={styles.commanderContent}>
          <div className={styles.commanderText}>
            <h2 className={styles.sectionTitle}>КОМАНДИР</h2>
            <div className={styles.commanderInfo}>
              <p className={styles.commanderTitle}>герой України</p>
              <p className={styles.commanderRank}>полковник</p>
              <p className={styles.commanderName}>Дмитро Олексюк</p>
              <div className={styles.commanderBio}>
                <p>
                  Лютий — липень 2022 року очолював підрозділ та виконував
                  завдання з оборони Донецької та Луганської областей.
                </p>
                <p>
                  У грудні 2022 року – сформував та очолив бойове з&apos;єднання
                  Луганського прикордонного загону ДПСУ.
                </p>
                <p>
                  У січні 2024 року очолив 2-гу комендатуру швидкого реагування
                  «Фенікс», яка продовжувала стримувати ворога на Бахмутському
                  напрямку.
                </p>
                <p>
                  Наразі полковник активно займається впровадженням нового
                  формату організації підрозділу полкового типу
                  &quot;Фенікс&quot;.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.commanderImage}>
            <Image
              src={commanderImage}
              alt="Commander Dmitro Oleksiuk"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.commanderQuote}>
          <p>
            &ldquo;перетворюємо службу на високотехнологічну роботу, де
            цивільний інтелект та навички конвертуються в загальний
            результат.&rdquo;
          </p>
          <button className={styles.primaryBtn}>приєднатися до команди</button>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.sectionTitle}>ЦІННості</h2>
          <p className={styles.valuesSubtitle}>
            Фенікс - сучасний підрозділ з культурою та динамікою команди
            Формули-1. Ключова цінність - збереження життя наших бійців.
          </p>
        </div>
        {valuesImage && (
          <div className={styles.valuesImage}>
            <Image
              src={valuesImage}
              alt="Values"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className={styles.valuesGrid}>
          {values.map((value, idx) => (
            <div key={idx} className={styles.valueItem}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className={styles.jobsSection}>
        <div className={styles.jobsHeader}>
          <h2 className={styles.sectionTitle}>Вакансії</h2>
          <p className={styles.jobsSubtitle}>
            Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний
            механізм. Шукаємо тих, хто готовий привести команду до перемоги
            своїм розумом та навичками.
          </p>
        </div>
        <div className={styles.jobCategories}>
          {jobCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${
                activeJobCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveJobCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.jobGrid}>
          {jobListings.map((job, idx) => (
            <div key={idx} className={styles.jobCard}>
              <h4>{job.title}</h4>
              <div className={styles.jobTags}>
                {job.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.jobsAction}>
          <p className={styles.jobsQuote}>
            війна - гонка технологій та інженерних рішень. Перемога тут - це не
            індивідуальне досягнення пілота, це результат безперебійної роботи
            всієї команди.
          </p>
          <button className={styles.primaryBtn}>стати частиною команди</button>
        </div>
      </section>

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
