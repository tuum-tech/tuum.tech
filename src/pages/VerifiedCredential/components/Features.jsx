import React from 'react';

import { SplitWrap, FeatureSplitItem } from '../../../components/Features';
import featureBg from '../../../assets/img/backgrounds/featureBg.png';

const Features = () => {
  const features = [
    {},
    {
      bgImg: featureBg,
      title: 'Vouch',
      description:
        'Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.Find out how Tuum Technologies’ products are helping developers benefit from blockchain technology on an open Internet.',
      onClick: () => {},
      btnText: 'Github',
    },
  ];
  return (
    <SplitWrap style={{ paddingTop: 0 }}>
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
                btnText={feature.btnText}
              />
            ))}
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
