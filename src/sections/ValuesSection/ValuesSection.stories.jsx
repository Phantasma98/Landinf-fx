import ValuesSection from "./ValuesSection";
import { mainValues } from "@/data/main";

export default {
  title: "Sections/ValuesSection",
  component: ValuesSection,
  parameters: { layout: "fullscreen" },
  args: mainValues,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
