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
import { sendButtonEvent } from "@/utils/analytics";
import copyOriginal from "../../copy/accommodations";
import { createPortal } from "react-dom";
import { useState, Fragment, useEffect } from "react";

import { useSearchParams } from "next/navigation";


export default function AccommodationsPage() {
  const [modalIsOpen, toggleModal] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    toggleModal(searchParams.get("beekmanModal"));
  }, [searchParams]);

  const handleBeekmanClick = (val) => {
    let bodyStyle = val ? "hidden" : "unset";
    document.body.style.overflow = bodyStyle;
    sendButtonEvent("beekman-modal");
    toggleModal(val);
  };

  const copy = {
    ...copyOriginal,
    fifties: copyOriginal.fifties.map((item) => ({
      ...item,
      // Replace single 'cta' with 'ctas' array
      ctas: item.ctas
        ? item.ctas.map((cta) =>
            item.heading === "Beekman Arms Delamater Inn" &&
            !cta.href &&
            !cta.value
              ? { ...cta, fn: () => handleBeekmanClick(true) }
              : cta,
          )
        : [],
    })),
  };

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
              <Overlay
                closeFn={() => toggleModal(false)}
                hideClose={false}
                fullscreen={false}
              >
                {/* <Container maxWidth="sm" color="color-white"> */}
                <GenericOverlay {...fifty.overlay} />
                {/* </Container> */}
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
