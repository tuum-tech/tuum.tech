import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WhiteBoxArea = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 217px;
  margin-top: -180px;

  position: relative;
  padding: 0px 11% 50px;

  @media only screen and (max-width: 992px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 576px) {
    display: block;
  }
`;

const WhiteBox = styled.div`
  width: 30%;
  background: #ffffff;
  border-radius: 14px;
  min-height: 217px;
  padding: 93px 27px 70px;
  position: relative;

  box-shadow: 0px 20px 50px 10px rgba(193, 203, 244, 0.2);

  font-family: 'SF Pro Display';
  font-style: normal;
  text-align: center;

  @media only screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 63px;
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
`;

const BoxItem = ({ title, description, link, linkText }) => (
  <WhiteBox>
    <p className='title'>{title}</p>
    <p className='description'>{description}</p>
    <Link to={link}>{linkText}</Link>
  </WhiteBox>
);

const WhiteBoxes = () => {
  return (
    <WhiteBoxArea>
      <BoxItem
        title='Profile'
        description='Profile is a new type of digital identity owned by you - where genuine connections happen, and real-world networking begins online.'
        link='/products/profile'
        linkText='Learn more'
      ></BoxItem>
      <BoxItem
        title='Get a DID'
        description='Log in, save your security words, and publish a new digital identity to the blockchain – that’s it!'
        link='/solutions/digitalidentity'
        linkText='Get started'
      ></BoxItem>
      <BoxItem
        title='About us'
        description='Log in, save your security words, and publish a new digital identity to the blockchain – that’s it!'
        link='/about'
        linkText='Get started'
      ></BoxItem>
    </WhiteBoxArea>
  );
};

export default WhiteBoxes;
