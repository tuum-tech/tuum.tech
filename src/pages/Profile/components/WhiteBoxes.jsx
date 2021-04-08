import React from 'react';
import styled from 'styled-components';

const WhiteBoxArea = styled.div`
  position: relative;
  width: calc(100$ - 4em);
  margin: -200px 2em 0;
  min-height: 150px;
`;

const WhiteBox1 = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 46px 22px;

  font-size: 25px;
  line-height: 40px;
  text-align: center;
  color: #17171b;

  position: absolute;
  height: 264px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  background: #ffffff;

  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;

  max-width: 622px;
  width: 88%;
`;
const WhiteBox2 = styled.div`
  max-width: 582px;
  width: 84%;

  position: absolute;
  height: 235px;
  left: 50%;
  top: 58px;
  transform: translateX(-50%);

  background: #ffffff;

  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
`;
const WhiteBox3 = styled.div`
  max-width: 512px;
  width: 80%;

  position: absolute;
  height: 215px;
  left: 50%;
  top: 102px;
  transform: translateX(-50%);

  background: #ffffff;
  border-radius: 20px;
`;

const WhiteBoxes = () => {
  return (
    <WhiteBoxArea>
      <WhiteBox3></WhiteBox3>
      <WhiteBox2></WhiteBox2>
      <WhiteBox1>
        Profile is a new type of digital identity owned by you where genuine
        connections happen, and real-world networking begins online.
      </WhiteBox1>
    </WhiteBoxArea>
  );
};

export default WhiteBoxes;
