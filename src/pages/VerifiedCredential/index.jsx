import React from 'react';

import { Navbar, Footer, FooterContainer, Hero } from '../../components/layout';
import Features from './components/Features';
import Explain from './components/Explain';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';

import heroImg from '../../assets/img/backgrounds/credential-hero.png';
import subscriberbgImg from '../../assets/img/subscribers/digialidentity.png';

const VerifiedCredential = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Verifiable Credential Solutions'
          bgImg={heroImg}
          title='Identity Verification With Elastos DID'
          intro='Identity verification with Elastos Decentralized Identity (DID) is an open approach to verifying information about a user while providing the security- and privacy-related benefits of blockchain technology. After verification, these credentials can be used to prove data ownership cross-platform on an open decentralized internet.'
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

export default VerifiedCredential;
