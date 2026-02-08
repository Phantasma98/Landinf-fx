import { useState } from "react";
import FormSelect from "./FormSelect";

export default {
  title: "UI/FormSelect",
  component: FormSelect,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "562px" }}>
        <Story />
      </div>
    ),
  ],
};

const FormSelectWrapper = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <FormSelect
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const ContactMethods = {
  render: FormSelectWrapper,
  args: {
    placeholder: "Бажаний спосіб зв'язку",
    options: ["WhatsApp", "Signal", "Viber", "Telegram", "Дзвінок рекрутера"],
  },
};

export const WithError = {
  render: FormSelectWrapper,
  args: {
    placeholder: "Бажаний спосіб зв'язку",
    options: ["WhatsApp", "Signal", "Viber", "Telegram", "Дзвінок рекрутера"],
    error: true,
    errorMessage: "Обов'язкове поле",
  },
};

export const WithValue = {
  render: FormSelectWrapper,
  args: {
    placeholder: "Бажаний спосіб зв'язку",
    options: ["WhatsApp", "Signal", "Viber", "Telegram", "Дзвінок рекрутера"],
    value: "Telegram",
  },
};
