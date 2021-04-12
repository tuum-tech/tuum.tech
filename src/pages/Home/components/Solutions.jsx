import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import ShadowButton from '../../../components/buttons/ShadowButton';
import { HeaderTitle, ContentText } from '../../../components/Texts';

import peertopeernetworkImg from '../../../assets/img/solutions/peer-to-peer-network.png';
import digitalidentityImg from '../../../assets/img/solutions/digital-identity.png';
import personaldatastorageImg from '../../../assets/img/solutions/personal-datastorage.png';
import verifiablecredentialImg from '../../../assets/img/solutions/verifiable-credentials.png';

const RowContainer = styled.div`
  width: 100%;
  background: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const Solution = styled.div`
  width: calc(25% - 9px);
  position: relative;
  margin-top: 20px;
  margin-bottom: 50px;

  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 0px 20px 50px 10px rgba(193, 203, 244, 0.2);
  border-radius: 31px;

  @media only screen and (max-width: 992px) {
    width: calc(50% - 9px);
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

const SolutionImg = styled.div`
  height: 140px;
  width: 100%;
  background-size: cover !important;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const SolutionContent = styled.div`
  padding: 0px 9px 90px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 81px;
    height: 81px;
  }

  button {
    width: 186px;
    height: 36px;
    lineheight: 36px;
    background: white;
    cursor: pointer;
    color: white;

    position: absolute;
    bottom: 30px;
  }
`;

const Title = styled(HeaderTitle)`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;

  text-align: center;
  color: #17171b;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const Text = styled(ContentText)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #4a5568;
  margin-top: 30px;
`;

const Solutions = () => {
  const history = useHistory();

  const btnStyle = {
    width: '186px',
    height: '36px',
    lineHeight: '36px',
    background: '#4c6fff',
    cursor: 'pointer',
  };
  return (
    <RowContainer>
      <Solution>
        <SolutionImg
          style={{
            background: `url(${digitalidentityImg})`,
          }}
        />
        <SolutionContent>
          <Title>Digital Identity</Title>
          <Text>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </Text>
          <ShadowButton
            style={btnStyle}
            text='Learn More'
            onClick={() => {
              history.push('/solutions/digitalidentity');
            }}
          />
        </SolutionContent>
      </Solution>
      <Solution>
        <SolutionImg
          style={{
            background: `url(${verifiablecredentialImg})`,
          }}
        />
        <SolutionContent>
          <Title>Verifiable Credentials</Title>
          <Text>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </Text>
          <ShadowButton
            style={btnStyle}
            text='Learn More'
            onClick={() => {
              history.push('/solutions/verifiedcredential');
            }}
          />
        </SolutionContent>
      </Solution>
      <Solution>
        <SolutionImg
          style={{
            background: `url(${personaldatastorageImg})`,
          }}
        />
        <SolutionContent>
          <Title>Personal Data Storage</Title>
          <Text>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </Text>
          <ShadowButton
            style={btnStyle}
            text='Learn More'
            onClick={() => {
              history.push('/solutions/personaldatastorage');
            }}
          />
        </SolutionContent>
      </Solution>
      <Solution>
        <SolutionImg
          style={{
            background: `url(${peertopeernetworkImg})`,
          }}
        />
        <SolutionContent>
          <Title>Peer-to-Peer Network</Title>
          <Text className='txt'>
            In this digital world we all need a digital identity that we own.
            Quickly, and easily, create a self-sovereign DID.
          </Text>
          <ShadowButton
            text='Coming soon'
            style={{
              color: '#afb3d1',
            }}
          />
        </SolutionContent>
      </Solution>
    </RowContainer>
  );
};

export default Solutions;
