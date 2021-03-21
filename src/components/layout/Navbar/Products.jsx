import React from 'react';
import { Link } from 'react-router-dom';

import solutionimg from '../../../assets/img/identity.png';

const Products = () => {
  const productsMenu = [
    {
      link: '/products/profile',
      imgSrc: solutionimg,
      title: 'Profile',
      description:
        'We provide an online digital identity hub managed by the users, and for the users, where profiles',
    },
    {
      link: '',
      imgSrc: solutionimg,
      title: 'Vouch',
      description:
        'We provide an online digital identity hub managed by the users, and for the users, where profiles ',
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
              <a
                href={product.link}
                className='media d-flex align-items-center'
              >
                <div className='icon icon-shape bg-gradient-primary rounded-circle text-white'>
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
              </a>
            ))}
        </div>
      </div>
    </li>
  );
};

export default Products;
