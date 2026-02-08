import { MemoryRouter } from "react-router-dom";
import VacancyJobSection from "./VacancyJobSection";
import { vacancySimilarJobs } from "@/data/vacancy";

export default {
  title: "Sections/VacancyJobSection",
  component: VacancyJobSection,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: vacancySimilarJobs,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
