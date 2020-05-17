import React from 'react';
import classNames from 'classnames';

import './SubNav.scss';
import Link from 'next/link';

interface ISubNavProps {
  className?: string;
  level?: string;
  isMobile: boolean;
  isOpen: boolean;
}

const ROOT_CLASSNAME = 'SubNav';

const SubNav: React.FunctionComponent<ISubNavProps> = (
  { className, level, isMobile, isOpen }) => {
  const classes = classNames(
    ROOT_CLASSNAME,
    className,
    {
      [`${ROOT_CLASSNAME}--mobile`]: isMobile,
      [`${ROOT_CLASSNAME}--is-open`]: isOpen
    }
  );

  if (level === 'Destinations') {
    return (
      <section className={classes}>
        <ul className={`${ROOT_CLASSNAME}__list`}>
          <li className={`${ROOT_CLASSNAME}__list-item`}>{'<<<'}</li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <Link href="/location/philippines">
              <a className={`${ROOT_CLASSNAME}__link`} href="#">Philippines</a>
            </Link>
          </li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <Link href="/location/hong-kong">
              <a className={`${ROOT_CLASSNAME}__link`} href="#">Hong Kong</a>
            </Link>
          </li>
          {/* <Link href="/location/peru">
            <li className={`${ROOT_CLASSNAME}__list-item`}>
              <a className={`${ROOT_CLASSNAME}__link`} href="#">peru</a>
            </li>
          </Link> */}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}

export default SubNav;