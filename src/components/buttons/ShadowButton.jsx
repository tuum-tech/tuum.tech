import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border-radius: 10px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  position: relative;

  cursor: pointer;
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
  id = 'shadowbutton',
  hasSahdow = false,
  className = '',
}) => {
  return (
    <Container
      onClick={onClick}
      style={style ? style : {}}
      className={className ? className : ''}
      id={id}
    >
      {text}
      {hasSahdow && <Shadow style={{ background: shadowBg }} />}
    </Container>
  );
};

export default ShadowButton;
