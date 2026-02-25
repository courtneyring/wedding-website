'use client';

import "./theme.scss";
import "./globals.css";
import copy from "../assets/json/global.json";
import { Footer, Toolbar } from "@courtneyring/components-library";
import { GoogleAnalytics } from "@next/third-parties/google";
import WeddingNavbar from '@/components/WeddingNavbar/WeddingNavbar';

export default function RootLayout({ children }) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
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
        <Toolbar />
        <WeddingNavbar />
        {children}
      </body>
      <GoogleAnalytics gaId={analyticsId} />
    </html>
  );
}
