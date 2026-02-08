import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection";
import { mainHero } from "@/data/main";

/**
 * Сторінка Storybook для секції HeroSection.
 * Обгортаємо MemoryRouter, оскільки PrimaryBtn використовує Link з react-router-dom.
 */

export default {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: mainHero,
};

/**
 * Десктопна версія (1440px) — повний макет героя з фоновим зображенням,
 * заголовком, кнопками дій та соціальними посиланнями.
 */
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

/**
 * Планшетна версія (744px) — адаптивний макет героя для планшетів.
 */
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

/**
 * Мобільна версія (390px) — компактний макет героя для мобільних пристроїв.
 */
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
