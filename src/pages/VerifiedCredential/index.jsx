import React from 'react';
import styled from 'styled-components';

import { Navbar, Footer, Hero } from '../../components/layout';
import Features from './components/Features';
import ExplorerMore from './components/ExplorerMore';
import heroImg from '../../assets/img/backgrounds/solutions-hero.png';

const DisplayText = styled.div`
  text-align: center;
  position: relative;
  width: 88%;
  max-width: 950px;
  margin: 130px auto 0px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4a5568;

  @media only screen and (max-width: 992px) {
    width: calc(100% - 4rem);
  }
`;

const VerifiedCredential = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Solutions'
          // bgImg={heroImg}
          title='Verifiable Credentials'
          intro='Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web.'
        />
        <DisplayText>
          Tuum Technologies is the world’s leading provider of Elastos powered
          solutions, using education and opportunity to advance projects
          building a decentralized Internet. We back bold entrepreneurs and
          developers building a decentralized future from learning through all
          phases of growth. We connect entrepreneurs, developers, academics,
          industry experts, and others in the technology ecosystem. Through the
          Tuum network we provide teams with access to expertise and insights
          that enhance the Elastos development experience while providing a
          decentralized Internet for all.
        </DisplayText>
        <Features />
        <ExplorerMore />
      </main>
      <Footer hasSubscriber={false} />
    </>
  );
};

export default VerifiedCredential;
