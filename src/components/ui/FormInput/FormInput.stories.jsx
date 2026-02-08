import { useState } from "react";
import FormInput from "./FormInput";

export default {
  title: "UI/FormInput",
  component: FormInput,
};

const FormInputWrapper = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <div style={{ maxWidth: "350px" }}>
      <FormInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default = {
  render: FormInputWrapper,
  args: {
    placeholder: "Ім'я",
  },
};

export const Phone = {
  render: FormInputWrapper,
  args: {
    type: "tel",
    placeholder: "+38 (0__) ___ __ __",
  },
};

export const Email = {
  render: FormInputWrapper,
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const WithError = {
  render: FormInputWrapper,
  args: {
    placeholder: "Ім'я",
    error: true,
    errorMessage: "Обов'язкове поле",
  },
};

export const WithValue = {
  render: FormInputWrapper,
  args: {
    placeholder: "Ім'я",
    value: "Олександр",
  },
};
