import React from 'react';
import classNames from 'classnames';

import SectionHeader from '../SectionHeader';
import SplitItem from '../SplitItem';
import defaultImg from '../../../assets/img/features/default.png';
import elastosImg from '../../../assets/img/features/elastosinfo.jpg';
import vouchImg from '../../../assets/img/features/vouch.jpg';

import './style.scss';

const FeaturesSplit = ({
  className,
  invertColor,
  invertMobile,
  invertDesktop,
  ...props
}) => {
  const outerClasses = classNames('features-split section', className);
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className='features-split-inner section-inner'>
          <SectionHeader
            className='center-content mb-5'
            data={{
              title:
                'We Grasp the imagination required to build an Internet that is safe and genuine for everyone. ',
              paragraph:
                'Tuum Technologies is the world’s leading provider of Elastos powered solutions, using software development and a user centric vision to advance projects building a decentralized Internet.',
            }}
          />
          <div className={splitClasses}>
            <SplitItem
              imgSrc={defaultImg}
              intro='Web Development / Branding & Identity'
              title='Profile'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
              — Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.'
            />
            <SplitItem
              imgSrc={elastosImg}
              intro='Web / Branding & Identity / Educational'
              title='Data-driven insights'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
              — Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.'
            />
            <SplitItem
              imgSrc={vouchImg}
              intro='Mobile Development / UI & UX'
              title='Vouch'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
              — Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSplit;
