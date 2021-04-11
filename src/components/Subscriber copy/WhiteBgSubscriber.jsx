import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';
import {
  ButtonContainer,
  NewsLetter as BgNewsLetter,
  SubscriberContainerWrapper,
} from './BgImgSubscriber';

const SubscriberContainer = styled.div`
  border-radius: 10px;
  padding: 53px 5%;
  background: white;

  @media only screen and (max-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

// const SubscriberContainer = styled.div`
//   position: absolute;
//   border-radius: 10px;

//   z-index: 10;
//   background: white;
//   width: 100%;

//   top: -120px;
//   left: 50%;
//   transform: translateX(-50%);

//   padding: 53px 5%;

//   @media only screen and (max-width: 992px) {
//     padding-top: 30px;
//     padding-bottom: 30px;
//   }
// `;

const NewsLetter = styled(BgNewsLetter)`
  h1,
  p {
    color: #17171b;
  }
`;

const Subscriber = ({
  title = 'Subscribe to our newsletter',
  text = 'Keep up-to-date with us in the open decentralized internet space.',
  BtnText = 'Subscribe Now',
  onClick = () => {},
}) => {
  return (
    <SubscriberContainerWrapper>
      <SubscriberContainer className='row'>
        <NewsLetter className='col-lg-6'>
          <h1>{title}</h1>
          <p>{text}</p>
        </NewsLetter>
        <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
          <ShadowButton
            style={{
              color: 'white',
              backgroundColor: '#4C6FFF',
            }}
            text={BtnText}
            onClick={onClick}
          />
        </ButtonContainer>
      </SubscriberContainer>
    </SubscriberContainerWrapper>
  );
};

export default Subscriber;
