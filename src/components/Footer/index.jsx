import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter className='bg-dark font-small pt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='3'>
            <h5 className='title'>Our Projects</h5>
            <ul className='pl-0'>
              <li className='list-unstyled'>
                <a href='#!'>Profile</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Contact</h5>
            <ul className='pl-0'>
              <li className='list-unstyled'>
                <a href='#!'>contact@tuum.tech</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Work with us?</h5>
            <ul className='pl-0'>
              <li className='list-unstyled'>
                <a href='#!'>Current opportunities</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Follow US</h5>
            <ul className='pl-0'>
              <li className='list-unstyled'>
                <a href='#!'>Twitter</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Tuum.Tech
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
