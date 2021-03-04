import React from 'react';

const Learn = () => {
  return (
    <li className='nav-item dropdown'>
      <a href='/' className='nav-link' data-toggle='dropdown' role='button'>
        <i className='ni ni-ui-04 d-lg-none' />
        <span className='nav-link-inner--text'>Learn</span>
      </a>
      <div className='dropdown-menu dropdown-menu-xl'>
        <div className='dropdown-menu-inner'>
          <a
            href='https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-static-docs'
            className='media d-flex align-items-center'
          >
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>Knowledge Base</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Blockchain explainers, infographics, and tutorials
              </p>
            </div>
          </a>
          <a
            href='https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-static-docs'
            className='media d-flex align-items-center'
          >
            <div className='media-body ml-3'>
              <h6 className='heading text-primary mb-md-1'>Academy</h6>
              <p className='description d-none d-md-inline-block mb-0'>
                Learn more about here.
              </p>
            </div>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Learn;
