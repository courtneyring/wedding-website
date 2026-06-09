import { Suspense } from 'react';
import FAQs from "./FAQs";

export const metadata = {
  title: "Courtney Ring & Matt Haberlach's Wedding Website | FAQs",
  description:
    "Everything you need to know before the big day.Get answers to frequently asked questions about our wedding weekend.",
};


export default function PageWrapper() {
  return (
    <Suspense fallback={null}>
      <FAQs />
    </Suspense>
  );
}
