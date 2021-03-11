import React, { useState, useEffect } from 'react';

import logo from '../../assets/img/brand/logo.png';

import Solutions from './Solutions';
import Products from './Products';
import Company from './Company';

import './style.scss';

const HeaderNavBar = () => {
  const [classNames, setClassNames] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setClassNames('scroll-header');
    } else {
      setClassNames('');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={classNames}>
      <nav
        id='navbar-main'
        className='navbar navbar-dark navbar-main navbar-transparent navbar-expand-lg headroom'
      >
        <a className='navbar-brand mr-lg-5 lg-hidden' href='/'>
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
          <a className='navbar-brand mr-lg-5 lg-show' href='/'>
            <img src={logo} alt='logo' />
          </a>
          <ul className='navbar-nav navbar-nav-hover align-items-lg-center'>
            <Solutions />
            <Products />
            <li className='nav-item dropdown'>
              <a
                href='https://elastos.academy/'
                className='nav-link'
                role='button'
              >
                <i className='ni ni-collection d-lg-none' />
                <span className='nav-link-inner--text'>Developers</span>
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                href='https://elastos.academy/'
                className='nav-link'
                role='button'
              >
                <i className='ni ni-collection d-lg-none' />
                <span className='nav-link-inner--text'>Learn</span>
              </a>
            </li>
            <Company />
          </ul>
          {/* <SocialButtons/> */}
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
