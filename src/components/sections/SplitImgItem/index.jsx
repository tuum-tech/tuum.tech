import React from 'react';

import './style.scss';

const SplitImgItem = ({ imgSrc, title, intro, description }) => {
  return (
    <div className='split-item'>
      <div className='split-item-content' data-reveal-container='.split-item'>
        <div className='font-weight-bold mb-1'>{intro}</div>
        <h3 className='mt-0 mb-12 font-weight-bold'>{title}</h3>
        <p className='m-0'>{description}</p>
      </div>
      <div className='split-item-image' data-reveal-container='.split-item'>
        <img src={imgSrc} alt='Features split' />
      </div>
    </div>
  );
};

export default SplitImgItem;
