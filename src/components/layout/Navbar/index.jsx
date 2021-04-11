import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import whitelogo from '../../../assets/img/brand-whitelogo.png';
import blacklogo from '../../../assets/img/brand-blacklogo.png';

import Solutions from './Solutions';
import Products from './Products';
import Company from './Company';
import Developers from './Developers';
import Learn from './Learn';

import './style.scss';

const LogoImg = ({ classNames, navColor }) => {
  if (classNames === 'scroll-header') {
    return <img src={whitelogo} alt='logo' />;
  }
  return (
    <img src={navColor === 'transparent' ? whitelogo : blacklogo} alt='logo' />
  );
};

const HeaderNavBar = ({ navColor = 'transparent' }) => {
  const [classNames, setClassNames] = useState('noscroll');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setClassNames('scroll-header');
    } else {
      setClassNames('noscroll');
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
        className={`navbar navbar-${navColor} navbar-main navbar-expand-lg headroom`}
      >
        <Link className='navbar-brand mr-lg-5 lg-hidden' to='/'>
          <LogoImg classNames={classNames} navColor={navColor} />
        </Link>
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
                <Link to='/'>
                  <img src={blacklogo} alt='logo' />
                </Link>
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
          <Link className='navbar-brand mr-lg-5 lg-show' to='/'>
            <LogoImg classNames={classNames} navColor={navColor} />
          </Link>
          <ul className='navbar-nav navbar-nav-hover align-items-lg-center'>
            <Solutions />
            <Products />
            {/* <li className='nav-item dropdown'>
              <a
                href='https://elastos.academy/'
                className='nav-link'
                role='button'
              >
                <i className='ni ni-collection d-lg-none' />
                <span className='nav-link-inner--text'>Developers</span>
              </a>
            </li> */}
            <Developers />
            <Learn />
            <Company />
          </ul>
          {/* <SocialButtons/> */}
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
