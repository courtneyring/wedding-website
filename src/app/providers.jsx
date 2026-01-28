"use client";

import { NavThemeProvider } from "@courtneyring/components-library";

export default function Providers({ children }) {
  return <NavThemeProvider>{children}</NavThemeProvider>;
}
