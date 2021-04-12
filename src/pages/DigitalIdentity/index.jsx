import React from "react";

import {
  Navbar,
  Footer,
  FooterContainer,
  Hero,
  ContentContainer,
} from "../../components/layout";
import Features from "../../components/Features";
import { SplitWrap, SplitItem } from "../../components/SplitComp";

import heroImg from "../../assets/img/backgrounds/solutions-hero.png";
import BgImgSubscriber from "../../components/Subscriber/BgImgSubscriber";
import subscriberbgImg from "../../assets/img/subscribers-digialidentity.png";
import explainImg from "../../assets/img/explain-newtypedigital.png";
import ownership from "../../assets/img/profile-ID.png";
import tamper from "../../assets/img/profile-account.png";
import bringdata from "../../assets/img/features/bringdata.png";
import getdidsImg from "../../assets/img/explain-getdids.png";
import assistImg from "../../assets/img/explain-assist.png";

const DigitalIdentityPage = () => {
  const features = [
    {
      title: "Proof of Ownership",
      img: ownership,
      text:
        "Elastos Decentralized Identities (DIDs) provide independent proof of ownership to every user and enable every individual to generate a DID. In essence, DID is at the heart of Web3’s operational mechanism that enables individuals to “own their own data.”",
    },
    {
      title: "Tamper-Proof, Interoperable Identification for Everyone.",
      img: tamper,
      text:
        "Today’s internet is dominated by large companies that make you log in with their in-house logins to access your data. An open source Universal ID (UID) system like Elastos Decentralized Identities (DIDs) allows you to trust code - not corporations controlling your data.",
    },
    {
      title: "Bring Data Back to its Owners!",
      img: bringdata,
      text:
        "By issuing Universal IDs (UIDs) to everyone on the internet, blockchain automates trust. In a blockchain-based system of exchange, transactions occur only between individuals, thereby dissolving central authorities and intermediaries.",
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo="Digital Identity Solutions"
          bgImg={heroImg}
          title="Self-Sovereign Digital Identity Online"
          intro="Our lives are now linked to the apps, devices, and services that we use every day. But, with each new digital connection we expose our identity and data to new risks beyond our control."
        />
        <ContentContainer>
          <SplitWrap className="mt-5 mb-5">
            <div className="features-split-inner section-inner">
              <div className="split-wrap">
                <SplitItem
                  imgSrc={explainImg}
                  title="What are Decentralized Identities (DIDs)?"
                  description="These are IDs users create, own, and control completely independent of any business or government. Each new DID is issued by an autonomous, independent, and decentralized platform that acts as proof of ownership for the digital identity."
                  onClick={() =>
                    (window.location.href = "https://elastos.academy/did/")
                  }
                  btnText="Learn More at Elastos Academy"
                />
              </div>
            </div>
          </SplitWrap>
        </ContentContainer>
        <Features features={features} bgColor="#E5E5E5" />
        <ContentContainer>
          <SplitWrap className="mt-5">
            <div className="features-split-inner section-inner">
              <div className="split-wrap">
                <SplitItem
                  imgSrc={assistImg}
                  title="Assist"
                  description="Assist is a service that provides simplicity and mitigates the difficulties for users associated with blockchain-based applications. This product is based on blockchain technology and is a tool to support the publication of Decentralized Identities (DIDs). As with many pioneering technologies, pain points lead to a sub- optimal user experience. Assist has been developed to operate in the background and seamlessly execute functions that enhance user experience for newcomers to digital identity."
                  onClick={() => {}}
                  btnText="Github"
                />
                <SplitItem
                  imgSrc={getdidsImg}
                  introTwo="At getdids.com we keep it very simple"
                  title="getdids.com"
                  description="Log in, save your security words, and publish a new digital identity to the blockchain – that’s it! Now you have your very own unique proof of ownership and can begin owning your data."
                  onClick={() => {}}
                  btnText="Github"
                />
              </div>
            </div>
          </SplitWrap>
        </ContentContainer>
      </main>
      <BgImgSubscriber bgImg={subscriberbgImg} />
      <Footer />
    </>
  );
};

export default DigitalIdentityPage;
