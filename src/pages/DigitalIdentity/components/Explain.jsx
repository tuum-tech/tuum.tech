import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../../../components/buttons/ShadowButton';

import proofofownership from '../../../assets/img/proofofownership.png';
import bringdata from '../../../assets/img/bringdata.png';
import tamperproof from '../../../assets/img/tamperproof.png';

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px 11% 0px;
`;

export const LeftSide = styled.div`
  margin-top: 40px;
  .title {
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: #17171b;

    margin-bottom: 27px;
  }
  .text {
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.02em;

    color: #4a5568;
    margin-bottom: 35px;
  }
`;

export const RightSide = styled.div`
  padding-left: 40px;
  margin-top: 40px;

  .row {
    display: flex;
    margin-left: 0;
    margin-right: 0;
  }

  img {
    width: 120px;
    height: 120px;
  }

  .text-area {
    margin-left: 20px;
    width: calc(100% - 140px);

    .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #17171b;
      margin-bottom: 20px;
      max-width: 260px;
    }

    .text {
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      color: #4a5568;
    }
  }

  @media only screen and (max-width: 992px) {
    padding-left: 15px;
  }

  @media only screen and (max-width: 678px) {
    .row {
      flex-direction: column;
      align-items: center;
    }
    .text-area {
      margin-top: 40px;
      text-align: center;
    }
  }
`;

const ExplorerMore = () => {
  return (
    <Container className='row'>
      <LeftSide className='col-lg-6'>
        <p className='title'>What are Decentralized Identities (DIDs)?</p>
        <p className='text'>
          These are IDs users create, own, and control completely independent of
          any business or government. Each new DID is issued by an autonomous,
          independent, and decentralized platform that acts as proof of
          ownership for the digital identity.
        </p>
        <ShadowButton
          text='Learn more at Elastos Official'
          style={{
            width: '186px',
            height: '36px',
            lineHeight: '36px',
            marginTop: '20px',
            marginBottom: '20px',
            background: '#4C6FFF',
          }}
          shadowBg='rgba(23, 23, 27, 0.3)'
          onClick={() => {}}
        />
      </LeftSide>
      <RightSide className='col-lg-6'>
        <div className='row mb-4'>
          <img src={proofofownership} alt='proofofownership' />
          <div className='text-area'>
            <p className='title'>Proof of Ownership</p>
            <p className='text'>
              Elastos Decentralized Identities (DIDs) provide independent proof
              of ownership to every user and enable every individual to generate
              a DID. In essence, DID is at the heart of Web3’s operational
              mechanism that enables individuals to “own their own data.”
            </p>
          </div>
        </div>
        <div className='row mb-4'>
          <img src={tamperproof} alt='tamperproof' />
          <div className='text-area'>
            <p className='title'>
              Tamper-Proof, Interoperable Identification for Everyone.
            </p>
            <p className='text'>
              Today’s internet is dominated by large companies that make you log
              in with their in-house logins to access your data. An open source
              Universal ID (UID) system like Elastos Decentralized Identities
              (DIDs) allows you to trust code - not corporations controlling
              your data.
            </p>
          </div>
        </div>
        <div className='row mb-4'>
          <img src={bringdata} alt='bringdata' />
          <div className='text-area'>
            <p className='title'>Bring Data Back to its Owners!</p>
            <p className='text'>
              By issuing Universal IDs (UIDs) to everyone on the internet,
              blockchain automates trust. In a blockchain-based system of
              exchange, transactions occur only between individuals, thereby
              dissolving central authorities and intermediaries.
            </p>
          </div>
        </div>
      </RightSide>
    </Container>
  );
};

export default ExplorerMore;
