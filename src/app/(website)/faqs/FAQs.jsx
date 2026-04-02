"use client";

import content from "@/copy/faqs";
import kebabToSentence from '@/utils/kebabToSentence';
import {
  OverlayHero,
  Fifty,
  Banner,
  Container,
  List,
  Overlay,
  GenericOverlay,
  Accordion,
} from "@courtneyring/components-library";
import { Fragment } from 'react';

export default function FAQs() {
  const grouped = content.items.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});

  console.log(grouped)
  return (
    <div>
      <main>
        <Container color="color-neutral-dark" styleless>
          <OverlayHero {...content.hero} />
        </Container>
        <Container maxWidth="sm" color="color-white">
          {Object.entries(grouped).map(([key, value], idx) => (<Fragment key={idx}><Accordion items={value} header={kebabToSentence(key)} color='color-neutral-dark'/></Fragment>))}
        </Container>
      </main>
    </div>
  );
}
