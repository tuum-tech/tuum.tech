import React from 'react';

import userexp from '../../../assets/img/userexp.png';
import scalable from '../../../assets/img/scalable.png';
import oepnsource from '../../../assets/img/opensource.png';

import {
  Container,
  LeftSide,
  RightSide,
} from '../../DigitalIdentity/components/Explain';

const ExplorerMore = () => {
  return (
    <Container className='row'>
      <LeftSide className='col-lg-6'>
        <p className='title'>What are Verifiable Credentials?</p>
        <p className='text'>
          Verifiable credentials are the digital equivalent of physical
          credentials that we all own and are familiar with today. Some of the
          most common examples include passports, driving licenses,
          qualifications, and awards. With 60%+ of the world online it is
          critical that verifiable information be expressed on the web.
        </p>
      </LeftSide>
      <RightSide className='col-lg-6'>
        <div className='row mb-4'>
          <img src={userexp} alt='userexp' />
          <div className='text-area'>
            <p className='title'>Easy User Experience</p>
            <p className='text'>
              Give your users the ability to generate verifiable credentials
              using our Vouch service.
            </p>
          </div>
        </div>

        <div className='row mb-4'>
          <img src={scalable} alt='scalable' />
          <div className='text-area'>
            <p className='title'>Scalable and Flexible</p>
            <p className='text'>
              Verify any type of data for any entity or individual in a secure
              and scalable way.
            </p>
          </div>
        </div>
        <div className='row mb-4'>
          <img src={oepnsource} alt='oepnsource' />
          <div className='text-area'>
            <p className='title'>Open Source</p>
            <p className='text'>
              Built using W3C standards, Elastos Decentralized Identity (DID)
              provides greater transparency and seamless integration with
              identity verification partners.
            </p>
          </div>
        </div>
      </RightSide>
    </Container>
  );
};

export default ExplorerMore;
