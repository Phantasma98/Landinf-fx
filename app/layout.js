import { kordon, kordonCond } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Feniks - ДПСУ",
  description:
    "Головний відділ безпілотних авіаційних систем державної прикордонної служби України",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kordon.variable} ${kordonCond.variable}`}>
        {children}
      </body>
    </html>
  );
}
