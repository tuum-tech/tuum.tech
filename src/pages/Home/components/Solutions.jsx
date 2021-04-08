import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import ShadowButton from '../../../components/buttons/ShadowButton';
import solutionimg from '../../../assets/img/identity.png';

const RowContainer = styled.div`
  width: 100%;
  padding: 44px 11% 350px;
  background: white;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const Solution = styled.div`
  width: calc(25% - 18px);

  padding: 100px 40px 40px;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 0px 20px 50px 10px rgba(193, 203, 244, 0.2);
  border-radius: 31px;

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
  const history = useHistory();

  const btnStyle = {
    width: '186px',
    height: '36px',
    lineHeight: '36px',
    background: '#4c6fff',
    cursor: 'pointer',
  };
  return (
    <RowContainer>
      <Solution>
        <img src={solutionimg} alt='img' />
        <p className='title'>Digital Identity</p>
        <p className='txt'>
          In this digital world we all need a digital identity that we own.
          Quickly, and easily, create a self-sovereign DID.
        </p>
        <ShadowButton
          style={btnStyle}
          text='Learn More'
          onClick={() => {
            history.push('/solutions/digitalidentity');
          }}
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
          text='Learn More'
          onClick={() => {
            history.push('/solutions/verifiedcredential');
          }}
        />
      </Solution>
      <Solution>
        <img src={solutionimg} alt='img' />
        <p className='title'>Personal Data Storage</p>
        <p className='txt'>
          In this digital world we all need a digital identity that we own.
          Quickly, and easily, create a self-sovereign DID.
        </p>
        <ShadowButton
          style={btnStyle}
          text='Learn More'
          onClick={() => {
            history.push('/solutions/personaldatastorage');
          }}
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
          style={{
            width: '186px',
            height: '36px',
            lineHeight: '36px',
            background: 'white',
            cursor: 'pointer',
            color: '#AFB3D1',
          }}
          text='Coming soon'
        />
      </Solution>
    </RowContainer>
  );
};

export default Solutions;
