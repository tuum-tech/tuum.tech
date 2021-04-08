import React from 'react';
import styled from 'styled-components';

import { SplitWrap, FeatureSplitItem } from '../../../components/Features';
import profileImg from '../../../assets/img/features/feature-profile.png';
import getdidsImg from '../../../assets/img/features/feature-getdids.png';
import subscriberbgImg from '../../../assets/img/subscribers/home.png';
import BgImgSubscriber from '../../../components/Subscriber/BgImgSubscriber';

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #f7fafc;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 55px;

  text-align: center;
  color: #000000;
  padding-top: 200px;
`;
const Features = () => {
  const features = [
    {
      bgImg: getdidsImg,
      introOne: 'Decentralized Identity',
      introTwo: 'At getdids.com we keep it very simple',
      title: 'getdids.com',
      description:
        'Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.',
      onClick: () => {},
    },
    {
      bgImg: profileImg,
      introOne: 'Identity Platform',
      introTwo: 'Finally unlock the power of your content online',
      title: 'Profile',
      description:
        'Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.',
      onClick: () => {},
    },
  ];
  return (
    <Container>
      {/* <SubScriber></SubScriber> */}
      <BgImgSubscriber bgImg={subscriberbgImg} />
      <Title>Featured Products</Title>

      <SplitWrap>
        <div className='features-split-inner section-inner'>
          <div className='split-wrap'>
            {features &&
              features.length > 0 &&
              features.map((feature) => (
                <FeatureSplitItem
                  imgSrc={feature.bgImg}
                  introOne={feature.introOne}
                  introTwo={feature.introTwo}
                  title={feature.title}
                  description={feature.description}
                  onClick={feature.onClick}
                  btnText='Get started'
                />
              ))}
          </div>
        </div>
      </SplitWrap>
    </Container>
  );
};

export default Features;
