import React from 'react';

import WhiteBoxes from './components/WhiteBoxes';
import Solutions from './components/Solutions';
import Features from './components/Features';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';

import {
  Navbar,
  Footer,
  FooterContainer,
  Hero,
  Section,
} from '../../components/layout';
import heroImg from '../../assets/img/backgrounds/home-hero.png';
import subscriberbgImg from '../../assets/img/subscribers/home.png';

const VerifiedCredentialPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ background: 'white' }}>
        <Hero
          bgImg={heroImg}
          title='The Most Trusted Elastos Blockchain Solutions'
          intro='Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web.'
          leftAlign={false}
        />
        <WhiteBoxes />
        <Section
          title='Web Based Solutions'
          contentText='Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.'
          maxWidth='600px'
          padding='129px 0 30px'
          bgColor='white'
        />
        <Solutions />
        <Features />
      </main>
      <FooterContainer style={{ marginTop: 150 }}>
        <BgImgSubscriber bgImg={subscriberbgImg} />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default VerifiedCredentialPage;
