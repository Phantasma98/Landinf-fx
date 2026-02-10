import Hero from "@/sections/HeroSection/HeroSection";
import Statistic from "@/sections/StatisticSection/StatisticSection";
import History from "@/sections/HistorySection/HistorySection";
import Ecosystem from "@/sections/EcosystemSection/EcosystemSection";
import Arsenal from "@/sections/ArsenalSection/ArsenalSection";
import Commander from "@/sections/CommanderSection/CommanderSection";
import Values from "@/sections/ValuesSection/ValuesSection";
import Job from "@/sections/JobsSection/JobsSection";
import Support from "@/sections/SupportSection/SupportSection";
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
} from "@/data/main";

export const getHomePageConfig = (language = "ua") => {
  const hero = mainHero[language] || mainHero.ua;
  const commander = mainCommander[language] || mainCommander.ua;
  const values = mainValues[language] || mainValues.ua;
  const support = mainSupport[language] || mainSupport.ua;

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
      ],
    };
  }

  // Ukrainian version structure
  return {
    startTheme: "dark",
    sections: [
      { id: "hero", Component: Hero, props: { ...hero, socials: mainSocials } },
      { id: "commander", Component: Commander, props: commander },
      { id: "values", Component: Values, props: values },
      { id: "jobs", Component: Job, props: mainJob },
      { id: "support", Component: Support, props: support },
    ],
  };
};

// Backward compatibility
export const homePageConfig = getHomePageConfig("ua");
