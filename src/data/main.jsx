import { faqDefault, formDefault, socialsDefault, supportDefault } from "./shared";
import {
  MainHeroImage,
  CarouselMain1,
  CarouselMain2,
  CarouselMain3,
  CarouselMain4,
  CarouselMain5,
  CarouselMain6,
  CarouselMain7,
  CarouselMain8,
  CarouselMain9,
  CarouselMain10,
  HeaderTrainingImage,
  CommanderImage,
  DroneStalkerImage,
  DroneMatriceImage,
  DroneVampireImage,
  DroneInterceptorImage,
  DroneLelekaImage,
  GroundRobotImage,
  MonoZbir,
} from "@/assets";

export const mainHero = {
  ua: {
    backgroundImage: MainHeroImage,
    backgroundAlt:
      "Військовий оператор підрозділу Фенікс керує квадрокоптером на фоні неба.",
    meta: (
      <>
        ГОЛОВНИЙ ВІДДІЛ БЕЗПІЛОТНИХ АВІАЦІЙНИХ СИСТЕМ <br /> ДЕРЖАВНОЇ ПРИКОРДОННОЇ СЛУЖБИ УКРАЇНИ «ФЕНІКС»
      </>
    ),
    title: (
      <>
        спалюємо <br /> межі можливого
      </>
    ),
    primaryAction: { text: "ДОЛУЧИТИСЬ", href: "#jobs" },
    secondaryAction: { text: "ПІДТРИМАТИ", href: "#support" },
  },
  en: {
    backgroundImage: MainHeroImage,
    backgroundAlt:
      "Військовий оператор підрозділу Фенікс керує квадрокоптером на фоні неба.",
    meta: (
      <>
        MAIN DEPARTMENT OF UNMANNED AERIAL SYSTEMS <br /> OF THE STATE BORDER GUARD SERVICE OF UKRAINE «FENIKS»
      </>
    ),
    title: (
      <>
        КРИЛА, ЩО <br /> СПОПЕЛЯЮТЬ
      </>
    ),
    primaryAction: { text: "SUPPORT FENIKS", href: "#support" },
  },
};

export const mainHistory = {
  title: "HISTORY",
  description:
    "The combat path of the Feniks Regiment is a story of radical transformation: evolving from a border guard infantry unit into a cornerstone of Ukraine's Unmanned Systems Forces.",
  images: [
    {
      src: CarouselMain1,
      alt: "Feniks border guard soldiers during early operations",
    },
    {
      src: CarouselMain2,
      alt: "Feniks operators training with first generation drones",
    },
    {
      src: CarouselMain3,
      alt: "Feniks unit deployment in Eastern Ukraine",
    },
  ],
  years: [
    {
      year: "2022",
      title: "FIRST YEAR OF FULL-SCALE INVASION",
      paragraphs: [
        "2022: First year of Full-Scale Invasion\nThe \"Feniks\" unit originated as a specialized infantry border guard department within the 3rd Luhansk Border Guard Detachment.",
        "The First Contact: On February 24, 2022, the unit met the invasion at the outermost positions of Eastern Ukraine - standing where the border was first breached.",
        "Defensive Resilience: The first year was defined by intense defensive operations across Kreminna, Rubizhne, Popasna, Lyman, and Svyatohirsk. Every city provided hard-won experience; every battle taught new tactical lessons.",
        "The Battle of Bakhmut: In December 2022, the unit deployed to Bakhmut, the most volatile sector of the front. During this campaign, the unit neutralized hundreds of Wagner PMC forces. In a rare feat for an infantry unit, a soldier codenamed \"Hudson\" used a Stinger MANPADS to down two Russian \"Su-25\" attack aircraft.",
        "The Birth of a New Era: Bakhmut marked the birth of our drone capabilities. It was here that we formed our first multi-rotor crews to drop munitions on enemy infantry - a move that would eventually redefine the entire unit.",
      ],
    },
  ],
};

