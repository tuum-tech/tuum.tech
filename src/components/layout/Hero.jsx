import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';
import { ContentText } from '../Texts';

const HeroContainerWrapper = styled.div`
  width: 100%;
  background: #17171b;
  position: relative;
`;

const HeroContainer = styled.div`
  min-height: 800px;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  padding: 38px 0 0;

  width: 100%;
`;

const HeroContent = styled.div`
  display: block;
  color: white;
  padding: 128px 11% 107px;
  width: 100%;
  max-width: 1240px;
  color: #ffffff;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
  }
  @media only screen and (max-width: 400px) {
    padding-top: 90px;
  }
`;

const ShortIntro = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
`;

const Title = styled.p`
  margin-top: 15px;
  display: flex;
  align-items: center;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 42px;
    line-height: 48px;
    margin-top: 0px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 32px;
    line-height: 40px;
    margin-top: 0px;
  }
`;

const IntroTxt = styled(ContentText)`
  color: white;
  display: block;
  margin-top: 51px;
  margin-bottom: 0px;

  @media only screen and (max-width: 762px) {
    margin-top: 20px;
    width: 100%;
  }
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
          }}
        >
          {shortInfo && <ShortIntro>{shortInfo}</ShortIntro>}
          {title && <Title>{title}</Title>}
          {intro && (
            <IntroTxt
              style={{
                marginLeft: leftAlign ? 0 : 'auto',
                marginRight: leftAlign ? 0 : 'auto',
              }}
            >
              {intro}
            </IntroTxt>
          )}
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
