import React from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';
import Hero from './Hero';
import Nav from './Nav';
import { replaceUrlGlobal } from '../../shared/utils/url';

interface IHeaderProps {
  showHero?: boolean;
  seo?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ showHero = true, seo }) => (
  <header className="Header">
    <Head>
      {/* <title>Home</title> */}
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
      {seo && parse(replaceUrlGlobal(seo))}
    </Head>
    <Nav />
    {
      showHero && (
        <Hero />
      )
    }
  </header>
)

export default Header;