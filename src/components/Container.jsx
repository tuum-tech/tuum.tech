import React from 'react';
import styled from 'styled-components';

const ContainerArea = styled.div`
  width: 100%;
  padding-left: 11%;
  padding-right: 11$;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Conatiner = ({ bgColor }) => {
  return (
    <ContainerArea
      style={{
        backgroundColor: bgColor ? bgColor : 'transparent',
      }}
    />
  );
};

export default Conatiner;
