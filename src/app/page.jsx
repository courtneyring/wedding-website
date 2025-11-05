import Image from "next/image";
import styles from "./page.module.css";
import { OverlayHero, Banner, ImageTextBlock, Container, BorderedBackground } from "@courtneyring/components-library";
import content from "../copy/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OverlayHero {...content.hero} />

        <Container color="color-white" maxWidth="lg">
            <ImageTextBlock {...content.imageTextVenue} reverse />
        </Container>
        <Container color="color-neutral-light" maxWidth="lg">
          <ImageTextBlock {...content.imageTextPlanning} />
        </Container>
        <Banner {...content.banner} />
      </main>
    </div>
  );
}
