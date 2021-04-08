import React from 'react';

import { Navbar, Footer, FooterContainer, Hero } from '../../components/layout';
import Features from './components/Features';
import Explain from './components/Explain';

import heroImg from '../../assets/img/backgrounds/solutions-hero.png';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';
import subscriberbgImg from '../../assets/img/subscribers/digialidentity.png';

const DigitalIdentityPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Digital Identity Solutions'
          bgImg={heroImg}
          title='Self-Sovereign Digital Identity Online'
          intro='Our lives are now linked to the apps, devices, and services that we use every day. But, with each new digital connection we expose our identity and data to new risks beyond our control.'
        />
        <Explain />
        <Features />
      </main>
      <FooterContainer style={{ marginTop: 150 }}>
        <BgImgSubscriber bgImg={subscriberbgImg} />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default DigitalIdentityPage;
