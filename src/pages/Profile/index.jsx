import React from 'react';
import styled from 'styled-components';

import WhiteBoxes from './components/WhiteBoxes';
import Hero from './components/Hero';
import Explain from './components/Explain';
import Technologies from './components/Technologies';
import Features from './components/Features';

import { Navbar, Footer } from '../../components/layout';

const DisplayText = styled.div`
  text-align: center;
  position: relative;
  width: 88%;
  max-width: 950px;
  margin: 105px auto;

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

const VerifiedCredentialPage = () => {
  return (
    <>
      <Navbar navColor='dark' />
      <main>
        <Hero
          shortInfo='Profile'
          title={'A better way to be online'}
          intro={
            'Having multiple profiles is messy. Your personal information is copied and stored on every app. Profile gives you total control of your digital world, in one place. Finally unlock the power of your content online.'
          }
          buttonTxt='Get Started'
        />
        <WhiteBoxes />
        <Technologies />
        <Explain />
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
      </main>
      <Footer />
    </>
  );
};

export default VerifiedCredentialPage;
