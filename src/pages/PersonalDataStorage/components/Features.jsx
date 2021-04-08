import React from 'react';
import styled from 'styled-components';

import accessibility from '../../../assets/img/hive/accessibility.png';
import datasendbox from '../../../assets/img/hive/data-sendboxing.png';
import didintegration from '../../../assets/img/hive/did-integraiton.png';
import financialinteraction from '../../../assets/img/hive/financial-interaction.png';
import usercustomization from '../../../assets/img/hive/user-customization.png';
import vaultselect from '../../../assets/img/hive/vault-selection.png';

const Container = styled.div`
  margin: 0 auto;
  padding: 0px 11%;
  display: flex;
`;

const Section = styled.div`
  width: 33%;
  display: block;
  margin-bottom: 70px;

  img {
    height: 76px;
    width: auto;
    margin-bottom: 28px;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #17171b;
    margin-bottom: 21px;
  }

  .text {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;

    color: #4a5568;
    max-width: 300px;
  }
`;

const Explain = () => {
  const firstRows = [
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
  ];
  const secondRows = [
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
      <Container>
        {firstRows.map((item) => (
          <Section>
            <img src={item.img} alt='feature' />
            <p className='title'>{item.title}</p>
            <p className='text'>{item.text}</p>
          </Section>
        ))}
      </Container>
      <Container>
        {secondRows.map((item) => (
          <Section>
            <img src={item.img} alt='feature' />
            <p className='title'>{item.title}</p>
            <p className='text'>{item.text}</p>
          </Section>
        ))}
      </Container>
    </>
  );
};

export default Explain;