export const mainEcosystem = {
  title: "ECOSYSTEM",
  subtitle:
    "We have built a solid Unmanned Aerial Systems structure that operates with the precision of a Swiss watch.",
  items: [
    {
      title: "UAS LABORATORY",
      description: "",
    },
    {
      title: "MUNITION R&D WORKSHOP",
      description: "",
    },
    {
      title: "UAV OPERATOR TRAINING CENTER",
      description:
        "We have established a modern training center dedicated to aspiring UAV operators. Our program prepares pilots for their first missions by simulating highly realistic combat environments. Led by instructors with extensive frontline experience, we help every student unlock their full operational potential.",
    },
  ],
};

export const mainArsenal = {
  title: "ARSENAL",
  subtitle:
    "The Feniks Regiment utilizes the most advanced systems for strike, reconnaissance, and logistics - ranging from tactical FPV drones to long-range fixed-wing UAS and Unmanned Ground Systems.",
  items: [
    {
      title: "FPV DRONES",
      description:
        "An FPV (First-Person View) drone is a UAV operated from a first-person perspective. The video signal is transmitted from the drone to the operator via radio waves or fiber-optic cable. FPV drones are deployed as loitering munitions (kamikaze) equipped with various warheads, or used for dropping munitions on enemy targets.",
      image: DroneStalkerImage,
      imageAlt: "Specialized FPV drone Stalker with fiber-optic cable for EW protection, Feniks unit",
    },
    {
      title: "QUADROCOPTERS",
      description:
        "Quadrocopters are lightweight, multi-rotor platforms featuring Vertical Take-Off and Landing (VTOL) capabilities and precision hovering. These drones are engineered for superior maneuverability and flight stability in challenging environments. Their primary operational roles include aerial reconnaissance, fire correction (artillery spotting), precision strikes via munition drops, and the rapid delivery of critical light payloads.",
      image: DroneMatriceImage,
      imageAlt: "Reconnaissance quadcopter Matrice 4 of Feniks unit in flight over the battlefield",
    },
    {
      title: "HEAVY BOMBERS",
      description:
        "Heavy Bombers are large-scale, multi-rotor strike UAVs engineered for high precision and heavy-duty operations. With a payload capacity of up to 15 kg and an operational range up to 20 km, these versatile platforms are designed for a wide array of mission profiles, including precision munition drops, remote mining, cargo delivery, and emergency medical evacuation (MEDEVAC).",
      image: DroneVampireImage,
      imageAlt: "Night heavy bomber drone Vampire of Feniks unit during mission execution",
    },
    {
      title: "INTERCEPTORS",
      description:
        "Interceptor drones are specialized platforms engineered to detect, track, and neutralize hostile unmanned systems within controlled airspace. To counter aerial threats, these interceptors utilize various engagement methods: deploying capture nets, executing kinetic \"ramming\" maneuvers, or neutralizing the target via signal and GPS jamming. For high-priority threats, they are capable of direct kinetic impact to ensure total destruction of the enemy drone.",
      image: DroneInterceptorImage,
      imageAlt: "Strike interceptor P1-sun in the sky - Feniks unit equipment for combating enemy UAVs",
    },
    {
      title: "FIXED-WING UAS",
      description:
        "Fixed-wing platforms are aircraft-type UAVs designed for high-efficiency, long-range operations. Their aerodynamic design allows for superior flight endurance, high speeds, and precision over vast distances. These systems are the primary choice for deep-theater aerial reconnaissance, artillery fire correction, and both short- and long-range strike missions. Their ability to remain airborne for extended periods makes them a highly effective asset for sustained surveillance and strategic engagements.",
      image: DroneLelekaImage,
      imageAlt: "Fixed-wing UAV Leleka-100 conducting aerial reconnaissance for Feniks unit",
    },
    {
      title: "UNMANNED GROUND SYSTEMS (UGS)",
      description:
        "Unmanned Ground Systems are automated or remotely operated platforms designed to execute a broad spectrum of land-based operations. These robotic complexes serve as force multipliers by handling high-risk tasks, including logistics and supply, autonomous mining and demining, and tactical reconnaissance. Furthermore, UGS platforms provide critical fire support and serve as a lifeline for frontline troops through specialized medical evacuation (MEDEVAC) capabilities.",
      image: GroundRobotImage,
      imageAlt: "Ground robotic complex of Feniks unit for logistics and evacuation on the frontline",
    },
  ],
  primaryCta: { text: "SUPPORT US", href: "#support" },
};

