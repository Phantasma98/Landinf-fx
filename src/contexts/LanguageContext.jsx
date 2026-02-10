import { createContext, useContext, useState, useEffect } from "react";
import { dataCache } from "@/utils/dataCache";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Ініціалізація з кешу або браузерної мови
  const [language, setLanguageState] = useState(() => {
    // Спочатку перевіряємо кеш
    const cached = dataCache.get("language", Infinity, true);
    if (cached) return cached;

    // Потім браузерну мову
    const browserLang = navigator.language?.toLowerCase();
    if (browserLang?.startsWith("uk") || browserLang?.startsWith("ua")) {
      return "ua";
    }

    // За замовчуванням українська
    return "ua";
  });

  // Оновлюємо кеш при зміні мови
  const setLanguage = (lang) => {
    setLanguageState(lang);
    dataCache.set("language", lang, true);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ua" ? "en" : "ua");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: "ua", setLanguage: () => {}, toggleLanguage: () => {} };
  }
  return context;
}
