import React from 'react';
import styled from 'styled-components';

// import bgImg from '../assets/img/mainbg.png';
import ShadowButton from './buttons/ShadowButton';

const SubscriberContainerWrapper = styled.div`
  position: absolute;
  background: #4c6fff;
  border-radius: 10px;

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

const SubscriberContainer = styled.div`
  border-radius: 10px;
  padding: 53px 5%;

  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
`;

const NewsLetter = styled.div`
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
    <SubscriberContainerWrapper>
      <SubscriberContainer
        className='row'
        // style={{
        //   background: `url(${bgImg})`,
        // }}
      >
        <NewsLetter className='col-lg-6'>
          <h1>Subscribe to our newsletter</h1>
          <p>
            Keep up-to-date with us in the open decentralized internet space.
          </p>
        </NewsLetter>
        <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
          <ShadowButton
            style={{
              marginTop: '30px',
              width: '250px',
              lineHeight: '60px',
              height: '60px',
              background: 'white',
              color: '#4C6FFF',
              fontSize: '16px',
            }}
            text='Subscribte Now'
            onClick={() => {}}
          />
        </ButtonContainer>
      </SubscriberContainer>
    </SubscriberContainerWrapper>
  );
};

export default Subscriber;
