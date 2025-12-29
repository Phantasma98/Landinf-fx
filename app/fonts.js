// app/fonts.js
import localFont from "next/font/local";

export const kordon = localFont({
  src: [
    {
      path: "./fonts/Kordon/Kordon-Regular.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Kordon/Kordon-Bold.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Kordon/Kordon-CondBold.otf",
      weight: "700",
      style: "initial",
    },

    {
      path: "./fonts/Kordon/Kordon-Medium.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/Kordon/Kordon-Navigation5.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-kordon", // CSS variable for easy use in plain CSS
  display: "swap", // Optional: controls font-display behavior
});
