import React from 'react'
import classNames from 'classnames';
import Link from 'next/link'
import './Nav.scss';

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
})

const Nav = (props: INavProps) => {
  const classes = classNames(ROOT_CLASSNAME, props.className);

  return (
    <section className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <nav className={`${ROOT_CLASSNAME}__nav--primary inset-0`}>
        <ul className={`${ROOT_CLASSNAME}__list flex h-full`}>
          {links.map(({ key, href, label }, index) => (
            <li className={`${ROOT_CLASSNAME}__list-item ${liStyles}`} key={index}>
              <Link href={href}>
                <a className={`${ROOT_CLASSNAME}__link`} href={href}>{label}</a>
              </Link>
              <ul className={`${ROOT_CLASSNAME}__sub-nav`}>
                <li><a href="#">argentina</a></li>
                <li><a href="#">colombia</a></li>
                <li><a href="#">peru</a></li>
              </ul>
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
            <a href="#">
              <svg id="logo-facebook" className="bs-icon" viewBox="0 0 512 512"><path d="M455.27 32H56.73A24.74 24.74 0 0032 56.73v398.54A24.74 24.74 0 0056.73 480H256V304h-53.55v-64H256v-51c0-57.86 40.13-89.36 91.82-89.36 24.73 0 51.33 1.86 57.51 2.68v60.43h-41.18c-28.12 0-33.48 13.3-33.48 32.9V240h67l-8.75 64h-58.25v176h124.6A24.74 24.74 0 00480 455.27V56.73A24.74 24.74 0 00455.27 32z"></path></svg>
            </a>
          </li>
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
        </ul>
      </nav>
    </section>
  )
}

export default Nav
