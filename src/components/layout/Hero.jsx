import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../buttons/ShadowButton';
import { HeaderTitle, ContentText } from '../Texts';

const HeroContainerWrapper = styled.div`
  width: 100%;
  background: #17171b;
  position: relative;
`;

const HeroContainer = styled.div`
  min-height: 880px;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  padding-top: 38px;

  width: 100%;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeroContent = styled.div`
  display: block;
  color: white;
  padding: 128px 2rem 107px;
  width: 100%;
  max-width: 1240px;

  color: #ffffff;
  margin: 0 auto;
`;

const ShortIntro = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
`;

const Title = styled(HeaderTitle)`
  margin-top: 15px;
  display: flex;
  align-items: center;
  max-width: 900px;
`;

const IntroTxt = styled(ContentText)`
  width: 80%;
  color: white;
  display: block;
  margin-top: 51px;
  margin-bottom: 0px;
  max-width: 716px;

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
  maxWidth = '900px',
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
            textAlign: leftAlign ? 'left' : 'center',
          }}
        >
          {shortInfo && <ShortIntro>{shortInfo}</ShortIntro>}
          {title && (
            <Title
              style={{
                marginLeft: leftAlign ? 0 : 'auto',
                marginRight: leftAlign ? 0 : 'auto',
              }}
            >
              {title}
            </Title>
          )}
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
