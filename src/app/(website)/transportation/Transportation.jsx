"use client";

import {
  OverlayHero,
  ImageTextBlock,
  Container,
  Schedule,
  PromoGroup
} from "@courtneyring/components-library";

import copy from "@/copy/transportation";

export default function TransportationPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      {/* <Container maxWidth="sm" color="color-white">
        <Banner {...copy.banner} />
      </Container>
      */}
      <Container color="color-white">
        <ImageTextBlock {...copy.shuttle.imageText}>
          <Schedule {...copy.shuttle.toMilea} />
          <Schedule {...copy.shuttle.fromMilea} />
        </ImageTextBlock>
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <PromoGroup {...copy.car} />
      </Container>
    </main>
  );
}
