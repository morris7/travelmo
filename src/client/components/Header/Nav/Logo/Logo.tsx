import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import './Logo.scss';

interface ILogoProps {
  className?: string;
}

const ROOT_CLASSNAME = 'Logo';

const Logo: React.FunctionComponent<ILogoProps> = ({ className }) => {
  const classes = classNames(ROOT_CLASSNAME, className);

  return (
    <section className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <Link href="/">
        <a className={`${ROOT_CLASSNAME}__link`}>
          <p className={`${ROOT_CLASSNAME}__text`}>
            <span className={`${ROOT_CLASSNAME}__text--1`}>Tra</span>
            <span className={`${ROOT_CLASSNAME}__text--2`}>vel</span>
            <span className={`${ROOT_CLASSNAME}__text--3`}>M</span>
          </p>

          <img className={`${ROOT_CLASSNAME}__image`} src="/globe_small.png" />
        </a>
      </Link>
    </section>
  );
}

export default Logo;