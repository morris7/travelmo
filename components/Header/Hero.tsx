import React from 'react';
import Head from 'next/head';

import './Hero.scss';
import Carousel from '../Carousel';

const Hero = () => (
  <section className="Hero relative flex">

    <Carousel className="Hero" >
      <img src="/test.jpg" />  
      <img src="/test2.jpg" />
    </Carousel>
    
    <div className="Hero__container inset-0">
      <div className="Hero__tagline">Set yourself free!</div>
      <div className="Hero__centre-square border-4 border-white btn-4 ">
        Travel Mo
      </div>
    </div>
  </section>
)

export default Hero;