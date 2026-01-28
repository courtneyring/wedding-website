"use client";

import Image from "next/image";
import "./theme.scss";
import styles from "./page.module.css";
import {
  OverlayHero,
  Banner,
  ImageTextBlock,
  Container,
  Background,
  Note,
  ImageScroller,
  PinnedImage,
} from "@courtneyring/components-library";
import content from "../copy/home";

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
        <Container color="color-primary-medium" maxWidth="lg">
          <ImageScroller {...content.imageScroller} />
        </Container>
        <Container color="color-neutral-light">
          <PinnedImage {...content.weekend} />
        </Container>
        <Container styleless color='color-primary-dark'>
          <Background image="/images/background.jpg" y={0} />
        </Container>

        <Container color="color-neutral-light" maxWidth="lg">
          <ImageTextBlock {...content.imageTextPlanning} />
        </Container>
        <Container color="color-primary-medium" maxWidth="lg">
          <Banner {...content.banner} />
        </Container>
      </main>
    </div>
  );
}
