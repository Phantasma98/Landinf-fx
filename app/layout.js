// import { Geist, Geist_Mono } from "next/font/google";
import { kordon } from "./fonts";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Feniks - ДПСУ",
  description:
    "Головний відділ безпілотних авіаційних систем державної прикордонної служби України",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kordon.variable}`}>{children}</body>
    </html>
  );
}
