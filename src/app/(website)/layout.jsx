"use client";

import copy from "../assets/json/global.json";
import { Footer } from "@courtneyring/components-library";


export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer {...copy.footer} />
    </>
  );
}
