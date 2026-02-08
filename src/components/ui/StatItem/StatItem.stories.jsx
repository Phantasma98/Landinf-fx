import StatItem from "./StatItem";

export default {
  title: "UI/StatItem",
  component: StatItem,
};

export const Default = {
  args: {
    title: "126500",
    text: "ВИЛЬОТІВ НА БОЙОВІ ЗАВДАННЯ",
  },
};

export const TopStat = {
  args: {
    title: "ТОП-2",
    text: "В УГРУПОВАННІ СИЛ БЕЗПІЛОТНИХ СИСТЕМ",
    titleClassName: "font-title-l title-l-m",
  },
};

export const RecruitStep = {
  args: {
    title: "01",
    text: "ЗАПОВНЕННЯ АНКЕТИ",
    titleClassName: "font-title-l title-l-xs",
    textClassName: "font-subtitle-m",
  },
};

export const SmallStat = {
  args: {
    title: "5130",
    text: "ЗНИЩЕНО ОСОБОВОГО СКЛАДУ ВОРОГА",
    titleClassName: "font-title-l title-l-s",
    textClassName: "font-subtitle-l",
  },
};
