import React from 'react';

import WhiteBoxes from './components/WhiteBoxes';
import Solutions from './components/Solutions';
import Feedback from './components/Feedback';
import Features from './components/Features';

import { Navbar, Footer, Hero, Section } from '../../components/layout';
import heroImg from '../../assets/img/backgrounds/home-hero.png';

const VerifiedCredentialPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          bgImg={heroImg}
          title={'The Most Trusted' + '\n' + 'Elastos Blockchain Solutions'}
          intro={
            'Tuum Technologies is the software engineering leader of the Open Decentralized Internet space.' +
            '\n' +
            ' Our suite of Elastos powered products and services help developers build decentralized' +
            '\n' +
            'applications and enable individuals to control data on an open web.'
          }
          buttonTxt='Explore our solutions'
        />
        <WhiteBoxes />
        <Section
          title='Web Based Solutions'
          contentText='Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.'
          maxWidth='600px'
          padding='129px 0 30px'
        />
        <Solutions />
        <Features />
        <Feedback />

        {/* <Section
          bgColor='rgb(76, 111, 255, .8)'
          maxWidth='716px'
          txtColor='#D5D5DC'
          bgImg={SectionBgImg}
          contentText='Tuum is defined by its Latin origin “yours” - our emphasis is your technology, your data, your Internet. We respect the entrepreneurial drive and team building process; we’re here to stimulate through education, discovery, and development opportunities.'
        />
        <Section
          title='Our Team'
          contentText='Our mission is to guide users through a digital transformation from data silos to freedom with responsibility.'
          maxWidth='600px'
          padding='138px 0 0'
        />
        <Section maxWidth='650px' padding='0 0 138px'>
          <OurTeam />
        </Section> */}
      </main>
      <Footer />
    </>
  );
};

export default VerifiedCredentialPage;
