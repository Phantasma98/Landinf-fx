import CookiesSection from "./CookiesSection";
import { cookiesSectionUa } from "@/data/cookies.ua";

export default {
  title: "Sections/CookiesSection",
  component: CookiesSection,
  parameters: { layout: "fullscreen" },
  args: cookiesSectionUa,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
