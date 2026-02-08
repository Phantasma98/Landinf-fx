import EcosystemSection from "./EcosystemSection";
import { aboutEcosystem } from "../../data/about";

/**
 * Сторінка Storybook для секції EcosystemSection.
 * Компонент відображає заголовок, підзаголовок та список елементів екосистеми.
 * Не потребує роутера чи контексту.
 */

// Мета-конфігурація для Storybook
export default {
  title: "Sections/EcosystemSection",
  component: EcosystemSection,
  parameters: {
    layout: "fullscreen",
  },
  args: aboutEcosystem,
};

// Десктопна версія — ширина 1440px
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

// Планшетна версія — ширина 744px
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

// Мобільна версія — ширина 390px
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
