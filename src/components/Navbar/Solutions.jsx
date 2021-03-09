import React from 'react';

const Opportunites = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Solutions</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/' className='dropdown-item'>
          Digital Identity
        </a>
        <a href='/' className='dropdown-item'>
          Verifiable Credentials
        </a>
        <a href='/' className='dropdown-item'>
          Personal Data Storage
        </a>
        <a href='/' className='dropdown-item'>
          Peer-to-Peer Network
        </a>
      </div>
    </li>
  );
};

export default Opportunites;
