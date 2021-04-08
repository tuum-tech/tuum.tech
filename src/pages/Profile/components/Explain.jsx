import React from 'react';
import styled from 'styled-components';

import profileimg from '../../../assets/img/features/feature-profile.png';
import digitalimg from '../../../assets/img/features/new-type-digital.png';

const Container = styled.div`
  width: 100%;
  margin: 150px 0 0;
  padding: 0 11%;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Title = styled.p`
  padding-top: 130px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  color: #2f3035;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.p`
  margin-top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: rgba(47, 48, 53, 0.6);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TextImg = styled.img`
  width: 90%;
  margin-top: 100px;
`;
const Explain = () => {
  return (
    <Container className='row'>
      <div className='col-lg-6'>
        <Title>A new type of digital identity owned by you</Title>
        <Text>
          Profile gives you total control of your digital world, in one place.
          Finally unlock the power of your data and digital content.
        </Text>
        <TextImg src={digitalimg} alt='digitalimg' />
      </div>
      <div className='col-lg-6'>
        <img src={profileimg} width='100%' className='mt-3' alt='explain' />
      </div>
    </Container>
  );
};

export default Explain;
