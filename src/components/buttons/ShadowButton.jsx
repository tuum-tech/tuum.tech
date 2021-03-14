import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  position: relative;
`;

const Shadow = styled.div`
  width: 120%;
  height: 200%;

  position: absolute;
  left: -10%;
  top: 20px;

  filter: blur(54px);
  border-radius: 10px;
`;

const ShadowButton = ({
  text,
  onClick,
  style,
  shadowBg = 'rgba(76, 111, 255, 0.24)',
}) => {
  return (
    <Container onClick={onClick} style={style}>
      {text} <Shadow style={{ background: shadowBg }} />
    </Container>
  );
};

export default ShadowButton;
