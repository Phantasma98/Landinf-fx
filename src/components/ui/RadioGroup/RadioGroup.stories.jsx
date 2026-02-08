import { useState } from "react";
import RadioGroup from "./RadioGroup";

export default {
  title: "UI/RadioGroup",
  component: RadioGroup,
};

const RadioGroupWrapper = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Status = {
  render: RadioGroupWrapper,
  args: {
    name: "status",
    options: ["Я цивільний", "Я військовий", "Я в СЗЧ"],
  },
};

export const WithSelected = {
  render: RadioGroupWrapper,
  args: {
    name: "status",
    options: ["Я цивільний", "Я військовий", "Я в СЗЧ"],
    value: "Я цивільний",
  },
};

export const WithError = {
  render: RadioGroupWrapper,
  args: {
    name: "status",
    options: ["Я цивільний", "Я військовий", "Я в СЗЧ"],
    error: true,
    errorMessage: "Оберіть статус",
  },
};

export const TwoOptions = {
  render: RadioGroupWrapper,
  args: {
    name: "gender",
    options: ["Чоловік", "Жінка"],
  },
};
