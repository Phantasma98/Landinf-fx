import {
  ContactsHeroImage,
  InstaIcon,
  TelegramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
} from "@/assets";

export const contactsHero = {
  backgroundImage: ContactsHeroImage,
  backgroundAlt:
    "Оператор FPV-дрона працює в темному укритті (аліндажі) під час виконання бойового завдання.",
  meta: "КОНТАКТИ",
  title: "ФЕНІКС НА ЗВʼЯЗКУ",
  primaryAction: { text: "ПРИЄДНАТИСЯ", href: "/#jobs" },
};

export const contactsSection = {
  title: "КОНТАКТИ",
  recruitment: {
    title: "РЕКРУТИНГ",
    phones: ["+38 (095) 8888 011", "+38 (095) 8888 011"],
  },
  messengers: {
    title: "НАПИСАТИ",
    items: ["WHATSAPP", "SIGNAL", "VIBER"],
  },
  media: {
    title: "МЕДІА",
    email: "PR@USFENIX.ARMY",
  },
  cooperation: {
    title: "СПІВПРАЦЯ",
    email: "INFO@USFENIX.ARMY",
  },
};

export const contactsForm = {
  title: "ДОЛУЧИТИСЬ",
  subtitle: (
    <>
      Залишай заявку та будь на зв'язку. <br />
      Рекрутери Фенікса зв'яжуться з тобою.
    </>
  ),
  submitText: "Відправити заявку",
};

export const contactsSocials = {
  items: [
    { icon: InstaIcon, href: "https://instagram.com/phoenix_dpsu", alt: "Instagram" },
    { icon: TelegramIcon, href: "https://t.me/phoenix_dpsu", alt: "Telegram" },
    { icon: YoutubeIcon, href: "https://youtube.com", alt: "YouTube" },
    { icon: FacebookIcon, href: "https://facebook.com/phoenix.dpsu", alt: "Facebook" },
    { icon: TiktokIcon, href: "https://tiktok.com/@phoenix_dpsu", alt: "TikTok" },
  ],
};

export const contactsInfo = contactsSection;
