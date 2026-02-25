"use client";
import {
  RSVPEmbed,
  OverlayHero,
  Container,
} from "@courtneyring/components-library";
import copy from "@/copy/rsvp";

const RSVPPage = () => {
  return (
    <main>
      {/* <OverlayHero {...copy.hero} /> */}
      <Container
        color="color-white"
        backgroundImage="/images/accommodations-hero.jpg"
        fullHeight
        styleless
        center
      >
        <RSVPEmbed {...copy.rsvp} />
      </Container>
    </main>
  );
};

export default RSVPPage;
