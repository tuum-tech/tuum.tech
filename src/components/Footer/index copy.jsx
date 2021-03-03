import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter color='blue' className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md='6'>
            <h5 className='title'>Links</h5>
            <ul>
              <li className='list-unstyled'>
                <a href='#!'>Link 1</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 2</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 3</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.mdbootstrap.com'> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

// import React from 'react';
// import Footer from 'rc-footer';

// import 'rc-footer/assets/index.css';

// const FooterComp = () => {
//   return (
//     <footer className='page-footer font-small blue pt-4'>
//       <div className='container-fluid text-center text-md-left'>
//         <div className='row'>
//           <div className='col-md-6 mt-md-0 mt-3'>
//             <h5 className='text-uppercase'>Footer Content</h5>
//             <p>
//               Here you can use rows and columns to organize your footer content.
//             </p>
//           </div>

//           <hr className='clearfix w-100 d-md-none pb-3' />

//           <div className='col-md-3 mb-md-0 mb-3'>
//             <h5 className='text-uppercase'>Links</h5>

//             <ul className='list-unstyled'>
//               <li>
//                 <a href='#!'>Link 1</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 2</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 3</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 4</a>
//               </li>
//             </ul>
//           </div>

//           <div className='col-md-3 mb-md-0 mb-3'>
//             <h5 className='text-uppercase'>Links</h5>

//             <ul className='list-unstyled'>
//               <li>
//                 <a href='#!'>Link 1</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 2</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 3</a>
//               </li>
//               <li>
//                 <a href='#!'>Link 4</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className='footer-copyright text-center py-3'>
//         © 2018 Copyright:
//         <a href='https://mdbootstrap.com/education/bootstrap/'>
//           {' '}
//           MDBootstrap.com
//         </a>
//       </div>
//     </footer>
//   );
//   // return (
//   //   <Footer
//   //     maxColumnsPerRow={4}
//   //     columns={[
//   //       {
//   //         title: 'Products',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         title: '社区',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         title: '帮助',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         icon: (
//   //           <img
//   //             src='https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg'
//   //             alt='more products'
//   //           />
//   //         ),
//   //         title: '更多产品',
//   //         items: [
//   //           {
//   //             icon: (
//   //               <img
//   //                 src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
//   //                 alt='yuque'
//   //               />
//   //             ),
//   //             title: '语雀',
//   //             url: 'https://yuque.com',
//   //             description: '知识创作与分享工具',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             icon: (
//   //               <img
//   //                 src='https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png'
//   //                 alt='yuque'
//   //               />
//   //             ),
//   //             title: '云凤蝶',
//   //             url: 'https://yunfengdie.com',
//   //             description: '中台建站平台',
//   //             openExternal: true,
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         title: '相关资源',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         title: '社区',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         title: '帮助',
//   //         items: [
//   //           {
//   //             title: 'Ant Design Pro',
//   //             url: 'https://pro.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Ant Design Mobile',
//   //             url: 'https://mobile.ant.design/',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             title: 'Kitchen',
//   //             url: 'https://kitchen.alipay.com/',
//   //             description: 'Sketch 工具集',
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         icon: (
//   //           <img
//   //             src='https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg'
//   //             alt='more products'
//   //           />
//   //         ),
//   //         title: '更多产品',
//   //         items: [
//   //           {
//   //             icon: (
//   //               <img
//   //                 src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg'
//   //                 alt='yuque'
//   //               />
//   //             ),
//   //             title: '语雀',
//   //             url: 'https://yuque.com',
//   //             description: '知识创作与分享工具',
//   //             openExternal: true,
//   //           },
//   //           {
//   //             icon: (
//   //               <img
//   //                 src='https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png'
//   //                 alt='yuque'
//   //               />
//   //             ),
//   //             title: '云凤蝶',
//   //             url: 'https://yunfengdie.com',
//   //             description: '中台建站平台',
//   //             openExternal: true,
//   //           },
//   //         ],
//   //       },
//   //     ]}
//   //     bottom='Made With Tuum.Tech'
//   //   />
//   // );
// };

// export default FooterComp;
