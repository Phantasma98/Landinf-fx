import ContactsSection from "./ContactsSection";
import { contactsSection } from "../../data/contacts";

export default {
  title: "Sections/ContactsSection",
  component: ContactsSection,
  parameters: {
    layout: "fullscreen",
  },
  args: contactsSection,
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
