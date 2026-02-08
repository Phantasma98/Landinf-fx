import VacancyFormSection from "./VacancyFormSection";
import { vacancyForm } from "@/data/vacancy";

export default {
  title: "Sections/VacancyFormSection",
  component: VacancyFormSection,
  parameters: { layout: "fullscreen" },
  args: vacancyForm,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
