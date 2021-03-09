import React from 'react';

import HomeHero from '../../assets/img/backgrounds/home-hero.png';

import {
  HeroContainerWrapper,
  HeroContainer,
  HeroContent,
  ShortIntro,
  Title,
  IntroTxt,
  ButtonArea,
  MeetButton,
} from './style';
import Container from '../Container';

const Hero = () => {
  return (
    <HeroContainerWrapper>
      <HeroContainer
        style={{
          background: `url(${HomeHero})`,
        }}
      >
        <HeroContent>
          <ShortIntro>About Tuum</ShortIntro>
          <Title>
            Tuum Technologies is a <br /> Web 3.0 Technology Company
          </Title>
          <IntroTxt>
            From developer tools to decentralized products, Tuum Technologies is
            building Elastos blockchain infrastructure and applications for a
            new web that is more open, ethical, and secure.
          </IntroTxt>
          <MeetButton type='button'>Meet our team</MeetButton>
          <ButtonArea></ButtonArea>
        </HeroContent>
      </HeroContainer>
    </HeroContainerWrapper>
  );
};

export default Hero;
