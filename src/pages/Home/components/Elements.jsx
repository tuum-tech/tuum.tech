import styled from 'styled-components';

export const LinkButton = styled.button`
  outline: none;
  border: transparent;
  background: transparent;

  font-weight: 600;
  font-size: 16px;
  line-height: 25px;

  color: #4c6fff;
`;

export const WhiteBoxArea = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 217px;
  margin-top: -180px;

  position: relative;
  padding: 0px;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const WhiteBox = styled.div`
  width: 30%;
  background: #ffffff;
  border-radius: 14px;
  min-height: 217px;
  padding: 30px 27px 30px;
  position: relative;

  box-shadow: 0px 20px 50px 10px rgba(193, 203, 244, 0.2);
  margin-bottom: 100px;

  font-family: 'SF Pro Display';
  font-style: normal;
  text-align: center;

  img {
    width: auto;
    height: 70px;
    margin-bottom: 17px;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;

    color: #000000;
  }

  .description {
    margin-top: 13px;
    margin-bottom: 13px;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;

    color: #4a5568;
  }

  a {
    display: block;
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);

    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    color: #4c6fff;

    text-align: center;

    &:hover {
      color: #4c6fff;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 63px;
  }
`;
