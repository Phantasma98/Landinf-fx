export const headerNav = {
  ua: [
    { text: "Про Фенікс", href: "/about" },
    { text: "Вакансії", href: "/vacancies" },
    { text: "Контракт 18-24", href: "/contract" },
    { text: "Контакти", href: "/contacts" },
  ],
  en: [
    { text: "About us", anchor: "about" },
    { text: "Ecosystem", anchor: "ecosystem" },
    { text: "Commander", anchor: "commander" },
    { text: "Values", anchor: "values" },
  ],
};

// Allowed EN pages (all others redirect to / on lang switch UA→EN)
export const allowedEnPages = ["/", "/donations", "/policy", "/cookies"];

export const headerActions = {
  ua: {
    joinText: "приєднатися",
  },
  en: {
    joinText: "DONATE NOW",
  },
};