export const mainValues = {
  ua: {
    title: "цінності",
    subtitle:
      "Фенікс - сучасний підрозділ з культурою та динамікою команди Формули-1. Ключова цінність - збереження життя наших бійців.",
    image: HeaderTrainingImage,
    values: [
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
    ],
  },
  en: {
    title: "OUR VALUES",
    subtitle:
      "Feniks is a modern combat unit built on the speed, precision, and culture of a Formula 1 team. Our primary mission is the success of the operation, but our foundational value is the preservation of our soldiers' lives.",
    image: HeaderTrainingImage,
    values: [
      {
        title: "RADICAL HONESTY",
        description:
          "We are not afraid of the truth. If a problem exists, it is voiced immediately. Initiative is never punished; it is rewarded. In our team, dishonesty is the ultimate red flag.",
      },
      {
        title: "RESULT-ORIENTED CULTURE",
        description:
          "We prioritize outcomes over outdated protocols. If a legacy instruction stands in the way of efficiency or operational success, we bypass it to optimize the process.",
      },
      {
        title: "ANTI-STAGNATION",
        description:
          "We operate like a military startup. We learn every day. In this environment, standing still is the same as falling behind. We provide the drive; you provide the momentum.",
      },
      {
        title: "THE ECOSYSTEM OF EXCELLENCE",
        description:
          "The drone pilot is the \"driver\" at the peak of our ecosystem, but without a flawless world-class support crew. We value our \"mechanics\" just as much as our \"racers.\" Every role is mission-critical.",
      },
      {
        title: "PIT-STOP SPECIALIZATION",
        description:
          "In a race, the mechanic doesn't drive, and the pilot doesn't change the tires. We guarantee that you will be placed where your specific skills are most effective. Focus on your expertise; we'll handle the rest.",
      },
      {
        title: "THE TELEMETRY PRINCIPLE",
        description:
          "We are driven by data, not emotions. We conduct warfare based on live streams, signals intelligence, and real-time analytics. If there is no data, there is no order.",
      },
    ],
  },
};

export const mainStatistic = {
  title: "FENIKS TODAY",
  items: [
    { num: "TOP-2", title: "EFFECTIVENESS RATING WITHIN THE UNMANNED SYSTEMS FORCES GROUP" },
    { value: 26500, title: "ENEMY TARGETS DAMAGED & DESTROYED" },
    { num: "TOP-3", title: "PERFORMANCE RATING IN THE DELTA UAS" },
    { value: 5130, title: "CONFIRMED ENEMY PERSONNEL ELIMINATIONS" },
    { value: 2.2, prefix: "$", suffix: " BILLION", decimals: 1, title: "TOTAL ESTIMATED FINANCIAL DAMAGE TO ENEMY ASSETS" },
  ],
};

export const mainJob = {
  title: "Вакансії",
  subtitle:
    "Ми будуємо екосистему, де бойова робота і забезпечення - це єдиний механізм. Шукаємо тих, хто готовий привести команду до перемоги своїм розумом та навичками.",
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
      tags: ["#БПЛА"],
      link: "/vacancy/8",
    },
  ],
  quote:
    "УСПІШНА МІСІЯ - це не індивідуальне досягнення пілота, це РЕЗУЛЬТАТ безперебійної роботи всієї команди.",
  ctaText: "стати частиною команди",
  ctaHref: "/vacancies",
};

