import React from 'react';
import styled from 'styled-components';

import {
  SplitWrap,
  FeatureSplitItem,
  SplitImgItemContainer,
} from '../../../components/Features';
import ShadowButton from '../../../components/buttons/ShadowButton';
import featureBg from '../../../assets/img/backgrounds/featureBg.png';
import check from '../../../assets/img/icons/check.png';

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4a5568;
    margin: 0;
  }
`;

const Features = () => {
  const features = [
    {
      bgImg: featureBg,
      intro: 'Tuum Product',
      title: 'Vouch',
      description:
        'Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.',
      onClick: () => {},
    },
  ];
  return (
    <SplitWrap>
      <div className='features-split-inner section-inner'>
        <div className='split-wrap'>
          {features &&
            features.length > 0 &&
            features.map((feature) => (
              <FeatureSplitItem
                imgSrc={feature.bgImg}
                intro={feature.intro}
                title={feature.title}
                description={feature.description}
                onClick={feature.onClick}
              />
            ))}
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
