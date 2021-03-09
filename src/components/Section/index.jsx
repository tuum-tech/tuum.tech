import React from 'react';

import { SectionText, SectionContainer, SectionBgContainer } from './style';

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
