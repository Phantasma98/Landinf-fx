import AboutSection from "./AboutSection";
import { mainAbout } from "@/data/main";

export default {
  title: "Sections/AboutSection",
  component: AboutSection,
  parameters: { layout: "fullscreen" },
  args: mainAbout,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
