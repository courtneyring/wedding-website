import { Suspense } from 'react';
import FAQs from "./FAQs";

export const metadata = {
  title: "Courtney Ring & Matt Haberlach's Wedding Website | FAQs",
  description:
    "Our wedding weekend will be centered in the historic town of Rhinebeck, New York. It's a small town with lots of shops and restaurants to check out. This page has all the information you need to book your stay in town.",
};


export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <FAQs />
    </Suspense>
  );
}
