import VacancySection from "./VacancySection";
import { vacancyDetail } from "@/data/vacancy";

export default {
  title: "Sections/VacancySection",
  component: VacancySection,
  parameters: { layout: "fullscreen" },
  args: vacancyDetail,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
