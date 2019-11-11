import React from 'react';
import Head from 'next/head';

import './Hero.scss';

const Hero = () => (
  <section className="Hero relative flex">
    <img src="/heroImage.jpg" />
    <div className="Hero__centre-square border-4 border-white btn-4 ">
      Travel Mo
    </div>
  </section>
)

export default Hero;