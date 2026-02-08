import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ua");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ua" ? "en" : "ua"));
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
