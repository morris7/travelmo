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
  { href: '#', label: 'Destinations', key: '' }, // TODO reset this to correct url
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
  const [subNavOpenIndex, setSubNavOpenIndex] = useState(-1);

  const mobileClasses = isMobileMenuOpen ? 'MobileNav--open' : '';

  const closedSvg = <svg id="i-close" className="bs-icon" viewBox="0 0 32 32"><path d="M2 30 L30 2 M30 30 L2 2"></path> </svg>;
  const menuSvg = <svg id="i-menu" className="bs-icon" viewBox="0 0 32 32"><path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path></svg>;

  return (
    <nav className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <div className={`${ROOT_CLASSNAME}__mobile-icon`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? closedSvg : menuSvg}
      </div>
      <ul className={`${ROOT_CLASSNAME}__list ${mobileClasses}`}>
        {links.map(({ href, label }, index) => (
          <li className={`${ROOT_CLASSNAME}__list-item`} key={index} onClick={() => setSubNavOpenIndex(index)}>
            <Link href={href}>
              <a className={`${ROOT_CLASSNAME}__link`} href={href}>{label}</a>
            </Link>
            <SubNav
              className={`${ROOT_CLASSNAME}__sub-nav`}
              level={label}
              isMobile={isMobileMenuOpen}
              isOpen={subNavOpenIndex === index}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PrimaryNav;