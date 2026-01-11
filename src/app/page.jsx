import Image from "next/image";
import "./theme.scss";
import styles from "./page.module.css";
import { OverlayHero, Banner, ImageTextBlock, Container, Background, Note } from "@courtneyring/components-library";
import content from "../copy/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OverlayHero {...content.hero} />
        {/* <Container color='color-primary-dark' maxWidth='sm'>
          <Note {...content.note} />
        </Container>
        <Background image='/images/background.jpg' y={0}/>
        <Container color="color-neutral-light" maxWidth="lg">
          <ImageTextBlock {...content.imageTextPlanning} />
        </Container> */}
        <Banner {...content.banner} />
      </main>
    </div>
  );
}
