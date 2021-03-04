import React from 'react';

import './style.scss';

const Hero = () => {
  return (
    <div className='headerContainer'>
      <div className='container'>
        <div className='headerContainer_content'>
          <h1 className='text-white'>Empowering people in a digital world</h1>
          <p>
            We combine software development with a decentralized vision that
            pairs users’ digital identities with data ownership.
          </p>

          <button type='button' class='btn btn-primary mt-1'>
            EXPLORE OUR SOLUTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
