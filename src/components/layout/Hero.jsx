import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';

const HeroContainerWrapper = styled.div`
  width: 100%;
  background: #17171b;
  position: relative;
`;

const HeroContainer = styled.div`
  min-height: 664px;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  padding-top: 38px;

  width: 100%;
  padding-left: 11%;
  padding-right: 11%;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeroContent = styled.div`
  display: block;
  color: white;
  max-width: 616px;
  width: 88%;
  padding: 108px 0 107px;
  color: #ffffff;
`;

const ShortIntro = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
`;

const Title = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 55px;
  margin-top: 15px;

  display: flex;
  align-items: center;
  color: #ffffff;

  @media only screen and (max-width: 992px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const IntroTxt = styled.p`
  margin-top: 30px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #d5d5dc;
`;

const Hero = ({
  shortInfo,
  title,
  intro,
  buttonTxt,
  bgImg,
  leftAlign = true,
}) => {
  return (
    <HeroContainerWrapper>
      <HeroContainer
        style={{
          background: `url(${bgImg})`,
        }}
      >
        <HeroContent
          style={{
            marginLeft: leftAlign ? 0 : 'auto',
            marginRight: leftAlign ? 0 : 'auto',
            textAlign: leftAlign ? 'left' : 'center',
          }}
        >
          {shortInfo && <ShortIntro>{shortInfo}</ShortIntro>}
          {title && <Title>{title}</Title>}
          {intro && <IntroTxt>{intro}</IntroTxt>}
          {buttonTxt && (
            <ShadowButton
              style={{
                width: '186px',
                height: '36px',
                lineHeight: '36px',
                marginTop: '50px',
                background: '#4c6fff',
              }}
              text='Meet our team'
              onClick={() => {}}
            />
          )}
        </HeroContent>
      </HeroContainer>
    </HeroContainerWrapper>
  );
};

export default Hero;
