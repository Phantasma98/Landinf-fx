import { MonoZbir } from "@/assets";

export const socialsDefault = {
  telegram: "https://t.me/phoenix_dpsu",
  instagram: "https://instagram.com/phoenix_dpsu",
  facebook: "https://facebook.com/phoenix.dpsu",
  tiktok: "https://tiktok.com/@phoenix_dpsu",
};

export const faqDefault = {
  title: "FAQ",
  subtitle: "Якщо виникають додаткові запитання - залишай заявку і наш рекрутер з тобою звʼяжеться.",
  questions: [
    {
      question: 'З ЯКОГО ВІКУ БЕРУТЬ У "ФЕНІКС"?',
      answer:
        "З 18 років можна проходити службу у полку Фенікс за контрактом або з 25 років за мобілізацією.",
    },
    {
      question: "КОНТРАКТ ЧИ МОБІЛІЗАЦІЯ?",
      answer:
        "Основна різниця: служба по мобілізації триває до завершення воєнного стану, служба на контрактній основі триває до закінчення визначеного терміну контракту.",
    },
    {
      question: "ЧИ Є КОНТРАКТ 18-24?",
      answer:
        "Так. З усією детальною інформацією можна ознайомитись на сторінці Контракт 18-24.",
    },
    {
      question: "ЧИ ПОТРІБНО ЗВЕРТАТИСЬ В ТЦК?",
      answer:
        "Ні. Фенікс є одним із підрозділів Державної прикордонної служби України, тому зарахування відбувається через наш рекрутинговий відділ.",
    },
    {
      question: "СКІЛЬКИ ТРИВАЄ КУРС БАЗОВОЇ ПІДГОТОВКИ?",
      answer:
        "Курс базової військової підготовки триває до 55 днів.",
    },
    {
      question: "ЧИ МОЖНА ПЕРЕВЕСТИСЯ З ІНШОГО ПІДРОЗДІЛУ?",
      answer:
        "Так, але поки що виключно з інших підрозділів ДПСУ.",
    },
    {
      question: "ЧИ МОЖНА ДОЛУЧИТИСЬ В СТАТУСІ СЗЧ?",
      answer:
        "Так, ми готові обробляти запити від осіб зі статусом СЗЧ після проходження відповідної перевірки.",
    },
  ],
};

export const formDefault = {
  title: "Долучитись",
  subtitle:
    "Твій перший крок на шляху до Фенікса. Залишай заявку та будь на звʼязку. Наші рекрутери звʼяжуться з тобою.",
  fields: {
    name: "Ім'я",
    phone: "Телефон",
    status: "Статус",
    contact: "Зручний спосіб зв'язку",
  },
  statuses: [
    "Цивільний",
    "Військовослужбовець",
    "СЗЧ",
    "Мобілізований",
    "Інше",
  ],
  contacts: ["Телефон", "Telegram", "WhatsApp", "Signal"],
  submitText: "Надіслати",
};

export const supportDefault = {
  title: "Підтримати",
  infoLines: [
    "Збір на дрони - перехоплювачі.",
    "Ціль: 1 500 000 грн",
    "Зачистимо українське небо від ворожої присутності!",
  ],
  paymentMethods: ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"],
  defaultMethod: "MONOBANK",
  paymentLinks: {
    MONOBANK: "https://send.monobank.ua/jar/2ZnCUmV6bZ",
    КАРТКА: "https://send.monobank.ua/jar/2ZnCUmV6bZ",
    PAYPAL: "https://paypal.me/phoenixdpsu",
  },
  bankTitles: {
    MONOBANK: "ПЕРЕЙТИ НА БАНКУ",
    КАРТКА: "ПЕРЕЙТИ НА БАНКУ",
    PAYPAL: "ПЕРЕЙТИ НА PAYPAL",
  },
  requisites: {
    title: "РЕКВІЗИТИ ДЛЯ ПЕРЕКАЗУ",
    items: [
      { label: "IBAN", value: "UA123456789012345678901234567" },
      { label: "ЄДРПОУ", value: "12345678" },
      { label: "Отримувач", value: "ГО Фенікс" },
    ],
  },
  qrImage: MonoZbir,
  ctaText: "ПЕРЕГЛЯНУТИ ЗАКРИТІ ЗБОРИ",
  ctaHref: "/fundraising",
};
