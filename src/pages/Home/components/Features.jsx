import React from 'react';

import featureBg from '../../../assets/img/backgrounds/featureBg.png';
import { SplitWrap, FeatureSplitItem } from '../../../components/Features';

const Features = () => {
  const features = [
    {
      bgImg: featureBg,
      intro: 'Featured Product',
      title: 'getdids.com',
      description:
        'Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.',
      onClick: () => {},
    },
    {
      bgImg: featureBg,
      intro: 'Featured Product',
      title: 'Profile',
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
                btnText='Github'
              />
            ))}
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
