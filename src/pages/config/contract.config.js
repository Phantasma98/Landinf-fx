import Hero from "@/sections/HeroSection/HeroSection";
import About from "@/sections/AboutSection/AboutSection";
import Values from "@/sections/ValuesSection/ValuesSection";
import Job from "@/sections/JobsSection/JobsSection";
import Recruit from "@/sections/RecruitSection/RecruitSection";
import Faq from "@/sections/FaqSection/FaqSection";
import SectionForm from "@/sections/FormSection/FormSection";
import {
  contractAbout,
  contractFaq,
  contractForm,
  contractHero,
  contractJob,
  contractRecruit,
  contractValues,
} from "@/data/contract";

export const contractPageConfig = {
  startTheme: "surface",
  sections: [
    { id: "hero", Component: Hero, props: contractHero },
    { id: "about", Component: About, props: contractAbout },
    { id: "values", Component: Values, props: contractValues },
    { id: "jobs", Component: Job, props: contractJob },
    { id: "recruit", Component: Recruit, props: contractRecruit },
    { id: "faq", Component: Faq, props: contractFaq },
    { id: "form", Component: SectionForm, props: contractForm },
  ],
};
