import StatisticSection from "./StatisticSection";
import { aboutStatistic } from "../../data/about";

export default {
  title: "Sections/StatisticSection",
  component: StatisticSection,
  parameters: { layout: "fullscreen" },
  args: aboutStatistic,
};

export const Desktop = { globals: { viewport: { value: "desktop" } } };
export const Tablet = { globals: { viewport: { value: "tablet" } } };
export const Mobile = { globals: { viewport: { value: "mobile" } } };
