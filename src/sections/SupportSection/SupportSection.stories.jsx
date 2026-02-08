import { MemoryRouter } from "react-router-dom";
import SupportSection from "./SupportSection";
import { supportDefault } from "@/data/shared";

/**
 * Сторінка Storybook для секції SupportSection.
 * Обгортаємо MemoryRouter, оскільки SecondaryBtn використовує Link з react-router-dom.
 */

export default {
  title: "Sections/SupportSection",
  component: SupportSection,
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
  args: supportDefault,
};

/**
 * Десктопна версія (1440px) — повний макет секції підтримки з QR-кодом,
 * табами оплати, реквізитами та кнопкою переходу до зборів.
 */
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

/**
 * Планшетна версія (744px) — адаптивний макет секції підтримки для планшетів.
 */
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

/**
 * Мобільна версія (390px) — компактний макет секції підтримки для мобільних пристроїв.
 */
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
