import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../../../components/buttons/ShadowButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: #4c6fff;
  padding: 20px 2rem;

  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    margin: 20px 70px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    p {
      text-align: center;
      margin-right: 0;
    }
    div {
      margin-bottom: 20px;
    }
  }
`;

const ExplorerMore = () => {
  return (
    <Container>
      <p>Carry on learning about Tuum Technologies solutions</p>
      <ShadowButton
        text='Explore more solutions'
        style={{
          width: '186px',
          height: '36px',
          lineHeight: '36px',
          background: '#FFFFFF',
          color: '#4C6FFF',
        }}
        shadowBg='rgba(21, 38, 108, 0.24)'
        onClick={() => {}}
      />
    </Container>
  );
};

export default ExplorerMore;
