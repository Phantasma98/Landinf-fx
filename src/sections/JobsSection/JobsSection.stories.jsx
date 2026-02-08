import { MemoryRouter } from "react-router-dom";
import JobsSection from "./JobsSection";
import { mainJob } from "@/data/main";

export default {
  title: "Sections/JobsSection",
  component: JobsSection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: mainJob,
};

// Desktop — 1440px
export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
};

// Tablet — 744px
export const Tablet = {
  globals: {
    viewport: { value: "tablet" },
  },
};

// Mobile — 390px
export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
};
