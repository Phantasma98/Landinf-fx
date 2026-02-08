import DonationsSection from "./DonationsSection";
import { donationsSection } from "../../data/donations";

export default {
  title: "Sections/DonationsSection",
  component: DonationsSection,
  parameters: {
    layout: "fullscreen",
  },
  args: donationsSection,
};

/**
 * Десктопна версія (1440px) — повний макет секції закритих зборів
 * з відео, назвою збору, описом та зібраною сумою.
 */
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

/**
 * Планшетна версія (744px) — адаптивний макет секції закритих зборів.
 */
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

/**
 * Мобільна версія (390px) — компактний макет секції закритих зборів.
 */
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
