import React from 'react';
import styled from 'styled-components';

import OurTeam from './components/OurTeam';
import {
  FooterContainer,
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
  return (
    <>
      <Navbar />
      <main>
        <Hero
          bgImg={heroImg}
          shortInfo='About Tuum'
          intro='From developer tools to decentralized products, Tuum Technologies is building Elastos blockchain infrastructure and applications for a new web that is more open, ethical, and secure.'
          title='Tuum Technologies is a Web 3.0 Technology Company'
        />
        <ContentContainer>
          <IntroText>
            <div>
              <p>
                Tuum Technologies is the world’s leading provider of Elastos
                powered solutions, using education and opportunity to advance
                projects building a decentralized Internet. We back bold
                entrepreneurs and developers building a decentralized future
                from learning through all phases of growth. We connect
                entrepreneurs, developers, academics, industry experts, and
                others in the technology ecosystem. Through the Tuum network we
                provide teams with access to expertise and insights that enhance
                the Elastos development experience while providing a
                decentralized Internet for all.
              </p>
            </div>
          </IntroText>
          <OurTeam />
        </ContentContainer>

        <Section
          containerStyle={{
            background: `url(${SectionBgImg})`,
          }}
          padding='138px 0 238px'
          bgColor='rgb(76, 111, 255, .8)'
          maxWidth='960px'
          txtColor='white'
          txtStyle={{
            color: 'white',
            fontSize: '30px',
            lineHeight: '40px',
          }}
          contentText='Tuum is defined by its Latin origin “yours” - our emphasis is your technology, your data, your Internet. We respect the entrepreneurial drive and team building process; we’re here to stimulate through education, discovery, and development opportunities.'
        />
      </main>
      <FooterContainer>
        <WhiteBgSubscriber />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default AboutPage;
