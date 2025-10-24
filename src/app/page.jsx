import Image from "next/image";
import styles from "./page.module.css";
import { OverlayHero, Banner } from "@courtneyring/components-library";
import content from "../assets/json/home.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OverlayHero {...content.hero} />
        <Banner {...content.banner} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
