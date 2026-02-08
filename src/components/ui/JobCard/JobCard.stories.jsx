import { BrowserRouter } from "react-router-dom";
import JobCard from "./JobCard";

export default {
  title: "UI/JobCard",
  component: JobCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ maxWidth: "298px" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = {
  args: {
    title: "Оператор БПЛА розвідувального типу",
    tags: ["#БПЛА", "#КОНТРАКТ 18-24"],
    link: "/vacancy/1",
  },
};

export const SingleTag = {
  args: {
    title: "Механік з обслуговування БПЛА",
    tags: ["#МАЙСТЕРНЯ"],
    link: "/vacancy/2",
  },
};

export const AllVariant = {
  args: {
    title: "ВСІ ВАКАНСІЇ В КАТЕГОРІЇ",
    tags: ["#БПЛА"],
    link: "/vacancies",
    variant: "all",
  },
};

export const LongTitle = {
  args: {
    title: "Спеціаліст з радіоелектронної боротьби та радіоелектронної розвідки",
    tags: ["#РЕБ / РЕР", "#КОНТРАКТ"],
    link: "/vacancy/3",
  },
};
