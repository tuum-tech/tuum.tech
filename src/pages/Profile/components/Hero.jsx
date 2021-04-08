import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../../../components/buttons/ShadowButton';
import heroimg from '../../../assets/img/backgrounds/profile-hero.png';

const HeroContainer = styled.div`
  min-height: 764px;
  width: 100%;
  padding: 80px 11% 0px 11%;
  margin-left: 0px;
  margin-right: 0px;
  position: relative;

  img {
    position: absolute;
    right: 9%;
    top: -30px;
    max-width: 600px;
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;

    img {
      bottom: 0px;
      right: 0px;
      top: auto;
      width: 100%;
    }
  }
`;

const ShortIntro = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: #17171b;
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
  color: #17171b;
`;

const IntroTxt = styled.p`
  margin-top: 30px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4a5568;
`;

const Hero = ({ shortInfo, title, intro, buttonTxt, bgImg }) => {
  return (
    <HeroContainer className='row'>
      <img src={heroimg} alt='hero' />
      <div className='col-lg-5'>
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
      </div>
    </HeroContainer>
  );
};

export default Hero;
