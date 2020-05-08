import React from 'react';
import classNames from 'classnames';

import './SubNav.scss';
import Link from 'next/link';

interface ISubNavProps {
  className?: string;
  level?: string;
}

const ROOT_CLASSNAME = 'SubNav';

const SubNav: React.FunctionComponent<ISubNavProps> = ({ className, level }) => {
  const classes = classNames(ROOT_CLASSNAME, className);

  if (level === 'Destinations') {
    return (
      <section className={classes}>
        <ul className={`${ROOT_CLASSNAME}__list`}>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <Link href="/location/argentina">
              <a className={`${ROOT_CLASSNAME}__link`} href="#">argentina</a>
            </Link>
          </li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <Link href="/location/colombia">
              <a className={`${ROOT_CLASSNAME}__link`} href="#">colombia</a>
            </Link>
          </li>
          <Link href="/location/peru">
            <li className={`${ROOT_CLASSNAME}__list-item`}>
              <a className={`${ROOT_CLASSNAME}__link`} href="#">peru</a>
            </li>
          </Link>
        </ul>
      </section>
    );
  } else {
    return null;
  }
}

export default SubNav;