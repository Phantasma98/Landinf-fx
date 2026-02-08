import { BrowserRouter } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

export default {
  title: "UI/PrimaryBtn",
  component: PrimaryBtn,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["l", "m", "s"],
    },
  },
};

export const Large = {
  args: {
    text: "Приєднатися",
    size: "l",
  },
};

export const Medium = {
  args: {
    text: "Приєднатися",
    size: "m",
  },
};

export const Small = {
  args: {
    text: "Приєднатися",
    size: "s",
  },
};

export const WithLink = {
  args: {
    text: "Дізнатись більше",
    href: "/about",
    size: "l",
  },
};
