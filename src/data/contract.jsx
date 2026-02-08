import { faqDefault, formDefault, socialsDefault } from "./shared";
import {
  ContractHeroImage,
  CarouselContract1,
  CarouselContract2,
  CarouselContract3,
  CarouselContract4,
  CarouselContract5,
  CarouselContract6,
  CarouselContract7,
  CarouselContract8,
  CarouselContract9,
  CarouselContract10,
  HeaderSpotterImage,
} from "@/assets";

export const contractHero = {
  backgroundImage: ContractHeroImage,
  backgroundAlt:
    "Оператор підрозділу Фенікс спостерігає за польотом важкого ударного дрона Vampire (Вампір) у сутінках.",
  meta: "контракт 18-24: дрони",
  title: (
    <>
      левел-ап твоєї <br />
      молодості
    </>
  ),
  primaryAction: { text: "Залишити заявку" },
};

export const contractAbout = {
  id: "aboutContract",
  title: "УМОВИ КОНТРАКТУ",
  description: (
    <>
      Контракт 18-24: Дрони - це добровільна служба для громадян віком з 18 до
      24 років, яка дозволяє за 2 роки отримати гідне фінансове забезпечення,
      соціальні гарантії та унікальний досвід, який неможливо здобути у
      цивільному житті.
    </>
  ),
  images: [
    {
      src: CarouselContract1,
      alt: "Екіпаж підрозділу Фенікс на бойовій позиції в зруйнованій будівлі.",
    },
    {
      src: CarouselContract2,
      alt: "Оператори БПЛА Фенікс здійснюють запуск дрона з пікапа.",
    },
    {
      src: CarouselContract3,
      alt: "Пілот підрозділу Фенікс керує дроном через FPV-окуляри з укриття в окопі.",
    },
    {
      src: CarouselContract4,
      alt: "Боєць екіпажу Фенікс у тактичному спорядженні та відеоокулярах.",
    },
    {
      src: CarouselContract5,
      alt: "Робота розвідки Фенікс: запуск квадрокоптера Mavic у відкритому полі.",
    },
    {
      src: CarouselContract6,
      alt: "Нічна зміна екіпажу Фенікс: підготовка важкого ударного дрона-бомбера.",
    },
    {
      src: CarouselContract7,
      alt: "Оператор ударних БПЛА Фенікс у спеціалізованих окулярах для польотів.",
    },
    {
      src: CarouselContract8,
      alt: "Навчальний центр Фенікс: підготовка нових пілотів FPV дронів.",
    },
    {
      src: CarouselContract9,
      alt: "Технічна підготовка обладнання екіпажем Фенікс перед вильотом.",
    },
    {
      src: CarouselContract10,
      alt: "Військовий підрозділу Фенікс із боєприпасом для скидання з дрона.",
    },
  ],
  statsTop: { title: "2 роки", text: "термін служби за контрактом" },
  stats: [
    { title: "4 місяці", text: "обовʼязкова посилена підготовка" },
    { title: "12 місяців", text: "обовʼязкова участь в бойових діях" },
  ],
};

export const contractValues = {
  title: "ЩО ТИ ОТРИМАЄШ?",
  subtitle: "",
  image: HeaderSpotterImage,
  values: [
    {
      title: "КОНТРАКТ НА 1 000 000 ГРН",
      description:
        "200 000 грн одразу при підписанні контракту, та 800 000 грн виплат двома частинами на час дії контракту",
    },
    {
      title: "ГРОШОВЕ ЗАБЕЗПЕЧЕННЯ",
      description:
        "Зарплата + доплати за бойові завдання - до 120 000 грн на місяць",
    },
    {
      title: "МЕДИЧНЕ ЗАБЕЗПЕЧЕННЯ",
      description:
        "Медичні послуги в тому числі стоматологія та зубопротезування",
    },
    {
      title: "БЕЗКОШТОВНА ОСВІТА",
      description:
        "Навчання у закладах освіти у межах квот за кошти держави, після закінчення контракту",
    },
    {
      title: "КОМПЕНСАЦІЯ ЖИТЛА",
      description: "Компенсація витрат на оренду житла протягом служби",
    },
    {
      title: "ПРАВО НА ВІДСТРОЧКУ",
      description:
        "Право на відстрочку від призову на 1 рік після виконання умов контракту",
    },
  ],
};

export const contractJob = {
  title: "Вакансії",
  subtitle:
    "Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний механізм. Шукаємо тих, хто готовий привести команду до перемоги своїм розумом та навичками.",
  categories: [],
  jobs: Array(8).fill({
    title: "Інженер мережевих інтеграцій",
    tags: ["#IT", "#КОНТРАКТ 18-24"],
    link: "/vacancy/1",
  }),
  quote:
    "Час переходити на наступний рівень.",
  ctaText: "стати частиною команди",
  showAllCard: false,
};

export const contractRecruit = {
  title: "шлях рекрута",
  steps: [
    { num: "01", title: "ЗАПОВНЕННЯ АНКЕТИ" },
    { num: "02", title: "СПІВБЕСІДА З РЕКРУТЕРАМИ" },
    { num: "03", title: "ЗАРАХУВАННЯ ДО ПІДРОЗДІЛУ" },
    { num: "04", title: "БАЗОВА ВІЙСЬКОВА ПІДГОТОВКА" },
    { num: "05", title: "ФАХОВА ПІДГОТОВКА" },
    { num: "06", title: "ВИКОНАННЯ ЗАВДАНЬ" },
  ],
};

export const contractFaq = faqDefault;
export const contractForm = formDefault;
export const contractSocials = socialsDefault;
