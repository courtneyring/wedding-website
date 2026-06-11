"use client";

import Image from "next/image";
import "../../theme.scss";
import styles from "../../page.module.css";
import overrides from "../../overrides.module.scss";
import {
  OverlayHero,
  Banner,
  ImageTextBlock,
  Container,
  Background,
  Note,
  ParallaxImageGrid,
  PinnedImage,
  PromoGroup,
  Countdown,
  FloatingWordsHero,
} from "@courtneyring/components-library";
import content from "@/copy/home";

export default function Home() {
  return (
    <main className={overrides.home}>
      <Container color="color-neutral-light" styleless>
        <FloatingWordsHero {...content.hero} />
      </Container>
      <Container color="color-primary-dark" maxWidth="sm" id='note'>
        <Note {...content.note} />
      </Container>
      <Container
        color="color-primary-dark"
        backgroundImage={content.countdown.backgroundImage}
        backgroundPosition={content.countdown.backgroundPosition}
        maxWidth='lg'
        hide={new Date(content.countdown.targetDate) - new Date() <= 0}
      >
        <Countdown targetDate={content.countdown.targetDate} />
      </Container>
      <Container color="color-white" maxWidth="lg">
        <ImageTextBlock {...content.imageTextPlanning} />
      </Container>
      <Container styleless>
        <Background image="/images/holding-hands-3.jpeg" y={0} pos='50% 60%'/>
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <PromoGroup {...content.nextSteps} />
      </Container>

      <Container color="color-primary-medium" maxWidth="lg">
        <Banner {...content.banner} />
      </Container>
    </main>
  );
}
