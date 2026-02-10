import Hero from "@/sections/HeroSection/HeroSection";
import ContactsSection from "@/sections/ContactsSection/ContactsSection";
import SectionForm from "@/sections/FormSection/FormSection";
import {
  contactsForm,
  contactsHero,
  contactsInfo,
  contactsSocials,
} from "@/data/contacts";

export const contactsPageConfig = {
  startTheme: "surface",
  sections: [
    { id: "hero", Component: Hero, props: { ...contactsHero, socials: contactsSocials } },
    { id: "contacts", Component: ContactsSection, props: contactsInfo },
    { id: "form", Component: SectionForm, props: contactsForm },
  ],
};
