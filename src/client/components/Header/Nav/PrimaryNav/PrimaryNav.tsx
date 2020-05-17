import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import SubNav from '../SubNav';

import './PrimaryNav.scss';

interface IPrimaryNavProps {
  className?: string;
}

interface ILink {
  href: string;
  label: string;
  key: string;
}

const links: ILink[] = [
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileClasses = isMobileMenuOpen ? 'MobileNav--open' : '';

  return (
    <nav className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <div className={`${ROOT_CLASSNAME}__mobile-icon`} onClick={() => setIsMobileMenuOpen(true)}>
        <svg id="i-menu" className="bs-icon" viewBox="0 0 32 32"><path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path></svg>
      </div>
      <ul className={`${ROOT_CLASSNAME}__list ${mobileClasses}`}>
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