import React from 'react';

import featureBg from '../../../assets/img/backgrounds/featureBg.png';
import { SplitWrap, FeatureSplitItem } from '../../../components/Features';

const Features = () => {
  const features = [
    {
      bgImg: featureBg,
      title: 'Own Your Data',
      description: 'Information here about Hive 2.0',
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
                title={feature.title}
                description={feature.description}
                key={feature.title}
              />
            ))}
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
