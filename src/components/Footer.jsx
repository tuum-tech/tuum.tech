import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/brand/logo.png';

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

const Footer = () => {
  return (
    <FooterContainer>
      <div className='row'>
        <div className='col-lg-5 col-md-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-12 mt-sm-0 mt-xs-5'>
              <Logo src={logo} />
            </div>
            <div className='col-sm-6 col-md-12'>
              <LogoText className='mt-md-5 mt-lg-5'>
                Tuum Technologies is the software engineering leader of the Open
                Decentralized Internet space.
              </LogoText>
            </div>
          </div>
        </div>
        <div className='col-lg-7 col-md-8'>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-4'>
              <Category>Solutions</Category>
              <FooterLink>Digital Identity</FooterLink>
              <FooterLink>Verifiable Credentials</FooterLink>
              <FooterLink>Personal Data Storage</FooterLink>
              <FooterLink>Peer-to-Peer Network</FooterLink>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-4'>
              <Category>Products</Category>
              <FooterLink>Profile</FooterLink>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-4'>
              <Category>Developers</Category>
              <FooterLink>Developer Portal</FooterLink>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 mt-sm-4'>
              <Category>Learn</Category>
              <FooterLink>Elastos Academy</FooterLink>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks>
        <FooterLink href='/'>©2021 Tuum Technologies</FooterLink>
        <FooterLink href='/'>Privacy Policy</FooterLink>
        <FooterLink href='/'>Terms of Service</FooterLink>
        <FooterLink href='/'>Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;