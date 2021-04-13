import React, { useEffect } from 'react';
import styled from 'styled-components';

import OurTeam from './components/OurTeam';
import {
  Footer,
  Hero,
  Section,
  Navbar,
  ContentContainer,
} from '../../components/layout';
import WhiteBgSubscriber from '../../components/Subscriber/WhiteBgSubscriber';

import SectionBgImg from '../../assets/img/backgrounds/sectionbg.png';
import heroImg from '../../assets/img/backgrounds/about-hero.png';

const IntroText = styled.div`
  position: relative;
  min-height: 300px;
  display: block;

  div {
    margin-top: -150px;
    background: #ffffff;
    border-radius: 14px;
    padding: 64px 8%;
    box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05);

    left: 11%;
    right: 11%;

    p {
      font-weight: 300;
      font-size: 20px;
      line-height: 35px;

      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;

      color: #000000;
    }
  }

  @media only screen and (max-width: 992px) {
    div {
      padding: 60px 40px;
      p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
`;

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main
        style={{
          background: '#FAFAFA',
        }}
      >
        <Hero
          bgImg={heroImg}
          shortInfo='About Tuum'
          intro='From developer tools to decentralized products, Tuum Technologies is building Elastos blockchain infrastructure and applications for a new web that is more open, ethical, and secure.'
          title='Tuum Technologies is a Web3 Technology Company'
        />
        <ContentContainer>
          <IntroText>
            <div>
              <p>
                Tuum Technologies is the world’s leading Elastos software
                company. We enable a global network of entrepreneurs,
                developers, academics, industry experts, and users to access the
                decentralized internet. Through our network we provide teams the
                resources necessary to build revolutionary applications and
                launch decentralized platforms. Elastos is the largest Web3
                provider of open source solutions, employing not only blockchain
                technology, but a peer-to-peer network for communication,
                decentralized data storage services, and a decentralized ID
                system. With Elastos, we are revolutionizing the internet.
              </p>
            </div>
          </IntroText>
          <OurTeam />
        </ContentContainer>

        <Section
          containerStyle={{
            background: `url(${SectionBgImg})`,
          }}
          padding='138px 2rem 0px'
          bgColor='rgb(76, 111, 255, .8)'
          maxWidth='960px'
          txtColor='white'
          txtStyle={{
            color: 'white',
            fontSize: '30px',
            lineHeight: '40px',
          }}
          contentText='Tuum is defined by its Latin origin “yours” - our emphasis is your technology, your data, your Internet. We respect the entrepreneurial drive and team building process; we’re here to stimulate through education, discovery, and development opportunities.'
        >
          <WhiteBgSubscriber />
        </Section>

        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
