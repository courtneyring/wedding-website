"use client";

import {
  OverlayHero,
  ImageTextBlock,
  Banner,
  Container,
  Promo,
  PromoGroup,
  Background,
  PinnedImage,
} from "@courtneyring/components-library";
import copy from "../../copy/travel";



export default function TravelPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth="sm" color="color-primary-dark">
        <Banner {...copy.banner} />
      </Container>
      <Container maxWidth="lg" color="color-primary-medium">
        <PromoGroup {...copy.air} />
      </Container>
      <Container styleless>
        <Background image="/images/train.jpg" y={0} />
      </Container>
      <Container color="color-white" maxWidth="sm">
        <PromoGroup {...copy.tracks} />
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        {/* <ImageTextBlock {...copy.road} /> */}
        <PinnedImage {...copy.road} />
      </Container>

      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.bookYourStay} />
      </Container>
    </main>
  );
}
