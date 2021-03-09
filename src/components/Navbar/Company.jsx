import React from 'react';

const Company = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Company</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/' className='dropdown-item'>
          Tuum
        </a>
        <a href='/' className='dropdown-item'>
          Team Members
        </a>
      </div>
    </li>
  );
};

export default Company;
