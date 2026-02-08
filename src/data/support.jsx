export const supportSectionUa = {
  title: "ПІДТРИМАТИ",
  infoLines: [
    "Збір на дрони - перехоплювачі.",
    "Ціль: 1 500 000 грн",
    "Зачистимо українське небо від ворожої присутності!",
  ],
  paymentMethods: ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"],
  paymentLinks: {
    "MONOBANK": "https://send.monobank.ua/jar/2ZnCUmV6bZ",
    "КАРТКА": "4444 6666 6666 6666",
    "PAYPAL": "charity@usfenix.army",
  },
  bankTitles: {
    "MONOBANK": "ПЕРЕЙТИ НА БАНКУ",
    "КАРТКА": "Переказ на картку",
    "PAYPAL": "PAYPAL",
  },
  requisites: {
    title: "РЕКВІЗИТИ",
    items: [
      { label: "Отримувач", value: "БФ ПОЛК СВЯТОСЛАВА ХОРОБРОГО" },
      { label: "Код отримувача", value: "44698121" },
      { label: "IBAN", value: "UA293052990000026001025110717" },
      { label: "Надавач платіжних послуг отримувача", value: "АТ КБ «ПриватБанк»" },
    ],
  },
  defaultMethod: "MONOBANK",
  qrImage: "/images/Mono_zbir.svg",
  ctaText: "переглянути закриті збори",
  ctaHref: "/donations",
};
