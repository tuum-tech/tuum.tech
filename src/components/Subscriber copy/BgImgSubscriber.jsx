import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';

export const SubscriberContainerWrapper = styled.div`
  position: absolute;
  border-radius: 10px;
  padding: 0 15px;
  z-index: 10;
  width: calc(100% - 4rem);
  max-width: calc(1240px - 4rem);

  top: -120px;
  left: 50%;
  transform: translateX(-50%);
`;

const SubscriberContainer = styled.div`
  border-radius: 10px;
  padding: 53px 5%;

  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;

  @media only screen and (max-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const NewsLetter = styled.div`
  color: white;
  font-style: normal;
  font-weight: normal;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 13px;
  }

  p {
    font-size: 16px;
    line-height: 1.87;
    text-align: center;
  }

  @media only screen and (min-width: 993px) {
    h1 {
      max-width: 544px;
      text-align: left;
    }
    p {
      max-width: 400px;
      text-align: left;
    }
  }

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  button {
    width: 250px;
    line-height: 60px;
    height: 60px;
    background: white;
    color: #4c6fff;
    font-size: 16px;
  }

  @media only screen and (max-width: 992px) {
    button {
      margin-top: 20px;
      line-height: 45px;
      height: 45px;
      background: white;
      color: #4c6fff;
      font-size: 16px;
    }
  }
`;

const Subscriber = ({
  title = 'Subscribe to our newsletter',
  text = 'Keep up-to-date with us in the open decentralized internet space.',
  BtnText = 'Subscribe Now',
  onClick = () => {},
  bgImg,
}) => {
  return (
    <SubscriberContainerWrapper>
      <SubscriberContainer
        className='row'
        style={{
          background: `url(${bgImg})`,
        }}
      >
        <NewsLetter className='col-lg-6'>
          <h1>{title}</h1>
          <p>{text}</p>
        </NewsLetter>
        <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
          <ShadowButton text={BtnText} onClick={onClick} />
        </ButtonContainer>
      </SubscriberContainer>
    </SubscriberContainerWrapper>
  );
};

export default Subscriber;
