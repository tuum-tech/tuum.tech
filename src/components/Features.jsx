import styled from 'styled-components';

import ShadowButton from './buttons/ShadowButton';

const SplitWrap = styled.div`
  margin: 0 auto;
  padding: 100px 11%;

  .split-item {
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;

    .split-item-image {
      position: relative;
      width: 100%;

      img,
      svg,
      video {
        width: auto;
        height: auto;
        max-width: 100%;
        overflow: visible;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .split-item {
      padding-top: 40px;
      padding-bottom: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;

      .split-item-content {
        flex-shrink: 0;
        margin-bottom: 0;
        width: 50%;
        margin-left: 0;
        margin-right: 25px;
      }

      .split-item-image {
        width: 50%;
        margin-left: 25px;
        margin-right: 0;
      }
    }

    .split-item:nth-child(even) {
      justify-content: flex-end;

      .split-item-content {
        order: 1;
        margin-left: 25px;
        margin-right: 0;
      }

      .split-item-image {
        margin-left: 0;
        margin-right: 25px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .split-item {
      .split-item-content {
        margin-bottom: 32px;
      }
    }

    &.invert-mobile {
      .split-item {
        .split-item-content {
          order: 1;
          margin-bottom: 0 !important;
        }

        .split-item-image {
          margin-bottom: 32px;
        }
      }
    }
  }
`;

const SplitImgItemContainer = styled.div`
  .split-item-content {
    .intro {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      color: #4c6fff;
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
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      display: flex;
      align-items: center;

      color: #4a5568;
    }
  }
  .split-item-image {
    position: relative;

    img {
      width: 100% !important;
      height: auto;
      // max-height: 300px !important;
      // object-fit: cover !important;
    }
  }
`;

const FeatureSplitItem = ({
  imgSrc,
  title,
  introOne,
  introTwo,
  description,
  onClick,
  btnText,
}) => {
  return (
    <SplitImgItemContainer className='split-item'>
      <div className='split-item-content' data-reveal-container='.split-item'>
        <p className='intro'>{introOne}</p>
        <p className='title'>{title}</p>
        <p className='intro mt-3'>{introTwo}</p>
        <p className='txt mt-1'>{description}</p>
        {btnText && (
          <ShadowButton
            text={btnText}
            style={{
              width: '186px',
              height: '36px',
              lineHeight: '36px',
              marginTop: '20px',
              marginBottom: '20px',
              background: '#4C6FFF',
            }}
            shadowBg='rgba(23, 23, 27, 0.3)'
            onClick={onClick}
          />
        )}
      </div>
      {imgSrc && (
        <div className='split-item-image' data-reveal-container='.split-item'>
          <img src={imgSrc} alt='Features split' />
        </div>
      )}
    </SplitImgItemContainer>
  );
};

export { FeatureSplitItem, SplitWrap, SplitImgItemContainer };
