import React from 'react';

import styled from 'styled-components';
import { SectionText, SectionTitle } from '../Texts';

export const SectionImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SectionBgColorcontainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SectionContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Section = ({
  containerStyle,
  contentText,
  bgColor = 'transparent',
  txtStyle,
  maxWidth = '100%',
  children,
  title,
  padding = '138px 0',
}) => {
  return (
    <SectionImgContainer style={containerStyle}>
      <SectionBgColorcontainer style={{ backgroundColor: bgColor }}>
        <SectionContent style={{ maxWidth: maxWidth, padding: padding }}>
          {title && <SectionTitle>{title}</SectionTitle>}
          {contentText && (
            <SectionText style={txtStyle}>{contentText}</SectionText>
          )}
        </SectionContent>
        {children && children}
      </SectionBgColorcontainer>
    </SectionImgContainer>
  );
};

export default Section;
