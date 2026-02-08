import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  MainHeroImage,
  AboutHeroImage,
  ContractHeroImage,
  ContactsHeroImage,
  VacanciesHero,
  HeaderSpotterImage,
  HeaderTrainingImage,
} from "@/assets";

const SITE_NAME = "Фенікс - ДПСУ";

const SEO_BY_PATH = {
  "/": {
    title: "Фенікс - Головний відділ БпАК ДПСУ",
    description:
      "Головний відділ безпілотних авіаційних систем ДПСУ «Фенікс»: вакансії, служба, рекрутинг, підтримка підрозділу.",
    image: MainHeroImage,
  },
  "/about": {
    title: "Про Фенікс - Екосистема безпілотних систем",
    description:
      "Історія, екосистема, командир та бойовий шлях підрозділу «Фенікс».",
    image: AboutHeroImage,
  },
  "/contract": {
    title: "Контракт 18-24: Дрони - Фенікс",
    description:
      "Умови контракту 18-24 у підрозділі «Фенікс»: підготовка, вакансії, переваги служби.",
    image: ContractHeroImage,
  },
  "/contacts": {
    title: "Контакти Фенікс - Рекрутинг, медіа, співпраця",
    description:
      "Офіційні контакти підрозділу «Фенікс»: рекрутинг, медіа, співпраця та месенджери.",
    image: ContactsHeroImage,
  },
  "/vacancies": {
    title: "Вакансії у Фенікс - Долучайся до підрозділу",
    description:
      "Актуальні вакансії підрозділу «Фенікс»: бойові та технічні напрямки, шлях рекрута, подача заявки.",
    image: VacanciesHero,
  },
  "/donations": {
    title: "Підтримати Фенікс - Донати",
    description:
      "Підтримайте підрозділ «Фенікс» донатом. Кожен внесок підсилює бойові можливості та зберігає життя.",
    image: HeaderSpotterImage,
  },
  "/fundraising": {
    title: "Закриті збори - Фенікс",
    description:
      "Перегляньте закриті збори підрозділу «Фенікс» та результати підтримки.",
    image: HeaderSpotterImage,
  },
  "/cookies": {
    title: "Cookies Policy - Фенікс",
    description: "Політика використання cookies сайту підрозділу «Фенікс».",
    image: HeaderTrainingImage,
  },
};

function upsertMeta({ attr, key, content }) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.startsWith("/vacancy/") ? "/vacancy" : pathname;
    const seo = SEO_BY_PATH[normalizedPath] || {
      title: SITE_NAME,
      description:
        "Офіційний сайт підрозділу «Фенікс» Державної прикордонної служби України.",
      image: MainHeroImage,
    };

    const title = `${seo.title} | ${SITE_NAME}`;
    const canonical = `${window.location.origin}${pathname}`;
    const imageUrl = seo.image ? `${window.location.origin}${seo.image}` : "";

    document.title = title;

    upsertMeta({ attr: "name", key: "description", content: seo.description });
    upsertMeta({ attr: "property", key: "og:title", content: title });
    upsertMeta({ attr: "property", key: "og:description", content: seo.description });
    upsertMeta({ attr: "property", key: "og:type", content: "website" });
    upsertMeta({ attr: "property", key: "og:url", content: canonical });
    upsertMeta({ attr: "name", key: "twitter:card", content: "summary_large_image" });
    upsertMeta({ attr: "name", key: "twitter:title", content: title });
    upsertMeta({ attr: "name", key: "twitter:description", content: seo.description });

    if (imageUrl) {
      upsertMeta({ attr: "property", key: "og:image", content: imageUrl });
      upsertMeta({ attr: "name", key: "twitter:image", content: imageUrl });
    }

    let canonicalEl = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);
  }, [pathname]);

  return null;
}
