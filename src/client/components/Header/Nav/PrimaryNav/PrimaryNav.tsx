import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import SubNav from '../SubNav';

import './PrimaryNav.scss';

interface IPrimaryNavProps {
  className?: string;
}

const links = [
  { href: '/', label: 'Home', key: '' },
  { href: '/destinations', label: 'Destinations', key: '' },
  { href: '/gallery', label: 'Gallery', key: '' },
  { href: '/travel-tips', label: 'Travel Tips', key: '' },
  { href: '/about', label: 'About', key: '' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const ROOT_CLASSNAME = 'PrimaryNav';

const PrimaryNav: React.FunctionComponent<IPrimaryNavProps> = ({ className }) => {
  const classes = classNames(ROOT_CLASSNAME, className);

  return (
    <nav className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <ul className={`${ROOT_CLASSNAME}__list flex h-full`}>
        <li className={`${ROOT_CLASSNAME}__mobile-icon`}>
          <svg id="i-menu" className="bs-icon" viewBox="0 0 32 32"><path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path></svg>
        </li>
        {links.map(({ href, label }, index) => (
          <li className={`${ROOT_CLASSNAME}__list-item`} key={index}>
            <Link href={href}>
              <a className={`${ROOT_CLASSNAME}__link`} href={href}>{label}</a>
            </Link>
            <SubNav className={`${ROOT_CLASSNAME}__sub-nav`} level={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PrimaryNav;