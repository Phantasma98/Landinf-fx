import { MemoryRouter } from "react-router-dom";
import CommanderSection from "./CommanderSection";
import { mainCommander } from "@/data/main";

export default {
  title: "Sections/CommanderSection",
  component: CommanderSection,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: mainCommander,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
