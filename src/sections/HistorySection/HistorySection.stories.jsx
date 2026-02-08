import HistorySection from "./HistorySection";
import { aboutHistory } from "../../data/about";

/**
 * Сторінка Storybook для секції HistorySection.
 * Компонент відображає заголовок та таймлайн подій з роком і описом.
 * Не потребує роутера чи контексту.
 *
 * Дані на основі aboutHistory з /src/data/about.jsx.
 */

// Мета-конфігурація для Storybook
export default {
  title: "Sections/HistorySection",
  component: HistorySection,
  parameters: {
    layout: "fullscreen",
  },
  args: aboutHistory,
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
