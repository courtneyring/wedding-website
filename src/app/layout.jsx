import "./theme.scss";
import "./globals.css";
import copy from "../assets/json/global.json";
import { Navbar, Footer, Toolbar } from "@courtneyring/components-library";
import CMIcon from "../icons/logo.jsx";

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
        <meta
          name="apple-mobile-web-app-title"
          content="Courtney&nbsp;&&nbsp;Matt"
        />
      </head>
      <body>
        {/* <Toolbar /> */}
        <Navbar
          links={[
            { label: "Home", value: "/" },
            { label: "Hotels", value: "/accommodations" },
            { label: "Travel", value: "/travel" },
          ]}
          logoComponent={<CMIcon />}
        ></Navbar>
        {children}
        <Footer {...copy.footer} />
      </body>
    </html>
  );
}
