import React from 'react';

import './style.scss';

const SplitItem = ({ imgSrc, title, intro, description }) => {
  return (
    <div className='split-item'>
      <div
        className='split-item-content center-content-mobile reveal-from-left'
        data-reveal-container='.split-item'
      >
        <h3 className='mt-0 mb-12 font-weight-bold'>{title}</h3>
        <div className='font-weight-bold mb-1'>{intro}</div>

        <p className='m-0'>{description}</p>
      </div>
      <div
        className='split-item-image center-content-mobile reveal-from-bottom'
        data-reveal-container='.split-item'
      >
        <img src={imgSrc} alt='Features split 01' width={528} height={396} />
      </div>
    </div>
  );
};

export default SplitItem;
