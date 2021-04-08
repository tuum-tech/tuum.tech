import React from 'react';

import { SplitWrap, SplitImgItemContainer } from '../../../components/Features';
import ShadowButton from '../../../components/buttons/ShadowButton';
import featureBg from '../../../assets/img/backgrounds/featureBg.png';

const Features = () => {
  return (
    <SplitWrap>
      <div className='features-split-inner section-inner'>
        <div className='split-wrap'>
          <SplitImgItemContainer className='split-item'>
            <div
              className='split-item-content'
              data-reveal-container='.split-item'
            >
              <p className='title'>
                What is Elastos Decentralized Storage (Hive)?
              </p>
              <p className='txt mt-3'>
                Hive Elastos’ semi-decentralized storage solution. In this Hive
                architecture, no blockchain is used. Instead, data is stored on
                traditional “servers” (called “Hive nodes”) and accessed using
                traditional “API calls”. Though, the key feature of hive is that
                the servers are not provided by the application developers. They
                are provided as independent services by third parties or by end
                users themselves. Also, user data can be transferred at any
                moment to another location.
              </p>

              <ShadowButton
                text='Learn more at Elastos Official'
                style={{
                  width: '186px',
                  height: '36px',
                  lineHeight: '36px',
                  marginTop: '20px',
                  marginBottom: '20px',
                  background: '#4C6FFF',
                  color: 'white',
                }}
                shadowBg='rgba(23, 23, 27, 0.1);'
                onClick={() => {}}
              />
            </div>
            <div
              className='split-item-image'
              data-reveal-container='.split-item'
            >
              <img src={featureBg} alt='Features split' />
              <div className='shadow' />
            </div>
          </SplitImgItemContainer>
        </div>
      </div>
    </SplitWrap>
  );
};

export default Features;
