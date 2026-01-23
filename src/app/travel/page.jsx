"use client";

import {
  OverlayHero,
  ImageTextBlock,
  Banner,
  Container,
  Promo,
  PromoGroup,
} from "@courtneyring/components-library";
import copy from "../../copy/travel";
import { Fragment } from "react";

export default function TravelPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.banner} />
      </Container>
      <Container maxWidth="lg" color="color-neutral-light">
        <PromoGroup header={copy.air.header}>
          {copy.air.promos.map((c, idx) => (
            <Promo {...c}></Promo>
          ))}
        </PromoGroup>
      </Container>
      <Container color="color-white" maxWidth="lg">
        <ImageTextBlock {...copy.road} />
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <PromoGroup header={copy.tracks.header}>
          {copy.tracks.promos.map((c, idx) => (
            <Promo {...c}></Promo>
          ))}
        </PromoGroup>
      </Container>
      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.bookYourStay} />
      </Container>
    </main>
  );
}
