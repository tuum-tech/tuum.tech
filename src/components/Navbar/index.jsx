import React from 'react';

import logo from '../../assets/img/brand/argon-react-white.png';
import './style.scss';

import Solutions from './Solutions';
import Products from './Products';

const HeaderNavBar = () => {
  //   const [collapseClasses, setCollapseClasses] = useState('')

  return (
    <header className='header-global'>
      <nav
        id='navbar-main'
        className='navbar navbar-dark navbar-main navbar-expand-lg navbar-transparent navbar-light headroom'
      >
        <a className='navbar-brand mr-lg-5 lg-hidden' href='../index.html'>
          <img src={logo} alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbar_global'
          aria-controls='navbar_global'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='navbar-collapse collapse'
          id='navbar_global'
          style={{ justifyContent: 'space-between' }}
        >
          <div className='navbar-collapse-header'>
            <div className='row'>
              <div className='col-6 collapse-brand'>
                <a href='../index.html'>
                  <img src={logo} alt='logo' />
                </a>
              </div>
              <div className='col-6 collapse-close'>
                <button
                  type='button'
                  className='navbar-toggler'
                  data-toggle='collapse'
                  data-target='#navbar_global'
                  aria-controls='navbar_global'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          <a className='navbar-brand mr-lg-5' href='../index.html'>
            <img src={logo} alt='logo' />
          </a>
          <ul className='navbar-nav navbar-nav-hover align-items-lg-center'>
            <Solutions />
            <Products />
          </ul>
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
                <span className='nav-link-inner--text d-lg-none'>
                  Instagram
                </span>
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
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
