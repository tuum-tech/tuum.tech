import React from 'react';

import featureBg from '../../../assets/img/backgrounds/featureBg.png';
import { SplitWrap, FeatureSplitItem } from '../../../components/Features';

const Features = () => {
  const features = [
    {
      bgImg: featureBg,
      title: 'Own Your Data',
      description:
        'Elastos Decentralized Storage (Hive) is a new architectural model that allows users to ‘own their own data’. With this technology users can now benefit from a powerful line of features including Vault selection, accessibility, data sandboxing and DID integration.',
      btnText: 'Learn more on Elastos Info',
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
                btnText={feature.btnText}
              />
            ))}
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
