'use client';

import content from "@/copy/schedule";
import {
  OverlayHero,
  Fifty,
  Banner,
  Container,
  List,
  Overlay,
  GenericOverlay,
} from "@courtneyring/components-library";
import { Fragment } from "react";

export default function SchedulePage() {
  return (
    <div>
      <main>
        <Container color="color-neutral-light" styleless>
          <OverlayHero {...content.hero} />
        </Container>
        <Container maxWidth="sm" color="color-primary-dark">
          <Banner {...content.banner} />
        </Container>

        {content.sections.map((section, idx) => (
          <Fragment key={`section-${idx}`}>
            <Fifty {...section}></Fifty>
          </Fragment>
        ))}
        <Container color="color-primary-medium" maxWidth="lg">
          <Banner {...content.bookend} />
        </Container>
      </main>
    </div>
  );
}
