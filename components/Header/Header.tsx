import React from 'react';
import Head from 'next/head';
import Hero from './Hero';
import Nav from './Nav';

const Header = () => (
    <section className="Header">
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico' />
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        </Head>
        <Nav />
        <Hero />
    </section>
)

export default Header;