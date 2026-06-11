'use client';
import "./theme.scss";
import "./globals.scss";
import overrides from './overrides.module.scss';


import { GoogleAnalytics } from "@next/third-parties/google";


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
      <body className={overrides.root}>
        {/* {devBuild && <Toolbar />}
        <WeddingNavbar /> */}
        {children}
      </body>
      <GoogleAnalytics gaId={analyticsId} />
    </html>
  );
}
