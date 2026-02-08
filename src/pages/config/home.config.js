import Hero from "@/sections/HeroSection/HeroSection";
import About from "@/sections/AboutSection/AboutSection";
import Commander from "@/sections/CommanderSection/CommanderSection";
import Values from "@/sections/ValuesSection/ValuesSection";
import Job from "@/sections/JobsSection/JobsSection";
import Recruit from "@/sections/RecruitSection/RecruitSection";
import Support from "@/sections/SupportSection/SupportSection";
import Faq from "@/sections/FaqSection/FaqSection";
import SectionForm from "@/sections/FormSection/FormSection";
import {
  mainAbout,
  mainFaq,
  mainForm,
  mainHero,
  mainJob,
  mainRecruit,
  mainSocials,
  mainSupport,
  mainValues,
  mainCommander,
} from "@/data/main";

export const homePageConfig = {
  startTheme: "dark",
  sections: [
    { id: "hero", Component: Hero, props: { ...mainHero, socials: mainSocials } },
    { id: "about", Component: About, props: mainAbout },
    { id: "commander", Component: Commander, props: mainCommander },
    { id: "values", Component: Values, props: mainValues },
    { id: "jobs", Component: Job, props: mainJob },
    { id: "recruit", Component: Recruit, props: mainRecruit },
    { id: "support", Component: Support, props: mainSupport },
    { id: "faq", Component: Faq, props: mainFaq },
    { id: "form", Component: SectionForm, props: mainForm },
  ],
};
