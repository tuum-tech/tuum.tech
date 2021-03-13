import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import Features from '../components/sections/Features';
import Section from '../components/Section';
import Subscriber from '../components/Subscriber';
import OurTeam from '../components/OurTeam';

import SectionBgImg from '../assets/img/backgrounds/sectionbg.png';
import HomeHero from '../assets/img/backgrounds/home-hero.png';
import heroImg from '../assets/img/backgrounds/home-hero.png';

const HomePage = () => {
  return (
    <>
      <NavBar />
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

        {/* <Features /> */}
        <Section
          contentText='Tuum Technologies is the world’s leading provider of Elastos powered solutions, using education and opportunity to advance projects building a decentralized Internet. We back bold entrepreneurs and developers building a decentralized future from learning through all phases of growth. We connect entrepreneurs, developers, academics, industry experts, and others in the technology ecosystem. Through the Tuum network we provide teams with access to expertise and insights that enhance the Elastos development experience while providing a decentralized Internet for all.'
          maxWidth='971px'
        />
        <Section
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
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
