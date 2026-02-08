import { BrowserRouter } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";

export default {
  title: "UI/SecondaryBtn",
  component: SecondaryBtn,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: "fit-content" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["l", "m"],
    },
  },
};

export const Large = {
  args: {
    text: "Підтримати",
    size: "l",
  },
};

export const Medium = {
  args: {
    text: "Приєднатися",
    size: "m",
  },
};

export const WithLink = {
  args: {
    text: "Дізнатись більше",
    href: "/about",
    size: "l",
  },
};

export const WithHashLink = {
  args: {
    text: "До вакансій",
    href: "#jobs",
    size: "l",
  },
};
