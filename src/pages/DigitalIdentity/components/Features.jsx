import React from 'react';

import { SplitWrap, FeatureSplitItem } from '../../../components/Features';
import getdidsImg from '../../../assets/img/features/feature-getdids.png';
import assistImg from '../../../assets/img/features/feature-assist.png';

const Features = () => {
  const features = [
    {
      bgImg: assistImg,
      title: 'Assist',
      description:
        'Assist is a service that provides simplicity and mitigates the difficulties for users associated with blockchain-based applications. This product is based on blockchain technology and is a tool to support the publication of Decentralized Identities (DIDs). As with many pioneering technologies, pain points lead to a sub- optimal user experience. Assist has been developed to operate in the background and seamlessly execute functions that enhance user experience for newcomers to digital identity.',
      onClick: () => {},
    },
    {
      bgImg: getdidsImg,
      title: 'getdids.com',
      introTwo: 'At getdids.com we keep it very simple',
      description:
        'Log in, save your security words, and publish a new digital identity to the blockchain – that’s it! Now you have your very own unique proof of ownership and can begin owning your data.',
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
                introTwo={feature.introTwo}
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
