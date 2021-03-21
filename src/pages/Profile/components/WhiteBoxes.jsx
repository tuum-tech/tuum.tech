import React from 'react';
import styled from 'styled-components';

const WhiteBoxArea = styled.div`
  position: relative;
  width: calc(100$ - 4em);
  margin: 200px 2em 250px;
  padding: 160px 11px 300px;
`;

const WhiteBox1 = styled.div`
  display: flex;
  text-align: center;
  padding: 76px 22px 12px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 33px;
  line-height: 45px;

  text-align: center;

  color: #17171b;

  position: absolute;
  width: 622px;
  height: 319px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  background: #ffffff;

  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
`;
const WhiteBox2 = styled.div`
  position: absolute;
  width: 582px;
  height: 284px;
  left: 50%;
  top: 58px;
  transform: translateX(-50%);

  background: #ffffff;

  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
`;
const WhiteBox3 = styled.div`
  position: absolute;
  width: 512px;
  height: 259px;
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
        Profile is a new type of digital identity owned by you — where genuine
        connections happen, and real-world networking online begins.
      </WhiteBox1>
    </WhiteBoxArea>
  );
};

export default WhiteBoxes;
