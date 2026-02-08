import RecruitSection from "./RecruitSection";
import { mainRecruit } from "@/data/main";

export default {
  title: "Sections/RecruitSection",
  component: RecruitSection,
  parameters: {
    layout: "fullscreen",
  },
  args: mainRecruit,
};

export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
