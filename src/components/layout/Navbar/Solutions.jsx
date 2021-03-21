import React from 'react';

const Opportunites = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Solutions</span>
      </a>
      <div className='dropdown-menu'>
        <a href='/solutions/digitalidentity' className='dropdown-item'>
          Digital Identity
        </a>
        <a href='/solutions/verifiedcredential' className='dropdown-item'>
          Verifiable Credentials
        </a>
        <a href='/solutions/personaldatastorage' className='dropdown-item'>
          Personal Data Storage
        </a>
        <a href='/solutions/peertopeernetwork' className='dropdown-item'>
          Peer-to-Peer Network
        </a>
      </div>
    </li>
  );
};

export default Opportunites;
