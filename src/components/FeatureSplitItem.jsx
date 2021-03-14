import React from 'react';
import styled from 'styled-components';

import ShadowButton from './buttons/ShadowButton';

const SplitImgItemContainer = styled.div`
  .split-item-content {
    .intro {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      color: #17171b;
    }
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 55px;
      display: flex;
      align-items: center;
      color: #17171b;
    }
    .txt {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      display: flex;
      align-items: center;

      color: #4a5568;
      margin-top: 30px;
    }
  }
  .split-item-image {
    position: relative;
    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: #4c6fff;
      mix-blend-mode: multiply;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    img {
      width: 100% !important;
      max-height: 300px !important;
      object-fit: cover !important;
    }
  }
`;

const SplitImgItem = ({ imgSrc, title, intro, description, onClick }) => {
  return (
    <SplitImgItemContainer className='split-item'>
      <div className='split-item-content' data-reveal-container='.split-item'>
        <p className='intro'>{intro}</p>
        <p className='title'>{title}</p>
        <p className='txt'>{description}</p>
        <ShadowButton
          text='Github'
          style={{
            width: '186px',
            height: '36px',
            lineHeight: '36px',
            marginTop: '20px',
            marginBottom: '20px',
            background: '#17171B',
          }}
          shadowBg='rgba(23, 23, 27, 0.1);'
          onClick={onClick}
        />
      </div>
      <div className='split-item-image' data-reveal-container='.split-item'>
        <img src={imgSrc} alt='Features split' />
        <div className='shadow' />
      </div>
    </SplitImgItemContainer>
  );
};

export default SplitImgItem;
