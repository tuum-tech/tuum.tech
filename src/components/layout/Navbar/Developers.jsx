import React from "react";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <li className='nav-item dropdown'>
      <Link to='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-collection d-lg-none' />
        <span className='nav-link-inner--text'>Developers</span>
      </Link>
      <div className='dropdown-menu'>
        <Link to='/' className='dropdown-item'>
          Tuum Developer Portal
        </Link>
        <Link to='https://developer.elastos.org/' className='dropdown-item'>
          Elastos Developer Portal
        </Link>
        <Link to='https://github.com/tuum-tech' className='dropdown-item'>
          Tuum GitHub
        </Link>
        <Link to='https://github.com/elastos' className='dropdown-item'>
          Elastos GitHub
        </Link>
      </div>
    </li>
  );
};

export default Developers;
