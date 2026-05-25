'use client';

import copy from '@/copy/registry';
import {Banner, Button, Container, ImageTextBlock, OverlayHero, PromoGroup} from '@courtneyring/components-library';
import overrides from '../../overrides.module.scss';

const RegistryPage = ()=> {
  return (
    <main className={overrides.registry}>
      <OverlayHero {...copy.hero} />
      <Container maxWidth='sm' color='color-white'>
        <Banner {...copy.banner}/>
      </Container>
      <Container color="color-neutral-light" maxWidth="lg">
        <PromoGroup {...copy.items} />
      </Container>
      <Container color="color-neutral-light" center>
        <Button
          target="_blank"
          href="https://withjoy.com/mattandcourt/registry"
        >
          See All on WithJoy
        </Button>
      </Container>
      <Container color='color-primary-medium' maxWidth='lg' id='donate'>
        <ImageTextBlock {...copy.cameron}/>
      </Container>
    </main>
  );
}

export default RegistryPage;