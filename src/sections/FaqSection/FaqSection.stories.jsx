import FaqSection from "./FaqSection";
import { faqDefault } from "@/data/shared";

export default {
  title: "Sections/FaqSection",
  component: FaqSection,
  args: faqDefault,
  parameters: {
    layout: "fullscreen",
  },
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
