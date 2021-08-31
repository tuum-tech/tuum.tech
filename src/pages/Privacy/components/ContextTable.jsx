import React from 'react';
import styled from 'styled-components';

const Context = styled.div`
  background-color: lightGray;
  text-align: center;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Explain = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const contextData = [
  {
    context: 'Account Registration',
    data: 'We may collect your name and contact information when you create an account.',
  },
  {
    context: 'Demographic Information',
    data: 'We may collect personal information from you, such as your age or location.',
  },
  {
    context: 'Experience, Skill Sets and Languages',
    data: 'You may provide and have us collect personal information regarding your experience and employment for certain subject matter knowledge, skill sets and spoken languages for Elastos and any other blockchain frameworks.',
  },
  {
    context: 'Email Interconnectivity',
    data: 'If you receive email from us, we may use certain tools to capture data related to when you open our message or click on any links or banners it contains.',
  },
  {
    context: 'Feedback/Support',
    data: 'If you provide us feedback or contact us for support we will collect your name and e-mail address and possibly other personal information, as well as any other content that you send to us in order to reply.',
  },
  {
    context: 'Mailing List',
    data: 'When you sign up for one of our mailing lists we may collect your email address.',
  },
  {
    context: 'Online Forms and Submissions',
    data: 'We collect information you submit to us on our website or through online forms to process your requests.',
  },
  {
    context: 'Surveys',
    data: 'When you participate in a survey we may collect additional information that you provide through the survey. If the survey is provided by a third party service provider, the third party’s privacy policy applies to the collection, use, and disclosure of your information. Unless expressly indicated on the face of the survey we do not use survey information to market products or services to survey participants. If you are provided a separate privacy policy on part of a survey or study, the terms of that policy shall govern your information.',
  },
  {
    context: 'Third Party Tracking',
    data: 'Our website may participate in behavior-based advertising. This means that a third party may be allowed to use technology (e.g., a cookie) to collect information about your use of our website so that they can provide advertising about products and services tailored to your interests. If occurring, that advertising may appear either on our website, or on other websites. You can opt-out of receiving advertising based upon your browsing behavior from some network advertising companies by going to the Network Advertising Initiative and the Digital Advertising Alliance websites, although to completely prevent advertising based upon your browsing behavior you should also disable the cookies on your browser.',
  },
  {
    context: 'Web logs',
    data: 'We may collect information from you, including your browser type, operating system, Internet Protocol (IP) address (a number that is automatically assigned to your computer when you use the Internet), domain name, click-activity, referring website, and/or a date/time stamp for your visit. Web logs may be used for things like monitoring website usage levels and diagnosing problems.',
  },
  {
    context: 'Device Information',
    data: 'We may collect information about the device accessing the website such as MAC address, device type, and device identifiers.',
  },
  {
    context: 'Cookies',
    data: 'We may use cookies and clear GIFs. “Cookies” are small pieces of information that a website sends to your device while you are viewing a website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them). Among other things, cookies allow us to provide you with a more personal and interactive experience and to improve our marketing efforts. Persistent cookies may be removed by following instructions provided by your browser. If you choose to disable cookies some areas or features of our websites may not work properly.',
  },
  {
    context: 'Blockchain and Verifiable Credentials',
    data: 'When authenticating a social account used as login we collect the shared username and allow the user to choose to pair to a decentralized identity and publish to the blockchain. We do not use this for any purpose other than storing on a database for the user with an option to delete the data at a later date. Any data published to the blockchain by the user is permanently, and publicly, available and we can delete this data from your account but not remove from a public blockchain.',
  },
];

const ContextTable = () => {
  return (
    <>
      <div className='row mt-5 mb-5'>
        <Context className='col-lg-3'>Context</Context>
        <Explain className='col-lg-9'>
          Types of Data and Purpose for Collection
        </Explain>
      </div>
      {contextData.map((cd) => (
        <div className='row mt-5 mb-5'>
          <div className='col-lg-3'>{cd.context}</div>
          <div className='col-lg-9'>{cd.data}</div>
        </div>
      ))}
    </>
  );
};

export default ContextTable;
