import React from 'react';
import { Link } from 'react-router-dom';

const Opportunites = () => {
  return (
    <li className='nav-item dropdown'>
      <Link to='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Solutions</span>
      </Link>
      <div className='dropdown-menu'>
        <Link to='/solutions/digitalidentity' className='dropdown-item'>
          Digital Identity
        </Link>
        <Link to='/solutions/verifiedcredential' className='dropdown-item'>
          Verifiable Credentials
        </Link>
        <Link to='/solutions/personaldatastorage' className='dropdown-item'>
          Personal Data Storage
        </Link>
      </div>
    </li>
  );
};

export default Opportunites;
