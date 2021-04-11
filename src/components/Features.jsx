import React from 'react';
import styled from 'styled-components';

import { SectionTitle } from './Texts';
import { ContentContainer } from './layout';

const Container = styled.div`
  padding: 80px 0px;
`;

const FeatureRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(SectionTitle)`
  margin-bottom: 80px;
`;

const Section = styled.div`
  width: 33%;
  display: block;
  margin-bottom: 70px;

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
    max-width: 300px;
  }

  .text {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    color: #4a5568;
    max-width: 300px;
  }

  @media only screen and (max-width: 1080px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    img,
    p {
      display: block;
      margin: 0 auto 21px;
    }
    p {
      text-align: center;
    }
  }
`;

const Features = ({ features, bgColor = 'white', children }) => {
  return (
    <Container
      style={{
        background: bgColor,
      }}
    >
      <ContentContainer>
        <Title>Features at a Glance</Title>
        <FeatureRow>
          {features.map((item) => (
            <Section>
              <img src={item.img} alt='feature' />
              <p className='title'>{item.title}</p>
              <p className='text'>{item.text}</p>
            </Section>
          ))}
        </FeatureRow>
      </ContentContainer>
      {children && children}
    </Container>
  );
};

export default Features;
