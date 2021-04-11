import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Solutions from './components/Solutions';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';

import {
  Navbar,
  Footer,
  Hero,
  Section,
  ContentContainer,
} from '../../components/layout';
import { SplitWrap, SplitItem, SplitTitle } from '../../components/SplitComp';
import { LinkButton, WhiteBoxArea, WhiteBox } from './components/Elements';

import heroImg from '../../assets/img/backgrounds/home-hero.png';
import subscriberbgImg from '../../assets/img/subscribers-home.png';
import profileImg from '../../assets/img/explain-profile.png';
import getdidsImg from '../../assets/img/explain-getdids.png';

const FeaturesContainer = styled.div`
  background: #e5e5e5;

  .split-wrapp {
    padding: 0px 2rem;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    display: block;
    position: relative;
  }
`;

const VerifiedCredentialPage = () => {
  const profileRef = useRef(null);
  const didRef = useRef(null);
  const history = useHistory();

  return (
    <>
      <Navbar />

      <main>
        <Hero
          bgImg={heroImg}
          title='The Most Trusted Elastos Blockchain Solutions'
          intro='Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web.'
          leftAlign={false}
        />
        <ContentContainer>
          <WhiteBoxArea>
            <WhiteBox>
              <p className='title'>Profile</p>
              <p className='description'>
                Profile is a new type of digital identity owned by you - where
                genuine connections happen, and real-world networking begins
                online.
              </p>
              <LinkButton onClick={() => profileRef.current.scrollIntoView()}>
                Learn more
              </LinkButton>
            </WhiteBox>
            <WhiteBox>
              <p className='title'>Get a DID</p>
              <p className='description'>
                Log in, save your security words, and publish a new digital
                identity to the blockchain – that’s it!
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <LinkButton onClick={() => didRef.current.scrollIntoView()}>
                Get a DID
              </LinkButton>
            </WhiteBox>
            <WhiteBox>
              <p className='title'>About us</p>
              <p className='description'>
                Our mission is to guide users through a digital transformation
                from data silos to freedom with responsibility.
              </p>
              <LinkButton
                onClick={() => {
                  history.push('/about');
                }}
              >
                Learn more
              </LinkButton>
            </WhiteBox>
          </WhiteBoxArea>
          <Section
            title='Web Based Solutions'
            contentText='Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.'
            maxWidth='760px'
            padding='30px 0 20px'
            bgColor='white'
          />
          <Solutions />
        </ContentContainer>
        <BgImgSubscriber bgImg={subscriberbgImg} />
        <FeaturesContainer>
          <SplitTitle>Featured Products</SplitTitle>
          <SplitWrap className='split-wrapp'>
            <div className='features-split-inner section-inner'>
              <div className='split-wrap'>
                <div ref={profileRef}>
                  <SplitItem
                    imgSrc={getdidsImg}
                    introOne='Decentralized Identity'
                    title='getdids.com'
                    description='Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.'
                    onClick={() =>
                      (window.location.href = 'https://www.getdids.com/')
                    }
                    btnText='Get started'
                  />
                </div>
                <div ref={didRef}>
                  <SplitItem />
                  <SplitItem
                    imgSrc={profileImg}
                    introOne='Identity Platform'
                    title='Profile'
                    description='Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.'
                    onClick={() => history.push('/products/profile')}
                    btnText='Learn More'
                  />
                </div>
              </div>
            </div>
          </SplitWrap>
        </FeaturesContainer>
      </main>
      <BgImgSubscriber bgColor='#e5e5e5' bgImg={subscriberbgImg} />
      <Footer />
    </>
  );
};

export default VerifiedCredentialPage;
