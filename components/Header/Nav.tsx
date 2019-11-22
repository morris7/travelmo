import React from 'react'
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

const liStyles = 'flex-1 text-center items-center h-full flex';

const links: ILink[] = [
  { href: 'https://travelmo.co', label: 'travelmo', key: '' },
  { href: 'https://web-mo.co', label: 'WebMo', key: '' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = (props: INavProps) => (
  <nav className={`Nav ${props.className} inset-0 bg-white`}>
    <ul className="flex flex-row h-full">
      <li className={liStyles}>
        <Link href='/'>
          <h2 className="flex-1">
            <a href="/" >Home</a>
          </h2>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className={liStyles}>
          <h2 className="flex-1">
            <a  href={href}>{label}</a>
          </h2>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
