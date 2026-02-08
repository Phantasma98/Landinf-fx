import { useState } from "react";
import TabButtons from "./TabButtons";

export default {
  title: "UI/TabButtons",
  component: TabButtons,
  decorators: [
    (Story) => (
      <div style={{ width: "722px" }}>
        <Story />
      </div>
    ),
  ],
};

const TabButtonsWrapper = (args) => {
  const [activeItem, setActiveItem] = useState(args.activeItem || args.items[0]);
  return (
    <TabButtons
      {...args}
      activeItem={activeItem}
      onSelect={setActiveItem}
    />
  );
};

export const PaymentMethods = {
  render: TabButtonsWrapper,
  args: {
    items: ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"],
    activeItem: "MONOBANK",
  },
};

export const Categories = {
  render: TabButtonsWrapper,
  args: {
    items: ["БПЛА", "НРК", "РЕБ / РЕР", "МАЙСТЕРНЯ", "IT"],
    activeItem: "БПЛА",
  },
};

export const TwoItems = {
  render: TabButtonsWrapper,
  args: {
    items: ["УКРАЇНСЬКА", "ENGLISH"],
    activeItem: "УКРАЇНСЬКА",
  },
};
