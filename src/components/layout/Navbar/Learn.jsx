import React from 'react';

const Learn = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Learn</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/solutions/digitalidentity' className='dropdown-item'>
          Elastos Academy
        </a>
      </div>
    </li>
  );
};

export default Learn;
