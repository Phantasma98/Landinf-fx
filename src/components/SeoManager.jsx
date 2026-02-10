import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_CONFIG, SEO_FALLBACK, SEO_GLOBAL } from "@/config/seo.config";

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
    // Нормалізація шляху для динамічних роутів
    const normalizedPath = pathname.startsWith("/vacancy/") ? "/vacancy" : pathname;

    // Отримання SEO конфігурації
    const seo = SEO_CONFIG[normalizedPath] || SEO_FALLBACK;

    const title = seo.title;
    const canonical = `${window.location.origin}${pathname}`;
    const imageUrl = seo.image ? `${window.location.origin}${seo.image}` : "";

    // Встановлення title
    document.title = title;

    // Meta теги
    upsertMeta({ attr: "name", key: "description", content: seo.description });

    // Open Graph
    upsertMeta({ attr: "property", key: "og:site_name", content: SEO_GLOBAL.siteName });
    upsertMeta({ attr: "property", key: "og:locale", content: SEO_GLOBAL.locale });
    upsertMeta({ attr: "property", key: "og:type", content: SEO_GLOBAL.type });
    upsertMeta({ attr: "property", key: "og:title", content: title });
    upsertMeta({ attr: "property", key: "og:description", content: seo.description });
    upsertMeta({ attr: "property", key: "og:url", content: canonical });

    // Twitter Card
    upsertMeta({ attr: "name", key: "twitter:card", content: SEO_GLOBAL.twitterCard });
    upsertMeta({ attr: "name", key: "twitter:title", content: title });
    upsertMeta({ attr: "name", key: "twitter:description", content: seo.description });

    // Зображення для OG та Twitter
    if (imageUrl) {
      upsertMeta({ attr: "property", key: "og:image", content: imageUrl });
      upsertMeta({ attr: "name", key: "twitter:image", content: imageUrl });
    }

    // Robots meta (якщо вказано)
    if (seo.robots) {
      upsertMeta({ attr: "name", key: "robots", content: seo.robots });
    }

    // Canonical URL
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
