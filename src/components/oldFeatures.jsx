import styled from 'styled-components';

import ShadowButton from './buttons/ShadowButton';

const SplitWrap = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 1091px;

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
        width: calc(60% - 25px);
        margin-left: 0;
        margin-right: 25px;
      }

      .split-item-image {
        width: calc(40% - 25px);
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

const FeatureSplitItem = ({
  imgSrc,
  title,
  intro,
  description,
  onClick,
  btnText,
}) => {
  return (
    <SplitImgItemContainer className='split-item'>
      <div className='split-item-content' data-reveal-container='.split-item'>
        <p className='intro'>{intro}</p>
        <p className='title'>{title}</p>
        <p className='txt'>{description}</p>
        {btnText && (
          <ShadowButton
            text={btnText}
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
        )}
      </div>
      <div className='split-item-image' data-reveal-container='.split-item'>
        <img src={imgSrc} alt='Features split' />
        <div className='shadow' />
      </div>
    </SplitImgItemContainer>
  );
};

export { FeatureSplitItem, SplitWrap, SplitImgItemContainer };
