import "./globals.css";
import copy from '../assets/json/global.json';
import { Footer } from '@courtneyring/components-library';

export const metadata = {
  title: "Courtney & Matthew | Save the Date",
  description: "Courtney & Matthew | Save the Date",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer {...copy.footer} />
      </body>
    </html>
  );
}
