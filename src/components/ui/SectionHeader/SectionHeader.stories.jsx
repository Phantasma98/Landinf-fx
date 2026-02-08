import SectionHeader from "./SectionHeader";

export default {
  title: "UI/SectionHeader",
  component: SectionHeader,
  argTypes: {
    layout: {
      control: { type: "select" },
      options: ["row", "column"],
    },
    gap: {
      control: { type: "number" },
    },
  },
};

export const Row = {
  args: {
    title: "НАШІ ЦІННОСТІ",
    subtitle: "Ми цінуємо кожного бійця та створюємо умови для розвитку",
    layout: "row",
  },
};

export const Column = {
  args: {
    title: "НАШІ ЦІННОСТІ",
    subtitle: "Ми цінуємо кожного бійця та створюємо умови для розвитку",
    layout: "column",
  },
};

export const WithCustomGap = {
  args: {
    title: "ВАКАНСІЇ",
    subtitle: "Приєднуйся до команди професіоналів",
    layout: "row",
    gap: 40,
  },
};

export const TitleOnly = {
  args: {
    title: "ПІДТРИМАТИ ФЕНІКС",
    layout: "row",
  },
};

export const WithJSXChildren = {
  args: {
    title: "КОМАНДИР",
    layout: "column",
  },
  render: (args) => (
    <SectionHeader {...args}>
      <div style={{ color: "var(--color-text-secondary)" }}>
        <p>Полковник Олексюк Олександр</p>
        <p>Начальник Головного відділу БпАС</p>
      </div>
    </SectionHeader>
  ),
};
