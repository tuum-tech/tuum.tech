import styled from 'styled-components';

import Conatiner from '../Container';

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

  display: flex;
  align-items: center;
  color: #ffffff;
`;

const IntroTxt = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #d5d5dc;
`;

const ButtonArea = styled.div`
  width: 211.83px;
  height: 60px;
  position: absolute;
  left: 155px;
  top: 502.29px;

  background: rgba(76, 111, 255, 0.24);
  filter: blur(54px);
  border-radius: 10px;
`;

const MeetButton = styled.button`
  width: 186px;
  height: 36px;
  background: #4c6fff !important;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: 50px;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
`;

export {
  HeroContainerWrapper,
  HeroContainer,
  HeroContent,
  ShortIntro,
  Title,
  IntroTxt,
  ButtonArea,
  MeetButton,
};