export const mainRecruit = {
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

export const mainCommander = {
  ua: {
    image: CommanderImage,
    imageAlt:
      "Герой України Дмитро Олексюк, командир підрозділу Фенікс, у командному центрі на фоні моніторів керування.",
    quote:
      "«перетворюємо службу на високотехнологічну роботу, де цивільний інтелект та навички конвертуються в загальний результат.»",
    button: { text: "дізнатись більше про фенікс", href: "/about" },
  },
  en: {
    title: "COMMANDER",
    roleTitle: "HERO OF UKRAINE",
    rank: "COLONEL",
    name: "DMYTRO OLEKSYUK",
    image: CommanderImage,
    imageAlt:
      "Hero of Ukraine Dmytro Oleksyuk, commander of Feniks unit, in command center with control monitors.",
    awardsTitle: "MILITARY AWARDS",
    awards: [
      "HERO OF UKRAINE WITH THE ORDER OF THE GOLDEN STAR",
      "ORDER OF BOHDAN KHMELNYTSKY, 2ND CLASS",
      "MEDAL \"FOR MILITARY SERVICE TO UKRAINE\"",
    ],
    bio: (
      <>
        <p>A 2013 graduate of the Bohdan Khmelnytsky National Academy of the State Border Guard Service of Ukraine, Colonel began his service at the "Milove" border guard station in the Luhansk Border Guard Detachment.</p>
        <p>When the full-scale invasion began on February 24, 2022, he was serving as the Head of the "Zolote" border guard station in the Sievierodonetsk district. In the face of overwhelming enemy forces, he demonstrated exemplary leadership, courageously managing the regrouping of subordinate units under artillery fire.</p>
        <p>From February to July 2022, he led his unit through the most intense defensive operations in Kreminna, Lyman, Svyatohirsk, Horodychne, and Tetianivka. In December 2022, he spearheaded the formation of a new combat element within the Luhansk Border Guard Detachment. Under his command, the unit deployed to the Bakhmut sector, where he integrated various assets - including SPG-9s, 120mm mortars, MANPADs, UAVs, and AGS-17s—into a highly synchronized combat force.</p>
        <p>In January 2024, he assumed command of the 2nd Rapid Response Command, "Feniks". Under his leadership in the Bakhmut sector, the unit achieved significant tactical successes, neutralizing high-value targets including the "Zoopark-1" radar system and T-90M "Proryv" tanks.</p>
        <p>As of early 2026, Colonel Oleksyuk continues to lead at the forefront of military innovation, actively implementing new technologies and tactical formats to maximize the unit's operational effectiveness.</p>
      </>
    ),
  },
};

export const mainSupport = {
  ua: supportDefault,
  en: {
    title: "SUPPORT US",
    infoLines: [
      "Fundraising: Interceptor Drones",
      "Target: 1,500,000 UAH",
      "Let's clear the Ukrainian sky of the enemy presence!",
    ],
    paymentMethods: ["MONOBANK", "CREDIT CARD", "PAYPAL", "BANK TRANSFER"],
    defaultMethod: "MONOBANK",
    paymentLinks: {
      MONOBANK: "https://send.monobank.ua/jar/2ZnCUmV6bZ",
      "CREDIT CARD": "https://send.monobank.ua/jar/2ZnCUmV6bZ",
      PAYPAL: "https://paypal.me/phoenixdpsu",
    },
    bankTitles: {
      MONOBANK: "DONATE NOW",
      "CREDIT CARD": "DONATE NOW",
      PAYPAL: "GO TO PAYPAL",
    },
    requisites: {
      title: "BANK TRANSFER DETAILS",
      items: [
        { label: "IBAN", value: "UA123456789012345678901234567" },
        { label: "EDRPOU", value: "12345678" },
        { label: "Recipient", value: "NGO Feniks" },
      ],
    },
    qrImage: MonoZbir,
    ctaText: "VIEW FINISHED FUNDRAISINGS",
    ctaHref: "/donations",
  },
};

export const mainFaq = faqDefault;
export const mainForm = formDefault;
export const mainSocials = socialsDefault;
export const mainSupportUa = supportDefault;
