import React from 'react';

const Solutions = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Solutions</span>
      </a>
      <div className='dropdown-menu'>
        <a href='../examples/landing.html' className='dropdown-item'>
          Asset Management
        </a>
        <a href='../examples/profile.html' className='dropdown-item'>
          Captial Markets
        </a>
        <a href='../examples/login.html' className='dropdown-item'>
          Decentralized Finance
        </a>
        <a href='../examples/register.html' className='dropdown-item'>
          Global Trade And Commerce
        </a>
      </div>
    </li>
  );
};

export default Solutions;
