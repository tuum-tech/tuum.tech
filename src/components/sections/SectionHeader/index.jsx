import React from 'react';
import classNames from 'classnames';

import './style.scss';

const SectionHeader = ({ className, data, children, tag, ...props }) => {
  const classes = classNames('section-header', className);
  return (
    <>
      {(data.title || data.paragraph) && (
        <div {...props} className={classes}>
          <div className='container-xs'>
            {children}
            {data.title && (
              <h2
                className={classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}
              >
                {data.title}
              </h2>
            )}
            {data.paragraph && <p className='m-0'>{data.paragraph}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
