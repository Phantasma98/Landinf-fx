import { useState } from "react";
import FaqItem from "./FaqItem";

export default {
  title: "UI/FaqItem",
  component: FaqItem,
  decorators: [
    (Story) => (
      <div style={{ width: "1250px" }}>
        <Story />
      </div>
    ),
  ],
};

const FaqItemWrapper = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  return <FaqItem {...args} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
};

export const Closed = {
  render: FaqItemWrapper,
  args: {
    question: "Чи потрібен досвід для вступу?",
    answer:
      "Ні, досвід не обов'язковий. Ми проводимо повний курс підготовки для всіх новобранців. Головне - бажання вчитися та працювати в команді.",
    isOpen: false,
  },
};

export const Open = {
  render: FaqItemWrapper,
  args: {
    question: "Чи потрібен досвід для вступу?",
    answer:
      "Ні, досвід не обов'язковий. Ми проводимо повний курс підготовки для всіх новобранців. Головне - бажання вчитися та працювати в команді.",
    isOpen: true,
  },
};

export const LongQuestion = {
  render: FaqItemWrapper,
  args: {
    question: "Які документи потрібні для оформлення контракту на військову службу?",
    answer:
      "Для оформлення контракту потрібні: паспорт громадянина України, ідентифікаційний код, військовий квиток або приписне свідоцтво, документ про освіту.",
    isOpen: false,
  },
};
