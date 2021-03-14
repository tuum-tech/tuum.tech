import React from 'react';
import styled from 'styled-components';

import ShadowButton from './buttons/ShadowButton';

const SubscriberContainer = styled.div`
  position: absolute;
  background: #ffffff;
  border-radius: 10px;
  padding: 53px 5%;
  top: -120px;

  left: calc(11% + 15px);
  right: calc(11% + 15px);

  @media only screen and (max-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
    left: calc(2rem + 15px);
    right: calc(2rem + 15px);
  }
`;

const NewsLetter = styled.div`
  h1 {
    colro: 17171b;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.25;
    text-align: center;
  }

  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.87;
    text-align: center;
  }

  @media only screen and (min-width: 993px) {
    h1 {
      max-width: 444px;
      text-align: left;
    }
    p {
      max-width: 350px;
      text-align: left;
    }
  }

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Subscriber = () => {
  return (
    <SubscriberContainer className='row'>
      <NewsLetter className='col-lg-6'>
        <h1>Subscribe to our newsletter</h1>
        <p>Keep up-to-date with us in the open decentralized internet space.</p>
      </NewsLetter>
      <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
        <ShadowButton
          style={{
            marginTop: '30px',
            width: '250px',
            lineHeight: '60px',
            height: '60px',
            background: '#4c6fff',
          }}
          text='Subscribte Now'
          onClick={() => {}}
        />
      </ButtonContainer>
    </SubscriberContainer>
  );
};

export default Subscriber;
