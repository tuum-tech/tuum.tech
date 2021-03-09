import React from 'react';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import Features from '../components/sections/Features';
import Section from '../components/Section';

import SectionBgImg from '../assets/img/backgrounds/sectionbg.png';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        {/* <Features /> */}
        <Section contentText='Tuum Technologies is the world’s leading provider of Elastos powered solutions, using education and opportunity to advance projects building a decentralized Internet. We back bold entrepreneurs and developers building a decentralized future from learning through all phases of growth. We connect entrepreneurs, developers, academics, industry experts, and others in the technology ecosystem. Through the Tuum network we provide teams with access to expertise and insights that enhance the Elastos development experience while providing a decentralized Internet for all.' />
        <Section
          bgColor='rgb(76, 111, 255, .8)'
          txtColor='#D5D5DC'
          bgImg={SectionBgImg}
          contentText='Tuum is defined by its Latin origin “yours” - our emphasis is your technology, your data, your Internet. We respect the entrepreneurial drive and team building process; we’re here to stimulate through education, discovery, and development opportunities.'
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
