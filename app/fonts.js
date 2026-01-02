// app/fonts.js
import localFont from "next/font/local";

export const kordon = localFont({
  src: [
    {
      path: "./fonts/Kordon/Kordon-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kordon/Kordon-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Kordon/Kordon-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kordon",
  display: "swap",
});

export const kordonCond = localFont({
  src: [
    {
      path: "./fonts/Kordon//Kordon-CondRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kordon/Kordon-CondMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Kordon/Kordon-CondBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kordon-cond",
  display: "swap",
});
