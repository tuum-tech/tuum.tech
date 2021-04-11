import React from 'react';

import {
  Navbar,
  Footer,
  FooterContainer,
  Hero,
  ContentContainer,
} from '../../components/layout';
import Features from '../../components/Features';
import { SplitWrap, SplitItem } from '../../components/SplitComp';
import BgImgSubscriber from '../../components/Subscriber/BgImgSubscriber';
import subscriberbgImg from '../../assets/img/subscribers-digialidentity.png';

import heroImg from '../../assets/img/backgrounds/personaldatastorage-hero.png';
import featurehive from '../../assets/img/explain-hive.png';
import datasendbox from '../../assets/img/features/data-sendboxing.png';
import didintegration from '../../assets/img/features/did-integraiton.png';
import financialinteraction from '../../assets/img/features/financial-interaction.png';
import usercustomization from '../../assets/img/features/user-customization.png';
import vaultselect from '../../assets/img/features/vault-selection.png';
import accessibility from '../../assets/img/features/accessibility.png';

const PersonalDataStorage = () => {
  const features = [
    {
      title: 'Vault Selection',
      img: vaultselect,
      text:
        'Elastos Hive allows users to select their own storage location, referred to as a Vault.',
    },
    {
      title: 'Accessibility',
      img: accessibility,
      text: 'Accessibility',
    },
    {
      title: 'Data Sandboxing',
      img: datasendbox,
      text:
        'Elastos Hive sandboxes data corresponding to each application and DID for maximum security.',
    },
    {
      title: 'DID Integration',
      img: didintegration,
      text:
        'All Elastos Hive Vaults are linked to and accessible exclusively via Elastos Decentralized Identities (DIDs) , providing a secure system of ownership backed by the hashpower of the Bitcoin blockchain.',
    },
    {
      title: 'User Customization',
      img: usercustomization,
      text:
        'Access controls allow data-owning individuals to leverage Elastos Decentralized Identity (DID) functions to select other users that can read or contribute to his or her data, as well as to specify conditions for which reading and contribution are allowed and disallowed.',
    },
    {
      title: 'Financial Incentives',
      img: financialinteraction,
      text:
        'Increased attention is being dedicated to incentivizing and growing a decentralized community of Hive Nodes by equipping Vault providers with a built-in payment module.',
    },
  ];
  return (
    <>
      <Navbar />
      <main
        style={{
          background: '#e5e5e5',
        }}
      >
        <Hero
          shortInfo='Personal Data Storage Solutions'
          bgImg={heroImg}
          title='Decentralized Storage With Elastos Hive'
          intro='Decentralized Storage (Hive) is a new architectural model that allows users to ‘own their own data’. With this technology users can now benefit from a powerful line of features including ‘Vault’ selection, accessibility, data sandboxing, and Decentralized Identity (DID) integration.'
          maxWidth='722px'
        />
        <ContentContainer>
          <SplitWrap className='mt-5'>
            <div className='features-split-inner section-inner'>
              <div className='split-wrap'>
                <SplitItem
                  imgSrc={featurehive}
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
        </ContentContainer>

        <Features features={features} />
      </main>
      <FooterContainer style={{ marginTop: 150 }}>
        <BgImgSubscriber
          bgImg={subscriberbgImg}
          title='Ready to integrate Decentralized Storage into your website?'
          text='Use the Elastos Decentralized Storage (Hive) JS SDK'
          BtnText='Get started'
        />
        <Footer />
      </FooterContainer>
    </>
  );
};

export default PersonalDataStorage;
