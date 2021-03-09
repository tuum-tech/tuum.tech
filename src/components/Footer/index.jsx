import React from 'react';

import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  Logo,
  LogoText,
  Category,
} from './style';
import logo from '../../assets/img/brand/logo.png';

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
