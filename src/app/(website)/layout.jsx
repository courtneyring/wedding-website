// "use client";

import copy from "@/assets/json/global.json";
import { Footer } from "@courtneyring/components-library";

export const metadata = {
  title: "Courtney Ring & Matt Haberlach's Wedding Website",
};


export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer {...copy.footer} />
    </>
  );
}
