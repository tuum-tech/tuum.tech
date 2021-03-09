import React from 'react';
import classNames from 'classnames';

import SectionHeader from '../SectionHeader';
import SplitImgItem from '../SplitImgItem';

import elastosImg from '../../../assets/img/features/elastosinfo.jpg';
import vouchImg from '../../../assets/img/features/vouch.jpg';

import './style.scss';

const Features = ({
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
            <SplitImgItem
              imgSrc={vouchImg}
              intro='FEATURED TOOL'
              title='Introduction to DID'
              description='Information here about getDIDs.com'
            />
            <SplitImgItem
              imgSrc={elastosImg}
              intro='FEATURED PRODUCT'
              title='Be your own entity online'
              description='Information here about Profile'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
