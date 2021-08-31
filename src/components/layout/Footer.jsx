import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/brand-whitelogo.png';

export const FooterContainer = styled.div`
  padding: 80px 2rem 0px;
  width: 100%;
  margin: 0 auto;
  display: block;

  background: #17171b;
  position: relative;
`;

const FooterContent = styled.div`
  display: block;
  margin: 150px auto 0px;

  @media only screen and (min-width: 1330px) {
    max-width: calc(1240px - 4rem);
    width: calc(100% - 4rem);
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
  margin-top: 36px;
  padding-bottom: 30px;

  @media only screen and (max-width: 400px) {
    flex-wrap: wrap;
    a {
      display: block;
      width: 100%;
    }
  }
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div className='row'>
          <div className='col-lg-5 col-md-4'>
            <div className='row'>
              <div className='col-sm-6 col-md-12'>
                <img src={logo} width={171} className='mb-5' alt='logo' />
              </div>
              <div className='col-sm-6 col-md-12'>
                <LogoText className='mb-5'>
                  Tuum Technologies is the software engineering leader of the
                  Open Decentralized Internet space.
                </LogoText>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-8'>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6'>
                <Category>Solutions</Category>
                <FooterLink href='/solutions/digitalidentity'>
                  Digital Identity
                </FooterLink>
                <FooterLink href='/solutions/verifiedcredential'>
                  Verifiable Credentials
                </FooterLink>
                <FooterLink href='/solutions/personaldatastorage'>
                  Personal Data Storage
                </FooterLink>
                {/* <FooterLink className="mb-5">Peer-to-Peer Network</FooterLink> */}
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6'>
                <Category>Products</Category>
                <FooterLink href='/products/profile'>Profile</FooterLink>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6'>
                <Category>Developers</Category>
                <FooterLink href='https://developer.elastos.org/'>
                  Elastos Developer Portal
                </FooterLink>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-6'>
                <Category>Learn</Category>
                <FooterLink href='https://elastos.academy/'>
                  Elastos Academy
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
        <FooterLinks>
          <FooterLink href='/'>©2021 Tuum Technologies</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/terms'>Terms of Service</FooterLink>
          <FooterLink href='mailto:contact@tuum.tech'>Contact</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
