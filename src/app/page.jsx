'use client';

import Image from "next/image";
import "./theme.scss";
import styles from "./page.module.css";
import { OverlayHero, Banner, ImageTextBlock, Container, Background, Note, PinnedImage } from "@courtneyring/components-library";
import content from "../copy/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OverlayHero {...content.hero} />
        <Container color="color-primary-dark" maxWidth="sm">
          <Note {...content.note} />
        </Container>
        <Background image="/images/background.jpg" y={0} />
        <Container color="color-white" maxWidth="lg">
          <PinnedImage {...content.weekend} />
        </Container>
        <Background image="/images/background.jpg" y={0} />
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
