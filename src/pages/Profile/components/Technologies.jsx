import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import accountimg from '../../../assets/img/profile-account.png';
import IDimg from '../../../assets/img/profile-ID.png';
import dataimg from '../../../assets/img/profile-data.png';
import blockchainimg from '../../../assets/img/profile-blockchain.png';

const Container = styled.div`
  width: 100%;
  padding-top: 230px;

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
  margin-bottom: 100px;
`;

const Row = styled.div`
  display: flex;
  padding-left: 20px;

  @media only screen and (max-width: 678px) {
    display: block;
  }
`;

const Section = styled.div`
  width: 25%;
  display: block;
  margin-bottom: 70px;
  padding-right: 20px;

  img {
    height: 76px;
    width: auto;
    margin-bottom: 28px;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #17171b;
    margin-bottom: 21px;
  }

  .text {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    color: #4a5568;
    max-width: 300px;
  }

  @media only screen and (max-width: 678px) {
    width: 100%;
    text-align: center;

    .text {
      margin: 0 auto;
    }
  }
`;

const LearnMore = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #4c6fff;
  display: block;
  margin-top: 30px;
`;

const Technologies = () => {
  const techData = [
    {
      title: 'Digital Identity',
      img: IDimg,
      text:
        'In this digital world we all need a digital identity that we own. Quickly and easily create a self-sovereign universal ID.',
      link: '/',
    },
    {
      title: 'Verifiable Credentials',
      img: accountimg,
      text:
        'Authorize access to your data based on verified identification attributes. Verify once, use everywhere online.',
      link: '/',
    },
    {
      title: 'User Customization',
      img: dataimg,
      text:
        'Access Controls allow data-owning individuals to leverage DID functions to select other users that can read or contribute to his or her data, as well as to specify conditions for which reading and contribution are allowed and disallowed.',
      link: '/',
    },
    {
      title: 'Blockchain Publishing Services',
      img: blockchainimg,
      text:
        'Avoid paying transaction fees and allow the Assist service to publish your DID on the blockchain for free.',
      link: '/',
    },
  ];
  return (
    <Container>
      <Title>Embedded Technologies</Title>
      <Row>
        {techData.map((item) => (
          <Section>
            <img src={item.img} alt='feature' />
            <p className='title'>{item.title}</p>
            <p className='text'>{item.text}</p>
            <LearnMore to={item.link}>Learn More</LearnMore>
          </Section>
        ))}
      </Row>
    </Container>
  );
};

export default Technologies;
