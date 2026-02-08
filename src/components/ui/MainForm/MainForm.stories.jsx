import { BrowserRouter } from "react-router-dom";
import MainForm from "./MainForm";

export default {
  title: "UI/MainForm",
  component: MainForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ maxWidth: "562px", padding: "40px", background: "#151419" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = {
  args: {
    onSubmit: (data) => console.log("Form submitted:", data),
  },
};

export const CustomLabels = {
  args: {
    labels: {
      name: "Ваше ім'я",
      surname: "Ваше прізвище",
      phone: "Контактний телефон",
      submit: "Надіслати",
    },
    onSubmit: (data) => console.log("Form submitted:", data),
  },
};

export const CustomOptions = {
  args: {
    statusOptions: [
      { value: "student", label: "Студент" },
      { value: "employee", label: "Працівник" },
      { value: "other", label: "Інше" },
    ],
    contactOptions: ["Email", "Телефон", "Viber"],
    onSubmit: (data) => console.log("Form submitted:", data),
  },
};
