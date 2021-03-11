import React from 'react';
import styled from 'styled-components';

const SubscriberContainer = styled.div`
  width: 90%;
  margin: -125px auto 0;
  background: #ffffff;
  border-radius: 10px;
  padding: 53px 5%;
  max-width: 1140px;
`;

const NewsLetter = styled.div`
  h1 {
    colro: 17171b;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 45px;
    text-align: center;
  }

  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
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
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SubcribButton = styled.div`
  margin-top: 30px;
  position: relative;
  width: 250px;
  height: 60px;
  background: #4c6fff;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  line-height: 60px;
`;

const ButtonShadow = styled.div`
  width: 211.83px;
  height: 60px;
  left: 20px;
  top: 25px;

  background: rgba(76, 111, 255, 0.24);
  filter: blur(54px);
  border-radius: 10px;
`;

const Subscriber = () => {
  return (
    <SubscriberContainer className='row'>
      <NewsLetter className='col-lg-6'>
        <h1>Subscribe to our newsletter</h1>
        <p>Keep up-to-date with us in the open decentralized internet space.</p>
      </NewsLetter>
      <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
        <SubcribButton onClick={() => {}} className='mt-lg-0'>
          Subscribe Now <ButtonShadow />
        </SubcribButton>
      </ButtonContainer>
    </SubscriberContainer>
  );
};

export default Subscriber;
