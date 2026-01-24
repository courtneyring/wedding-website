import "./theme.scss";
import "./globals.css";
import copy from "../assets/json/global.json";
import { Navbar, Footer } from "@courtneyring/components-library";

export const metadata = {
  title: "Courtney & Matt | 08.29.2026",
  description: "Courtney & Matt | 08.29.2026",
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
        <Navbar
          links={[
            { label: "Hotels", value: "/accommodations" },
            { label: "Travel", value: "/travel" },
          ]}
          logoImage='/images/cmlogo.svg'
        />
        {children}
        <Footer {...copy.footer} />
      </body>
    </html>
  );
}
