import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

/**
 * Сторінка Storybook для компонента Header.
 * Обгортаємо MemoryRouter, оскільки Header використовує Link та useLocation з react-router-dom.
 */
export default {
  title: "Layout/Header",
  component: Header,
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
};

/**
 * Десктопна версія (1440px) — повна навігація, кнопка приєднання, без бургер-меню.
 */
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

/**
 * Планшетна версія (744px) — навігація прихована, відображається бургер-меню.
 */
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

/**
 * Мобільна версія (390px) — зменшений логотип, менша висота шапки, бургер-меню.
 */
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
