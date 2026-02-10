import Hero from "@/sections/HeroSection/HeroSection";
import History from "@/sections/HistorySection/HistorySection";
import Statistic from "@/sections/StatisticSection/StatisticSection";
import Ecosystem from "@/sections/EcosystemSection/EcosystemSection";
import Arsenal from "@/sections/ArsenalSection/ArsenalSection";
import Commander from "@/sections/CommanderSection/CommanderSection";
import Values from "@/sections/ValuesSection/ValuesSection";
import Support from "@/sections/SupportSection/SupportSection";
import SectionForm from "@/sections/FormSection/FormSection";
import { arsenalSection } from "@/data/arsenal";
import {
  aboutForm,
  aboutHero,
  aboutCommander,
  aboutStatistic,
  aboutEcosystem,
  aboutHistory,
} from "@/data/about";
import { mainValues, mainSupportUa } from "@/data/main";

export const aboutPageConfig = {
  startTheme: "surface",
  sections: [
    { id: "hero", Component: Hero, props: aboutHero },
    { id: "statistic", Component: Statistic, props: aboutStatistic },
    { id: "history", Component: History, props: aboutHistory },
    { id: "ecosystem", Component: Ecosystem, props: aboutEcosystem },
    { id: "arsenal", Component: Arsenal, props: arsenalSection },
    { id: "commander", Component: Commander, props: aboutCommander },
    { id: "values", Component: Values, props: mainValues.ua },
    { id: "support", Component: Support, props: mainSupportUa },
    { id: "form", Component: SectionForm, props: aboutForm },
  ],
};
