import React from 'react';

import styled from 'styled-components';

const SectionImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionBgColorcontainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionContent = styled.div`
  width: 88%;
  margin: 0 auto;
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

const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 55px;
  text-align: center;
  color: #17171b;
  margin-bottom: 30px;
`;

const Section = ({
  contentText,
  bgColor = 'transparent',
  txtColor = '#4a5568',
  bgImg,
  maxWidth = '100%',
  children,
  title,
  padding = '138px 0',
}) => {
  return (
    <SectionImgContainer
      style={{
        background: bgImg ? `url(${bgImg})` : 'transparent',
      }}
    >
      <SectionBgColorcontainer style={{ backgroundColor: bgColor }}>
        <SectionContent style={{ maxWidth: maxWidth, padding: padding }}>
          {title && <SectionTitle>{title}</SectionTitle>}
          {contentText && (
            <SectionText style={{ color: txtColor }}>{contentText}</SectionText>
          )}
          {children && children}
        </SectionContent>
      </SectionBgColorcontainer>
    </SectionImgContainer>
  );
};

export default Section;
