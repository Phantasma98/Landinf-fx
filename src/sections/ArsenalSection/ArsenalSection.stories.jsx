import { MemoryRouter } from "react-router-dom";
import { ModalProvider } from "@/contexts/ModalContext";
import ArsenalSection from "./ArsenalSection";
import { arsenalSection } from "@/data/arsenal";

export default {
  title: "Sections/ArsenalSection",
  component: ArsenalSection,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </MemoryRouter>
    ),
  ],
  args: arsenalSection,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
