"use client";

import Image from "next/image";
import "../theme.scss";
import styles from "../page.module.css";
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
} from "@courtneyring/components-library";
import content from "@/copy/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container color="color-neutral-light" styleless>
          <OverlayHero {...content.hero} />
        </Container>
        <Container color="color-primary-dark" maxWidth="sm">
          <Note {...content.note} />
        </Container>
        <Container
          color="color-primary-dark"
          backgroundImage={"/images/hands-background.jpg"}
        >
          <Countdown targetDate="2026-08-29T16:30:00-04:00" />
        </Container>
        {/* <Container color="color-neutral-light" maxWidth="lg">
          <ImageTextBlock {...content.imageTextSchedule} />
        </Container> */}
        <Container color="color-white" maxWidth="lg">
          <ImageTextBlock {...content.imageTextPlanning} />
        </Container>
        <Container styleless>
          <Background image="/images/background.jpg" y={0} />
        </Container>
        <Container color="color-neutral-light" >
          <PromoGroup {...content.nextSteps} />
        </Container>
        <Container color="color-primary-medium" maxWidth="lg">
          <Banner {...content.banner} />
        </Container>
      </main>
    </div>
  );
}
