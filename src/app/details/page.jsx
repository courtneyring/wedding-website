import styles from "./page.module.scss";
import { OverlayHero, Fifty, Banner, Container, List } from "@courtneyring/components-library";
import copy from "../../copy/details";

export default function DetailPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth='sm' color='color-primary-medium'>
        <Banner {...copy.banner} />
      </Container>
      <Container maxWidth='sm' color='color-primary-dark'>
        <List {...copy.list}/>
      </Container>
      {copy.fifties.map((fifty, idx) => (
        <Fifty {...fifty} key={`fifty-${idx}`}></Fifty>
      ))}
    </main>
  );
};
