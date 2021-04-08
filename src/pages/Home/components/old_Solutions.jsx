import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../../../components/buttons/ShadowButton';
import solutionimg from '../../../assets/img/identity.png';

const Container = styled.div`
  width: 88%;
  max-width: 778px;

  margin: 44px auto 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const Solution = styled.div`
  width: calc(50% - 22px);
  max-width: 367px;
  padding: 40px;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 81px;
    height: 81px;
  }

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;

    text-align: center;
    color: #17171b;
    margin-top: 20px;
    margin-bottom: 0px;
  }

  .txt {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #4a5568;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 22px auto;
  }
`;

const Solutions = () => {
  const btnStyle = {
    width: '186px',
    height: '36px',
    lineHeight: '36px',
    background: '#4c6fff',
  };
  return (
    <>
      <Container>
        <Solution>
          <img src={solutionimg} alt='img' />
          <p className='title'>Digital Identity</p>
          <p className='txt'>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </p>
          <ShadowButton
            style={btnStyle}
            text='Meet our team'
            onClick={() => {}}
          />
        </Solution>
        <Solution>
          <img src={solutionimg} alt='img' />
          <p className='title'>Verifiable Credentials</p>
          <p className='txt'>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </p>
          <ShadowButton
            style={btnStyle}
            text='Meet our team'
            onClick={() => {}}
          />
        </Solution>
      </Container>

      <Container>
        <Solution>
          <img src={solutionimg} alt='img' />
          <p className='title'>Personal Data Storage</p>
          <p className='txt'>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </p>
          <ShadowButton
            style={btnStyle}
            text='Meet our team'
            onClick={() => {}}
          />
        </Solution>
        <Solution>
          <img src={solutionimg} alt='img' />
          <p className='title'>Peer-to-Peer Network</p>
          <p className='txt'>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </p>
          <ShadowButton
            style={btnStyle}
            text='Meet our team'
            onClick={() => {}}
          />
        </Solution>
      </Container>
    </>
  );
};

export default Solutions;
