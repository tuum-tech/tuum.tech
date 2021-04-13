import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from '../../../assets/img/nav-Profile.png';
import idimg from '../../../assets/img/nav-ID.png';

const Products = () => {
  return (
    <li className='nav-item dropdown'>
      <Link to='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-ui-04 d-lg-none' />
        <span className='nav-link-inner--text'>Products</span>
      </Link>
      <div className='dropdown-menu dropdown-menu-xl'>
        <div className='dropdown-menu-inner'>
          <Link
            to='/products/profile'
            className='media d-flex align-items-center'
          >
            <div>
              <img src={profileimg} width='53px' height='53px' alt='identity' />
            </div>
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>Profile</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                A new type of digital identity owned by you - where genuine
                connections happen, and real-world networking begins online.
              </p>
            </div>
          </Link>

          <a
            href='https://www.getdids.com/'
            className='media d-flex align-items-center'
            target='_blank'
          >
            <div>
              <img src={idimg} width='53px' height='53px' alt='identity' />
            </div>
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>getDIDs.com</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Get your very own unique proof of ownership digital identity
                using Elastos Dencentralized Identity (DID).
              </p>
            </div>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Products;
