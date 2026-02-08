import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "./Footer";

// Мета-конфігурація для Storybook
export default {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    // Повноекранний макет для коректного відображення футера
    layout: "fullscreen",
  },
  decorators: [
    // Обгортка LanguageProvider для контексту мови
    (Story) => (
      <LanguageProvider>
        {/* MemoryRouter потрібен для роботи Link з react-router-dom */}
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </LanguageProvider>
    ),
  ],
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
