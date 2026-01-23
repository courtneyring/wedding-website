"use client";

import {
  OverlayHero,
  Fifty,
  Banner,
  Container,
  List,
  Overlay,
  GenericOverlay,
} from "@courtneyring/components-library";
import copyOriginal from "../../copy/accommodations";
import { createPortal } from "react-dom";
import { useState, Fragment } from "react";

export default function AccommodationsPage() {
  const [modalIsOpen, toggleModal] = useState(false);

  const handleBeekmanClick = () => {
    toggleModal(true);
  };

  const copy = {
    ...copyOriginal,
    fifties: copyOriginal.fifties.map((item) => ({
      ...item,
      cta:
        item.heading === "Beekman Arms Delamater Inn"
          ? { ...item.cta, fn: handleBeekmanClick }
          : item.cta,
    })),
  };

  console.log(copy);

  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.banner} />
      </Container>
      {/* <Container maxWidth='sm' color='color-primary-dark'>
        <List {...copy.list}/>
      </Container> */}
      {copy.fifties.map((fifty, idx) => (
        <Fragment key={`fifty-${idx}`}>
          <Fifty {...fifty}></Fifty>
          {modalIsOpen &&
            fifty.overlay &&
            createPortal(
              <Overlay closeFn={() => toggleModal(false)} hideClose={false}>
                <GenericOverlay {...fifty.overlay} />
              </Overlay>,
              window.document.body,
            )}
        </Fragment>
      ))}
      <Container maxWidth="sm" color="color-primary-medium">
        <Banner {...copy.bookYourStay} />
      </Container>
    </main>
  );
}
