import { BrowserRouter } from "react-router-dom";
import ArrowButton from "./ArrowButton";

export default {
  title: "UI/ArrowButton",
  component: ArrowButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Default = {
  args: {
    link: "/vacancy/1",
  },
};

export const NoLink = {
  args: {},
};
