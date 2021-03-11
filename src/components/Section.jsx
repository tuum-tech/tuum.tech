import React from 'react';

import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 138px 25%;
`;

const SectionBgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;
`;

export { SectionText, SectionContainer, SectionBgContainer };

const Section = ({ contentText, bgColor, txtColor, bgImg }) => {
  return (
    <SectionBgContainer
      style={{
        background: bgImg ? `url(${bgImg})` : 'transparent',
      }}
    >
      <SectionContainer
        style={{
          backgroundColor: bgColor ? bgColor : 'transparent',
        }}
      >
        <SectionText
          style={{
            color: txtColor ? txtColor : '#4a5568',
          }}
        >
          {contentText}
        </SectionText>
      </SectionContainer>
    </SectionBgContainer>
  );
};

export default Section;
