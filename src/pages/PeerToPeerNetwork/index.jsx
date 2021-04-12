import React from "react";
import styled from "styled-components";

import { Navbar, Footer, Hero } from "../../components/layout";
import Features from "./components/Features";
import ExplorerMore from "./components/ExplorerMore";
import heroImg from "../../assets/img/backgrounds/peertopeernetwork-hero.png";

const DisplayText = styled.div`
  text-align: center;
  position: relative;
  width: 88%;
  max-width: 950px;
  margin: 130px auto 0px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4a5568;

  @media only screen and (max-width: 992px) {
    width: calc(100% - 4rem);
  }
`;

const PeerToPeerNetwork = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          shortInfo="Solutions"
          bgImg={heroImg}
          title="Peer-to-Peer Network"
          intro={
            "Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web."
          }
        />
        <DisplayText>
          Tuum Technologies is the world’s leading Elastos software company. We
          enable a global network of entrepreneurs, developers, academics,
          industry experts, and users to access the decentralized internet.
          Through our network we provide teams the resources necessary to build
          revolutionary applications and launch decentralized platforms. Elastos
          is the largest Web3 provider of open source solutions, employing not
          only blockchain technology, but a peer-to-peer network for
          communication, decentralized data storage services, and a
          decentralized ID system. With Elastos, we are revolutionizing the
          internet.
        </DisplayText>
        <Features />
        <ExplorerMore />
      </main>
      <Footer hasSubscriber={false} />
    </>
  );
};

export default PeerToPeerNetwork;
