
'use client';

import {
  OverlayHero,
  ImageTextBlock,
  Banner,
  Container,
  Promo, 
  PromoGroup
} from "@courtneyring/components-library";
import copy from "../../copy/travel";

export default function TravelPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.banner} />
      </Container>
      <Container maxWidth="lg" color="color-neutral-light">
        <PromoGroup>
          {copy.air.map(c =><Promo {...c}></Promo>)}
        </PromoGroup>
      </Container>
      <Container color="color-white" maxWidth="lg">
        <ImageTextBlock {...copy.road} />
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <ImageTextBlock {...copy.tracks} />
      </Container>
    </main>
  );
}
