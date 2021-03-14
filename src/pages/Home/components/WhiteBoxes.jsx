import React from 'react';
import styled from 'styled-components';

const WhiteBoxArea = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 217px;
  margin-top: -59px;

  position: relative;
  padding-left: 11%;
  padding-right: 11%;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const WhiteBox = styled.div`
  width: 30%;
  background: #ffffff;
  border-radius: 14px;
  height: 217px;

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 63px;
  }
`;

const WhiteBoxes = () => {
  return (
    <WhiteBoxArea>
      <WhiteBox></WhiteBox>
      <WhiteBox></WhiteBox>
      <WhiteBox></WhiteBox>
    </WhiteBoxArea>
  );
};

export default WhiteBoxes;
