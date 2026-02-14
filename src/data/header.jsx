export const headerNav = {
  ua: [
    { text: "Про Фенікс", href: "/about" },
    { text: "Вакансії", href: "/vacancies" },
    { text: "Контракт 18-24", href: "/contract" },
    { text: "Контакти", href: "/contacts" },
  ],
  en: [
    { text: "About us", anchor: "history" },
    { text: "Ecosystem", anchor: "ecosystem" },
    { text: "Commander", anchor: "commander" },
    { text: "Values", anchor: "values" },
  ],
};

// Allowed EN pages (all others redirect to / on lang switch UA→EN)
export const allowedEnPages = ["/", "/donations", "/policy", "/cookies"];

import {
  InstaIcon,
  TelegramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  ExIcon
} from "@/assets";

export const headerActions = {
  ua: {
    joinText: "приєднатися",
  },
  en: {
    joinText: "DONATE NOW",
  },
};

export const headerMobileMenu = {
  nav: headerNav,
  phones: [
    { text: "+38 095 8888 011", href: "tel:+380958888011" },
    { text: "+38 097 8888 011", href: "tel:+380978888011" },
  ],
  socials: [
    { icon: InstaIcon, href: "https://www.instagram.com/phoenix_dpsu/", alt: "Instagram" },
    { icon: TelegramIcon, href: "https://t.me/phoenix_dpsu", alt: "Telegram" },
    { icon: YoutubeIcon, href: "https://www.youtube.com/@phoenix_dpsu", alt: "YouTube" },
    { icon: FacebookIcon, href: "https://www.facebook.com/phoenix.dpsu", alt: "Facebook" },
    { icon: TiktokIcon, href: "https://www.tiktok.com/@phoenix_dpsu", alt: "TikTok" },
    { icon: ExIcon, href: "https://x.com/phoenix_dpsu", alt: "X (Twitter)" },
  ],
};
