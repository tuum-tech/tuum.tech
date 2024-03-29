import React, { useEffect } from 'react';

import {
  Navbar,
  Footer,
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
      text:
        'Client-side SDKs make for easy access and rapid Vault storage via either files or database APIs.',
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo='Personal Data Storage Solutions'
          bgImg={heroImg}
          title='Decentralized Storage With Elastos Hive'
          intro='Decentralized Storage (Hive) is a new architectural model that allows users to ‘own their own data’. With this technology users can now benefit from a powerful line of features including ‘Vault’ selection, accessibility, data sandboxing, and Decentralized Identity (DID) integration.'
          maxWidth='722px'
        />
        <ContentContainer>
          <SplitWrap className='mt-5 mb-5'>
            <div className='features-split-inner section-inner'>
              <div className='split-wrap'>
                <SplitItem
                  imgSrc={featurehive}
                  title='What is Elastos Decentralized Storage (Hive)?'
                  description='Hive is an Elastos’ semi-decentralized storage solution. In this Hive architecture, no blockchain is used. Instead, data is stored on traditional “servers” (called “Hive nodes”) and accessed using traditional “API calls”. Though, the key feature of hive is that the servers are not provided by the application developers. They are provided as independent services by third parties or by end users themselves. Also, user data can be transferred at any moment to another location.'
                  onClick={() => window.open('https://elastos.academy/hive/')}
                  btnText='Learn More at Elastos Academy'
                />
              </div>
            </div>
          </SplitWrap>
        </ContentContainer>

        <Features features={features} bgColor='#FAFAFA'>
          <BgImgSubscriber
            bgImg={subscriberbgImg}
            title='Ready to integrate Decentralized Storage into your website?'
            text='Use the Elastos Decentralized Storage (Hive) JS SDK'
            BtnText='Get started'
            bgColor='#FAFAFA'
          />
        </Features>
        <Footer />
      </main>
    </>
  );
};

export default PersonalDataStorage;
