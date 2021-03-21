import React from 'react';
import styled from 'styled-components';

import solutionimg from '../../../assets/img/identity.png';

const Container = styled.div`
  padding: 63px 11%;
  width: 100%;
  background-color: white;

  @media only screen and (max-width: 768px) {
    padding: 63px 2rem;
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #17171b;
  margin-bottom: 71px;
`;

const Solution = styled.div`
  margin: 20px 0px;
  display: flex;
  padding-bottom: 50px;
  img {
    width: 81px;
    height: 81px;
  }

  .content {
    margin-left: 31px;

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #17171b;
    }

    .text {
      margin-top: 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      color: #4a5568;
    }
  }
`;

const LearnMore = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #4c6fff;

  position: absolute;
  bottom: 0px;
`;

const Technologies = () => {
  return (
    <Container>
      <Title>Embedded Technologies</Title>
      <div className='row'>
        <Solution className='col-lg-6'>
          <img src={solutionimg} alt='img' />
          <div className='content'>
            <p className='title'>Digital Identity</p>
            <p className='text'>
              Decentralized Identifiers are IDs users create, own, and control
              completely independent of any business or government. Each new DID
              is issued by an autonomous, independent, and decentralized
              platform that acts as proof of ownership for the digital identity.
            </p>
            <LearnMore href='/'>Learn More</LearnMore>
          </div>
        </Solution>
        <Solution className='col-lg-6'>
          <img src={solutionimg} alt='img' />
          <div className='content'>
            <p className='title'>Personal Data Storage</p>
            <p className='text'>
              We provide an online digital identity hub managed by the users,
              and for the users, where profiles
            </p>
            <LearnMore href='/'>Learn More</LearnMore>
          </div>
        </Solution>
      </div>
      <div className='row'>
        <Solution className='col-lg-6'>
          <img src={solutionimg} alt='img' />
          <div className='content'>
            <p className='title'>Verifiable Credentials</p>
            <p className='text'>
              We provide an online digital identity hub managed by the users,
              and for the users, where profiles
            </p>
            <LearnMore href='/'>Learn More</LearnMore>
          </div>
        </Solution>
        <Solution className='col-lg-6'>
          <img src={solutionimg} alt='img' />
          <div className='content'>
            <p className='title'>Blockchain Publishing Services</p>
            <p className='text'>
              We provide an online digital identity hub managed by the users,
              and for the users, where profiles
            </p>
            <LearnMore href='/'>Learn More</LearnMore>
          </div>
        </Solution>
      </div>
    </Container>
  );
};

export default Technologies;
