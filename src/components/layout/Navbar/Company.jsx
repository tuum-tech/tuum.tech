import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => (
  <li className='nav-item dropdown'>
    <Link to='/' className='nav-link' data-toggle='dropdown' role='button'>
      <i className='ni ni-collection d-lg-none' />
      <span className='nav-link-inner--text'>Company</span>
    </Link>
    <div className='dropdown-menu'>
      <Link to='/about' className='dropdown-item'>
        About Team
      </Link>
      <Link to='/careers' className='dropdown-item'>
        Careers
      </Link>
    </div>
  </li>
);

export default Company;
