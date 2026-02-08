import { faqDefault, formDefault, socialsDefault } from "./shared";
import { VacanciesHero } from "@/assets";

export const vacanciesHero = {
  backgroundImage: VacanciesHero,
  backgroundAlt:
    "Інженер-технік підрозділу Фенікс збирає FPV-дрон у майстерні — вакансії для спеціалістів БПЛА.",
  meta: "вакансії у фенікс",
  title: (
    <>
      ефективна реалізація <br /> твоїх скілів
    </>
  ),
  primaryAction: { text: "приєднатися", href: "#jobs" },
  secondaryAction: { text: "підтримати", href: "#support" },
};

export const vacanciesJob = {
  title: "ВАКАНСІЇ",
  subtitle:
    "Готовий розпочати новий етап життя? Обирай свій напрям та долучайся до найрезультативнішого підрозділу ДПСУ.",
  categories: [
    "БПЛА",
    "НРК",
    "РЕБ / РЕР",
    "МАЙСТЕРНЯ",
    "IT",
    "ЗВʼЯЗОК",
    "ТРАНСПОРТ",
    "ШТАБ",
    "ІНШЕ",
  ],
  defaultCategory: "БПЛА",
  jobs: [
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/1",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/2",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/3",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/4",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/5",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/6",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/7",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/8",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/9",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/10",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/11",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/12",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/13",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/14",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/15",
    },
    {
      title: "Оператор БПЛА розвідувального типу",
      tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
      link: "/vacancy/16",
    },
  ],
  quote: "ЧАС ПЕРЕХОДИТИ НА НАСТУПНИЙ РІВЕНЬ.",
  ctaText: "ЗАЛИШИТИ ЗАЯВКУ",
  ctaHref: "#form",
};

export const vacanciesRecruit = {
  title: (
    <>
      шлях <br />
      рекрута
    </>
  ),
  steps: [
    { num: "01", title: "ЗАПОВНЕННЯ АНКЕТИ" },
    { num: "02", title: "СПІВБЕСІДА З РЕКРУТЕРАМИ" },
    { num: "03", title: "ЗАРАХУВАННЯ ДО ПІДРОЗДІЛУ" },
    { num: "04", title: "БАЗОВА ВІЙСЬКОВА ПІДГОТОВКА" },
    { num: "05", title: "ФАХОВА ПІДГОТОВКА" },
    { num: "06", title: "ВИКОНАННЯ ЗАВДАНЬ" },
  ],
};

export const vacanciesFaq = faqDefault;
export const vacanciesForm = formDefault;
export const vacanciesSocials = socialsDefault;
