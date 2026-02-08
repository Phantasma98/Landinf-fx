import FormSection from "./FormSection";
import { formDefault } from "@/data/shared";

/**
 * Storybook page for FormSection.
 * Component renders title, subtitle, and MainForm.
 * Does not require router or context.
 */

// Real data from shared.jsx
const defaultArgs = {
  title: formDefault.title,
  subtitle: formDefault.subtitle,
};

// Storybook meta configuration
export default {
  title: "Sections/FormSection",
  component: FormSection,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultArgs,
};

// Desktop version — 1440px
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

// Tablet version — 744px
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

// Mobile version — 390px
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
