// app/fonts.js
import localFont from "next/font/local";

export const cordon = localFont({
  src: [
    {
      path: "./fonts/Kordon/Kordon-CondRegular.otf",
      weight: "400",
      style: "cond",
    },
    {
      path: "./fonts/Kordon/Kordon-CondBold.otf",
      weight: "700",
      style: "cond",
    },
  ],
  variable: "--font-cordon", // CSS variable for easy use in plain CSS
  display: "swap", // Optional: controls font-display behavior
});
