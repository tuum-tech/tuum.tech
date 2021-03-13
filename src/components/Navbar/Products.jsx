import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <li className='nav-item dropdown'>
      <Link href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-ui-04 d-lg-none' />
        <span className='nav-link-inner--text'>Products</span>
      </Link>
      <div className='dropdown-menu dropdown-menu-xl'>
        <div className='dropdown-menu-inner'>
          <a
            href='https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-static-docs'
            className='media d-flex align-items-center'
          >
            <div className='icon icon-shape bg-gradient-primary rounded-circle text-white'>
              <i className='ni ni-spaceship' />
            </div>
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>Profile</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Learn how to use Argon compiling Scss, change brand colors and
                more.
              </p>
            </div>
          </a>
          <a
            href='https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-static-docs'
            className='media d-flex align-items-center'
          >
            <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
              <i className='ni ni-palette' />
            </div>
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>Foundation</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Learn more about colors, typography, icons and the grid system
                we used for Argon.
              </p>
            </div>
          </a>
          <a
            href='https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-static-docs'
            className='media d-flex align-items-center'
          >
            <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
              <i className='ni ni-ui-04' />
            </div>
            <div className='media-body ml-3'>
              <h6 className='heading text-warning mb-md-1'>Components</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Browse our 50 beautiful handcrafted components offered in the
                Free version.
              </p>
            </div>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Products;
