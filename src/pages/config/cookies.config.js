import PolicySection from "@/sections/PolicySection/PolicySection";
import { cookiesSectionUa } from "@/data/cookies.ua";
import { cookiesSectionEn } from "@/data/cookies.en";

export function buildCookiesPageConfig(language = "ua") {
  const cookiesSection = language === "ua" ? cookiesSectionUa : cookiesSectionEn;

  return {
    startTheme: "surface",
    sections: [{ id: "cookies", Component: PolicySection, props: cookiesSection }],
  };
}
