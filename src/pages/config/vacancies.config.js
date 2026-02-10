import Hero from "@/sections/HeroSection/HeroSection";
import Job from "@/sections/JobsSection/JobsSection";
import Recruit from "@/sections/RecruitSection/RecruitSection";
import Faq from "@/sections/FaqSection/FaqSection";
import SectionForm from "@/sections/FormSection/FormSection";
import {
  vacanciesFaq,
  vacanciesForm,
  vacanciesHero,
  vacanciesJob,
  vacanciesRecruit,
} from "@/data/vacancies";

export const vacanciesPageConfig = {
  startTheme: "surface",
  sections: [
    { id: "hero", Component: Hero, props: vacanciesHero },
    { id: "jobs", Component: Job, props: { ...vacanciesJob, isVacanciesPage: true } },
    { id: "recruit", Component: Recruit, props: vacanciesRecruit },
    { id: "faq", Component: Faq, props: vacanciesFaq },
    { id: "form", Component: SectionForm, props: vacanciesForm },
  ],
};
