import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from '../../../assets/img/nav/Profile.png';
import idimg from '../../../assets/img/nav/ID.png';

const Products = () => {
  const productsMenu = [
    {
      link: '/products/profile',
      imgSrc: profileimg,
      title: 'Profile',
      description:
        'A new type of digital identity owned by you - where genuine connections happen, and real-world networking begins online.',
    },
    {
      link: 'https://www.getdids.com/',
      imgSrc: idimg,
      title: 'getdids.com',
      description:
        'Get your very own unique proof of ownership digital identity using Elastos Dencentralized Identity (DID).',
    },
  ];
  return (
    <li className='nav-item dropdown'>
      <Link to='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-ui-04 d-lg-none' />
        <span className='nav-link-inner--text'>Products</span>
      </Link>
      <div className='dropdown-menu dropdown-menu-xl'>
        <div className='dropdown-menu-inner'>
          {productsMenu &&
            productsMenu.length > 0 &&
            productsMenu.map((product) => (
              <Link
                to={product.link}
                className='media d-flex align-items-center'
              >
                <div>
                  <img
                    src={product.imgSrc}
                    width='53px'
                    height='53px'
                    alt='identity'
                  />
                </div>
                <div className='media-body ml-3'>
                  <h6 className='heading text-primary mb-md-1'>
                    {product.title}
                  </h6>
                  <p className='description d-none d-md-inline-block mb-0'>
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </li>
  );
};

export default Products;
