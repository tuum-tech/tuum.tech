import React from 'react';

import {
  Navbar,
  Footer,
  FooterContainer,
  Hero,
  ContentContainer,
} from '../../components/layout';
import Features from '../../components/Features';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';
import { SplitWrap, SplitItem } from '../../components/SplitComp';

import heroImg from '../../assets/img/backgrounds/credential-hero.png';
import subscriberbgImg from '../../assets/img/subscribers-digialidentity.png';
import getdidsImg from '../../assets/img/explain-getdids.png';
import assistImg from '../../assets/img/explain-assist.png';

import userexp from '../../assets/img/features/accessibility.png';
import socials from '../../assets/img/features/socials.png';
import opensource from '../../assets/img/features/opensource.png';

const VerifiedCredential = () => {
  const features = [
    {
      title: 'Easy User Experience',
      img: userexp,
      text:
        'Give your users the ability to generate verifiable credentials using our Vouch service.',
    },
    {
      title: 'Scalable and Flexible',
      img: socials,
      text:
        'Verify any type of data for any entity or individual in a secure and scalable way.',
    },
    {
      title: 'Open Source',
      img: opensource,
      text:
        'Built using W3C standards, Elastos Decentralized Identity (DID) provides greater transparency and seamless integration with identity verification partners.',
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Verifiable Credential Solutions'
          bgImg={heroImg}
          title='Identity Verification With Elastos DID'
          intro='Identity verification with Elastos Decentralized Identity (DID) is an open approach to verifying information about a user while providing the security- and privacy-related benefits of blockchain technology. After verification, these credentials can be used to prove data ownership cross-platform on an open decentralized internet.'
        />
        <ContentContainer>
          <SplitWrap className='mt-5 mb-5'>
            <div className='features-split-inner section-inner'>
              <div className='split-wrap'>
                <SplitItem
                  imgSrc={getdidsImg}
                  title='What are Verifiable Credentials?'
                  description='Verifiable credentials are the digital equivalent of physical credentials that we all own and are familiar with today. Some of the most common examples include passports, driving licenses, qualifications, and awards. With 60%+ of the world online it is critical that verifiable information be expressed on the web.'
                  onClick={() =>
                    (window.location.href = 'https://www.getdids.com/did')
                  }
                  btnText='Learn More at ElastOS Official'
                />
              </div>
            </div>
          </SplitWrap>

          <Features features={features} />

          <SplitWrap>
            <div className='features-split-inner section-inner'>
              <div className='split-wrap'>
                <SplitItem />
                <SplitItem
                  imgSrc={assistImg}
                  title='Vouch'
                  description='Vouch is a Know Your Customer (KYC) service that allows validators to provide verification of multiple credentials for users. This solution is powered by Elastos Decentralized Identity (DID) technology and is a tool for the creation of verifiable credentials. Authorize access to applications and data based on verified identities rather than usernames and passwords. With Vouch, the credentials assigned to a user’s identity become verified, providing clear and potent returns of value.'
                />
              </div>
            </div>
          </SplitWrap>

          {/* <Explain /> */}
          {/* <Features /> */}
        </ContentContainer>
      </main>
      <FooterContainer style={{ marginTop: 150 }}>
        <BgImgSubscriber bgImg={subscriberbgImg} />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default VerifiedCredential;
