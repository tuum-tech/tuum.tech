import React from 'react';

const Developers = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Developers</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/solutions/digitalidentity' className='dropdown-item'>
          Developer Portal
        </a>
      </div>
    </li>
  );
};

export default Developers;
