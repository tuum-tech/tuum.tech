import React from 'react';
import styled from 'styled-components';

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
  padding-top: 88px;

  width: 100%;
  padding-left: 11%;
  padding-right: 11$;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeroContent = styled.div`
  display: block;
  color: white;
  max-width: 716px;
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

const MeetButton = styled.div`
  width: 186px;
  height: 36px;
  background: #4c6fff !important;
  border-radius: 10px;
  margin-top: 50px;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 36px;
  color: #ffffff;
  position: relative;
`;

const ButtonShadow = styled.div`
  width: 211.83px;
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;

  background: rgba(76, 111, 255, 0.24);
  filter: blur(54px);
  border-radius: 10px;
`;

const Hero = ({ shortInfo, title, intro, buttonTxt, bgImg }) => {
  return (
    <HeroContainerWrapper>
      <HeroContainer
        style={{
          background: `url(${bgImg})`,
        }}
      >
        <HeroContent>
          {shortInfo && <ShortIntro>{shortInfo}</ShortIntro>}
          {title && <Title>{title}</Title>}
          {intro && <IntroTxt>{intro}</IntroTxt>}
          {buttonTxt && (
            <MeetButton onClick={() => {}}>
              Meet our team <ButtonShadow />
            </MeetButton>
          )}
        </HeroContent>
      </HeroContainer>
    </HeroContainerWrapper>
  );
};

export default Hero;
