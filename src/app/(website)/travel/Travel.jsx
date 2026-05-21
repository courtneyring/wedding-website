"use client";

import {
  OverlayHero,
  ImageTextBlock,
  Banner,
  Container,
  Promo,
  PromoGroup,
  Background,
  PinnedImage,
  TextBlock,
  Schedule,
} from "@courtneyring/components-library";
import copy from "@/copy/travel";
import styles from './travel.module.scss';
import classNames from 'classnames';

export default function TravelPage() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth="sm" color="color-white">
        <Banner {...copy.banner} />
      </Container>
      <Container maxWidth="lg" color="color-neutral-light">
        <PromoGroup {...copy.air} />
      </Container>
      <Container styleless>
        <Background image="/images/train.jpg" y={0} />
      </Container>
      <Container color="color-white" maxWidth="lg">
        <PromoGroup {...copy.tracks} />
      </Container>
      {/* <Container color="color-neutral-light" maxWidth="lg">
=        <PinnedImage {...copy.road} />
      </Container> */}
      {/* <Container color="color-neutral-light" maxWidth="sm">
        <TextBlock {...copy.road} />
      </Container> */}
      <Container color="color-primary-medium">
        <ImageTextBlock {...copy.road.parent}>
          {copy.road.body.map((block, idx) => (
            <div key={`road-${idx}`} className={styles.block}>
              <p className={classNames("typography--h3", styles.blockHeader)}>{block.header}</p>
              <p className='typography--body'>{block.description}</p>
              <br></br>
            </div>
          ))}
        </ImageTextBlock>
      </Container>
      {/* <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.bookYourStay} />
      </Container> */}
    </main>
  );
}
