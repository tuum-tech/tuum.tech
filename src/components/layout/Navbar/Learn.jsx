import React from 'react';
import { Link } from 'react-router-dom';

const Learn = () => {
  return (
    <li className='nav-item dropdown'>
      <Link href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Learn</span>
      </Link>
      <div className='dropdown-menu'>
        <Link href='/' className='dropdown-item'>
          Elastos Academy
        </Link>
        <Link href='/' className='dropdown-item'>
          Elastos Info
        </Link>
        <Link href='/' className='dropdown-item'>
          Elastos Official Site
        </Link>
      </div>
    </li>
  );
};

export default Learn;
