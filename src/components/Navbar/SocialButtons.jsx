import React from 'react';

const SocialButtons = () => {
  return (
    <ul className='navbar-nav align-items-lg-center'>
      <li className='nav-item'>
        <a
          className='nav-link nav-link-icon'
          href='https://www.facebook.com/creativetim'
          data-toggle='tooltip'
          title='Like us on Facebook'
        >
          <i className='fa fa-facebook-square' />
          <span className='nav-link-inner--text d-lg-none'>Facebook</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link nav-link-icon'
          href='https://www.instagram.com/creativetimofficial'
          data-toggle='tooltip'
          title='Follow us on Instagram'
        >
          <i className='fa fa-instagram' />
          <span className='nav-link-inner--text d-lg-none'>Instagram</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link nav-link-icon'
          href='https://twitter.com/creativetim'
          data-toggle='tooltip'
          title='Follow us on Twitter'
        >
          <i className='fa fa-twitter-square' />
          <span className='nav-link-inner--text d-lg-none'>Twitter</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link nav-link-icon'
          href='https://github.com/creativetimofficial/argon-design-system-react'
          data-toggle='tooltip'
          title='Star us on Github'
        >
          <i className='fa fa-github' />
          <span className='nav-link-inner--text d-lg-none'>Github</span>
        </a>
      </li>
      <li className='nav-item d-none d-lg-block ml-lg-4'>
        <a
          href='https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-static-docs'
          className='btn btn-neutral btn-icon'
        >
          <span className='btn-inner--icon'>
            <i className='fa fa-cloud-download mr-2' />
          </span>
          <span className='nav-link-inner--text'>Download</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialButtons;
