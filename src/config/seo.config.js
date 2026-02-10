import {
  MainHeroImage,
  AboutHeroImage,
  ContractHeroImage,
  ContactsHeroImage,
  VacanciesHero,
  HeaderSpotterImage,
  HeaderTrainingImage,
} from "@/assets";

/**
 * Центральна SEO конфігурація
 * Базується на seo.md
 */
export const SEO_CONFIG = {
  // Головна сторінка (UA)
  "/": {
    title: "Фенікс — підрозділ БПЛА ДПСУ",
    description: "Офіційний сайт підрозділу «Фенікс» Державної прикордонної служби України. Новини, діяльність головного відділу безпілотних систем та захист кордону.",
    h1: "Головний відділ безпілотних авіаційних систем ДПСУ",
    image: MainHeroImage,
    robots: "",
  },

  // Головна сторінка (EN)
  "/en": {
    title: "Fenix — UAS Department of SBGS Ukraine",
    description: "Official website of the \"Fenix\" unit (State Border Guard Service of Ukraine). Unmanned aerial systems, recruitment, donations, and news.",
    h1: "Fenix - Main Department of Unmanned Aerial Systems",
    image: MainHeroImage,
    robots: "",
  },

  // Про нас
  "/about-us": {
    title: "Про Фенікс",
    description: "Дізнайтеся більше про підрозділ «Фенікс». Історія створення, наша місія, структура та екосистема ефективних безпілотних авіаційних систем.",
    h1: "Про підрозділ «Фенікс»",
    image: AboutHeroImage,
    robots: "",
  },

  // Контракт 18-24
  "/contract-18-24-drones": {
    title: "Контракт 18-24: Дрони",
    description: "Служба за контрактом для віку 18-24 роки. Стань оператором БПЛА у підрозділі «Фенікс» ДПСУ. Навчання, сучасна техніка та кар'єра. Подавай заявку!",
    h1: "Контракт 18-24: Оператор БПЛА",
    image: ContractHeroImage,
    robots: "",
  },

  // Вакансії
  "/vacancies": {
    title: "Вакансії Фенікс ДПСУ",
    description: "Актуальні вакансії у підрозділі «Фенікс». Шукаємо пілотів, інженерів та фахівців. Розкрий свій потенціал у команді професіоналів.",
    h1: "Вакансії підрозділу «Фенікс»",
    image: VacanciesHero,
    robots: "",
  },

  // Контакти
  "/contacts": {
    title: "Контакти Фенікс",
    description: "Як зв'язатися з підрозділом «Фенікс» ДПСУ? Телефони, електронна пошта, адреса штабу та офіційні сторінки в соціальних мережах.",
    h1: "Контакти",
    image: ContactsHeroImage,
    robots: "",
  },

  // Збори/Донати
  "/donations": {
    title: "Підтримати Фенікс",
    description: "Відкриті збори на дрони для підрозділу «Фенікс». Ваша підтримка наближає перемогу. Офіційні реквізити та способи донату (Monobank, PayPal).",
    h1: "Збори та підтримка підрозділу",
    image: HeaderSpotterImage,
    robots: "",
  },

  // Політика конфіденційності
  "/policy": {
    title: "Політика конфіденційності",
    description: "Офіційна політика конфіденційності сайту підрозділу «Фенікс». Правила обробки персональних даних користувачів.",
    h1: "Політика конфіденційності",
    image: HeaderTrainingImage,
    robots: "",
  },

  // Cookies
  "/cookies": {
    title: "Використання файлів Cookies",
    description: "Інформація про використання файлів cookies на веб-сайті підрозділу «Фенікс». Налаштування та управління даними.",
    h1: "Політика використання Cookies",
    image: HeaderTrainingImage,
    robots: "",
  },

  // 404
  "/error-404": {
    title: "404 — Сторінку не знайдено",
    description: "На жаль, запитувана сторінка не існує або була переміщена. Поверніться на головну сторінку сайту.",
    h1: "Сторінку не знайдено",
    image: "",
    robots: "",
  },
};

// Fallback для невідомих сторінок
export const SEO_FALLBACK = {
  title: "Фенікс — підрозділ БПЛА ДПСУ",
  description: "Офіційний сайт підрозділу «Фенікс» Державної прикордонної служби України.",
  h1: "",
  image: MainHeroImage,
  robots: "",
};

// Глобальні OG налаштування
export const SEO_GLOBAL = {
  siteName: "Фенікс",
  locale: "uk_UA",
  type: "website",
  twitterCard: "summary_large_image",
};
