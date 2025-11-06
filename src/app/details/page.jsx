import styles from "./page.module.scss";
import { OverlayHero, Fifty } from "@courtneyring/components-library";
import copy from "../../copy/details";

export default function DetailPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      {copy.fifties.map((fifty) => (
        <Fifty {...fifty}></Fifty>
      ))}
    </main>
  );
};
