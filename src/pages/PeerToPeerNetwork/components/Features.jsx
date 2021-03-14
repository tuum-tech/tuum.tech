import React from 'react';
import styled from 'styled-components';

import { SplitWrap, SplitImgItemContainer } from '../../../components/Features';
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
          <SplitImgItemContainer className='split-item'>
            <div
              className='split-item-content'
              data-reveal-container='.split-item'
            >
              <p className='title'>Elastos Hive JS SDK</p>
              <p className='txt'>
                Find out how Tuum Technologies’ products are helping developers
                benefit from blockchain technology on an open Internet.Find out
                how Tuum Technologies’ products are helping developers benefit
                from blockchain technology on an open Internet.Find out how Tuum
                Technologies’ products are helping developers benefit from
                blockchain technology on an open Internet.
              </p>
              <CheckItem>
                <img src={check} alt='check' />
                <p>Find out how Tuum</p>
              </CheckItem>
              <CheckItem>
                <img src={check} alt='check' />
                <p>Find out how Tuum</p>
              </CheckItem>
              <CheckItem>
                <img src={check} alt='check' />
                <p>Find out how Tuum</p>
              </CheckItem>
              <CheckItem>
                <img src={check} alt='check' />
                <p>Find out how Tuum</p>
              </CheckItem>

              <ShadowButton
                text='Github'
                style={{
                  width: '186px',
                  height: '36px',
                  lineHeight: '36px',
                  marginTop: '20px',
                  marginBottom: '20px',
                  background: '#17171B',
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
