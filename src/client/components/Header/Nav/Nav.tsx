import React from 'react'
import classNames from 'classnames';
import Link from 'next/link'
import './Nav.scss';
import SubNav from './SubNav';

interface ILink {
  href: string;
  label: string;
  key: string;
}

interface INavProps {
  className?: string;
}

const ROOT_CLASSNAME = 'Nav';

const liStyles = 'flex-0 text-center items-center h-full flex';

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

let sharePage = () => { };

if (process.browser) {
  const navigator: any = window.navigator;

  sharePage = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TravelMo',
        text: 'Check out TravelMo travel blog.',
        url: 'https://travelmo.co',
      })
        .then(() => console.log('shared successfully'))
        .catch(() => console.log('failed to share'));
    }
  }
}

const Nav = (props: INavProps) => {
  const classes = classNames(ROOT_CLASSNAME, props.className);

  return (
    <section className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <nav className={`${ROOT_CLASSNAME}__nav--primary inset-0`}>
        <ul className={`${ROOT_CLASSNAME}__list flex h-full`}>
          <li className={`${ROOT_CLASSNAME}__nav--mobile`}>
            <svg id="i-menu" className="bs-icon" viewBox="0 0 32 32"><path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path></svg>
          </li>
          {links.map(({ key, href, label }, index) => (
            <li className={`${ROOT_CLASSNAME}__list-item ${liStyles}`} key={index}>
              <Link href={href}>
                <a className={`${ROOT_CLASSNAME}__link`} href={href}>{label}</a>
              </Link>
              <SubNav className={`${ROOT_CLASSNAME}__sub-nav`} level={label} />
            </li>
          ))}
        </ul>
      </nav>
      <section className={`${ROOT_CLASSNAME}__logo-container`}>
        <p className={`${ROOT_CLASSNAME}__logo-text`}>
          <span className={`${ROOT_CLASSNAME}__logo-text--1`}>Tra</span>
          <span className={`${ROOT_CLASSNAME}__logo-text--2`}>vel</span>
          <span className={`${ROOT_CLASSNAME}__logo-text--3`}>M</span>
        </p>
        <img className={`${ROOT_CLASSNAME}__logo`} src="/globe_small.png" />
      </section>
      <nav className={`${ROOT_CLASSNAME}__nav--social-media`}>
        <ul className={`${ROOT_CLASSNAME}__list flex h-full`}>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <a href="https://www.instagram.com/morris7/">
              <svg id="logo-instagram" className="bs-icon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
            </a>
          </li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <a href="#">
              <svg id="logo-rss" className="bs-icon" viewBox="0 0 512 512"><path d="M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z"></path><path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z"></path><path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z"></path></svg>
            </a>
          </li>
          <li className={`${ROOT_CLASSNAME}__list-item`}>
            <a href="#" onClick={sharePage}>
              <svg id="share-social-outline" className="bs-icon" viewBox="0 0 512 512"><circle cx="128" cy="256" r="48" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="384" cy="112" r="48" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="384" cy="400" r="48" strokeLinecap="round" strokeLinejoin="round"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"></path></svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Nav
