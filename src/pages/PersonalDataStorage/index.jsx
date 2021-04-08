import React from 'react';

import { Navbar, Footer, FooterContainer, Hero } from '../../components/layout';
import Features from './components/Features';
import Explain from './components/Explain';

import heroImg from '../../assets/img/backgrounds/personaldatastorage-hero.png';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';
import subscriberbgImg from '../../assets/img/subscribers/digialidentity.png';

const PersonalDataStorage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Solutions'
          bgImg={heroImg}
          title='Personal Data Storage'
          intro={
            'Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web.'
          }
        />
        <Explain />
        <Features />
      </main>
      <FooterContainer style={{ marginTop: 150 }}>
        <BgImgSubscriber
          bgImg={subscriberbgImg}
          title='Ready to integrate Decentralized Storage into your website?'
          text='Use the Elastos Decentralized Storage (Hive) JS SDK'
          BtnText='Get started'
        />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default PersonalDataStorage;
