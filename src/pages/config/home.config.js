import Hero from "@/sections/HeroSection/HeroSection";
import AboutSection from "@/sections/AboutSection/AboutSection";
import Statistic from "@/sections/StatisticSection/StatisticSection";
import History from "@/sections/HistorySection/HistorySection";
import Ecosystem from "@/sections/EcosystemSection/EcosystemSection";
import Arsenal from "@/sections/ArsenalSection/ArsenalSection";
import Commander from "@/sections/CommanderSection/CommanderSection";
import Values from "@/sections/ValuesSection/ValuesSection";
import Job from "@/sections/JobsSection/JobsSection";
import Support from "@/sections/SupportSection/SupportSection";
import Faq from "@/sections/FaqSection/FaqSection";
import Recruit from "@/sections/RecruitSection/RecruitSection";
import SectionForm from "@/sections/FormSection/FormSection";
import ContactsSection from "@/sections/ContactsSection/ContactsSection";
import {
  mainHistory,
  mainEcosystem,
  mainArsenal,
  mainHero,
  mainJob,
  mainSocials,
  mainSupport,
  mainValues,
  mainCommander,
  mainStatistic,
  mainAbout,
  mainFaq,
  mainRecruit,
} from "@/data/main";
import {
  contactsForm,
} from "@/data/contacts";


export const getHomePageConfig = (language = "ua") => {
  const hero = mainHero[language] || mainHero.ua;
  const commander = mainCommander[language] || mainCommander.ua;
  const values = mainValues[language] || mainValues.ua;
  const support = mainSupport[language] || mainSupport.ua;
  const faq = mainFaq[language] || mainFaq.ua;
  const recruit = mainRecruit[language] || mainRecruit.ua;
  // English version structure
  if (language === "en") {
    return {
      startTheme: "dark",
      sections: [
        { id: "hero", Component: Hero, props: { ...hero, socials: mainSocials } },
        { id: "statistic", Component: Statistic, props: mainStatistic },
        { id: "history", Component: History, props: mainHistory },
        { id: "ecosystem", Component: Ecosystem, props: mainEcosystem },
        { id: "arsenal", Component: Arsenal, props: mainArsenal },
        { id: "commander", Component: Commander, props: commander },
        { id: "values", Component: Values, props: values },
        { id: "support", Component: Support, props: support },
        { id: "form", Component: SectionForm, props: contactsForm },
      ],
    };
  }

  // Ukrainian version structure
  return {
    startTheme: "dark",
    sections: [
      { id: "hero", Component: Hero, props: { ...hero, socials: mainSocials } },
      { id: "about", Component: AboutSection, props: mainAbout },
      { id: "commander", Component: Commander, props: commander },
      { id: "values", Component: Values, props: values },
      { id: "jobs", Component: Job, props: mainJob },
      { id: "recruit", Component: Recruit, props: recruit },
      { id: "support", Component: Support, props: support },
      { id: "faq", Component: Faq, props: faq },
      { id: "form", Component: SectionForm, props: contactsForm },
    ],
  };  
};

// Backward compatibility
export const homePageConfig = getHomePageConfig("ua");
