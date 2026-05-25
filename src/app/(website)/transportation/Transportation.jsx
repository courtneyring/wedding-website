"use client";

import {
  OverlayHero,
  ImageTextBlock,
  Container,
  Schedule,
  PromoGroup, 
  Map, 
  Background, 
  Banner,
  Spacer
} from "@courtneyring/components-library";

import copy from "@/copy/transportation";
const MapsAPIKey = "AIzaSyAFBFusgZHpLL5j6M4z2J9rDuvfIgtHZrY";
const query = ["W3GP+JR", "W3GP+94", "W3FP+XV"];
const url = `http://www.google.com/maps/embed/v1/place?key=${MapsAPIKey}&q=${query.join(',')}`;
const staticUrl =
  "//maps.googleapis.com/maps/api/staticmap?center=51.477222,0&zoom=14&size=400x400&key=AIzaSyA3kg7YWugGl1lTXmAmaBGPNhDW9pEh5bo&signature=ciftxSv4681tGSAnes7ktLrVI3g=";

export default function Transportation() {
  return (
    <main>
      <OverlayHero {...copy.hero} />
      <Container color="color-white" maxWidth="sm">
        <Banner {...copy.intro} />
      </Container>
      {/* <Container color="color-white" style={{ height: "50vh" }}> */}
        <Map {...copy.map}/>
      {/* </Container> */}

      <Container color="color-primary-dark" maxWidth='lg'>
        <h2 className="typography--h2" style={{width: '100%', textAlign: 'center', marginBottom: '20px'}}>Shuttle</h2>
        <ImageTextBlock {...copy.shuttle.toMilea} >
          <Schedule {...copy.shuttle.toMilea.schedule} />
        </ImageTextBlock>
        <Spacer height='50px' />
        <ImageTextBlock {...copy.shuttle.fromMilea} >
          <Schedule {...copy.shuttle.fromMilea.schedule} />
        </ImageTextBlock>
      </Container>
      <Container styleless>
        <Background image="/images/kissing-cheek.jpg" pos='74% 74%' />
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <PromoGroup {...copy.car} />
      </Container>
      <Container color="color-primary-medium" maxWidth="lg" backgroundImage='/images/holding-hands.jpg' backgroundPosition='50% 70%'>
        <Banner {...copy.planYourStay} />
      </Container>
    </main>
  );
}
