import styled from 'styled-components';

import ShadowButton from './buttons/ShadowButton';
import { SectionTitle } from './Texts';

const SplitWrap = styled.div`
  padding: 0px;

  .split-item {
    display: flex;
    flex-direction: column;

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
        font-size: 40px;
        line-height: 55px;
        display: flex;
        align-items: center;
        color: #17171b;
      }
      .txt {
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 40px;
        display: flex;
        align-items: center;
        color: #4a5568;
      }

      button {
        background: #4c6fff;
        color: white;
        min-height: 36px;
        margin-top: 20px;
        min-width: 186px;
        padding: 10px 20px;
      }

      p {
        max-width: 445px;
        margin: 0 auto 0 0;
      }
    }

    .split-item-image {
      position: relative;
      width: 100%;

      img,
      svg,
      video {
        width: auto;
        height: auto;
        max-width: 400px;
        overflow: visible;
        display: block;

        width: 100% !important;
        height: auto;
        margin: 100px auto;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .split-item {
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
        button,
        p {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }
      }
    }
  }
`;

const SplitTitle = styled(SectionTitle)`
  text-align: center;
  color: #000000;
  padding: 300px 2rem 100px;
`;

const SplitItem = ({
  imgSrc,
  title,
  introOne,
  introTwo,
  description,
  onClick,
  btnText,
}) => {
  return (
    <div className='split-item'>
      <div className='split-item-content' data-reveal-container='.split-item'>
        <p className='intro'>{introOne}</p>
        <p className='title'>{title}</p>
        <p className='intro mt-3'>{introTwo}</p>
        <p className='txt mt-1'>{description}</p>
        {btnText && (
          <ShadowButton
            // stype={{ paddingTop: '20px !important' }}
            text={btnText}
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
    </div>
  );
};

export { SplitItem, SplitWrap, SplitTitle };
