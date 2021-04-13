import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';
import {
  NewsLetter as BgNewsLetter,
  SubscriberContainerWrapper,
} from './BgImgSubscriber';
import Form, { ButtonContainer } from './Form';

const Container = styled.div`
  position: relative;
  height: 200px;
  padding: 100px 2rem;

  @media only screen and (max-width: 992px) {
    padding-top: 0px;
    height: 150px;
    margin-top: 50px;
  }
`;

const SubscriberContainer = styled.div`
  border-radius: 10px;
  padding: 53px 5%;
  background: white;

  @media only screen and (max-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

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
    <Container>
      <SubscriberContainerWrapper style={{ width: 'calc(100% - 4rem)' }}>
        <SubscriberContainer className='row'>
          <NewsLetter className='col-lg-6'>
            <h1>{title}</h1>
            <p>{text}</p>
          </NewsLetter>
          {BtnText === 'Subscribe Now' ? (
            <Form hasBgImg={false} />
          ) : (
            <ButtonContainer className='col-lg-6 justify-content-lg-end justify-content-center'>
              <ShadowButton text={BtnText} onClick={onClick} />
            </ButtonContainer>
          )}
        </SubscriberContainer>
      </SubscriberContainerWrapper>
    </Container>
  );
};

export default Subscriber;
