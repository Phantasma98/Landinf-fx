// Images
import monoQrImg from "@/assets/icons/ui/MonoZbir.svg";

export const supportNowSection = {
  title: "відкритий збір",
  infoLines: [
    "Збір на дрони - перехоплювачі.",
    "Ціль: 1 500 000 грн",
    "Зачистимо українське небо від ворожої присутності!",
  ],
  paymentMethods: ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"],
  paymentLinks: {
    "MONOBANK": "https://send.monobank.ua/jar/2ZnCUmV6bZ",
    "КАРТКА": "#",
    "PAYPAL": "#",
    "РЕКВІЗИТИ": "#",
  },
  defaultMethod: "MONOBANK",
  qrImage: monoQrImg,
  bankTitle: "ПЕРЕЙТИ НА БАНКУ",
  bankUrl: "https://send.monobank.ua/jar/2ZnCUmV6bZ",
  ctaText: "дізнатись більше про збір",
  ctaHref: "/donations",
};
