import "./theme.scss";
import "./globals.css";
import copy from "../assets/json/global.json";
import { Footer } from "@courtneyring/components-library";

export const metadata = {
  title: "Courtney & Matthew | Save the Date",
  description: "Courtney & Matthew | Save the Date",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer {...copy.footer} />
      </body>
    </html>
  );
}
