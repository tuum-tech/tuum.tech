import styled from 'styled-components';

export const HeaderTitle = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 70px;

  @media only screen and (max-width: 992px) {
    font-size: 52px;
    line-height: 62px;
  }

  @media only screen and (max-width: 762px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const ContentText = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 35px;

  @media only screen and (max-width: 762px) {
    font-size: 22px;
    line-height: 35px;
  }
`;

export const SectionText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 48px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #4a5568;

  @media only screen and (max-width: 762px) {
    margin-top: 20px;
    font-size: 22px;
  }
`;

export const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 55px;
  text-align: center;
  color: #17171b;
  margin-bottom: 30px;

  @media only screen and (max-width: 762px) {
    font-size: 45px;
    line-height: 52px;
  }
`;
