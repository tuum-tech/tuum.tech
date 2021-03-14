import React from 'react';

const Opportunites = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Opportunites</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/' className='dropdown-item'>
          FrontEnd Developer
        </a>
        <a href='/' className='dropdown-item'>
          BackEnd Developer
        </a>
        <a href='/' className='dropdown-item'>
          Marketing Manager
        </a>
      </div>
    </li>
  );
};

export default Opportunites;
