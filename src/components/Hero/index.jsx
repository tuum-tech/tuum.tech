import React from 'react';
import { MDBContainer } from 'mdbreact';

import ArgonReactWhite from '../../assets/img/brand/argon-react-white.png';

import './style.scss';

const Hero = () => {
  return (
    <div className='headerContainer'>
      <MDBContainer>
        <div className='headerContainer_content'>
          <h1 className='text-white'>
            The Most Trusted Etherum Blockchain Solutions
          </h1>
          <p>
            Tuum.Tech is the software engineering leader of the blockchain
            space. Our full-stack Ethereum products help developers build
            next-generation networks and enable enterprises to launch more
            powerful financial infrastructure.
          </p>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Hero;
