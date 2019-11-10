import React from 'react';
import Head from 'next/head';

import './Hero.scss';

const Hero = () => (
  <section className="Hero relative flex">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
    </Head>
  </section>
)

export default Hero;