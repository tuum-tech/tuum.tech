import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 168px 11% 42px;
  background: #17171b;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const FooterLink = styled.a`
  font-size: 16px;
  line-height: 30px;
  margin-right: 34px;
  color: #96969a;
  cursor: pointer;
  display: block;
  margin-bottom: 9px;

  &:hover {
    color: #96969a;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  margin-top: 96px;
`;

const Logo = styled.img`
  width: 171px;
`;

const LogoText = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
  max-width: 340px;
`;

const Category = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;

  color: #ffffff;
  margin-bottom: 20px;
`;

export { FooterContainer, FooterLink, FooterLinks, Logo, LogoText, Category };
