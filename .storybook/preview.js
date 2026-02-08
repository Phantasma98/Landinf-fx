import "../src/styles/globals.css";

const fenixViewports = {
  mobile: {
    name: "Mobile (390px)",
    styles: { width: "390px", height: "844px" },
    type: "mobile",
  },
  tablet: {
    name: "Tablet (744px)",
    styles: { width: "744px", height: "1133px" },
    type: "tablet",
  },
  desktop: {
    name: "Desktop (1440px)",
    styles: { width: "1440px", height: "900px" },
    type: "desktop",
  },
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#151419" },
        { name: "surface", value: "#1B1A1F" },
        { name: "light", value: "#FBFBFB" },
      ],
    },
    viewport: {
      options: fenixViewports,
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
