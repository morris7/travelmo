import React from 'react';

import './Hero.scss';
import Carousel from '../Carousel';

const Hero: React.FunctionComponent = () => (
  <section className="Hero relative flex">

    <Carousel className="Hero" >
      <img src="/heroImageTriptic.png" />
      <img src="/test.jpg" />
      <img src="/test2.jpg" />
    </Carousel>

    <div className="Hero__container inset-0">
      <div className="Hero__tagline">Set yourself free!</div>
      <div className="Hero__centre-square ">
        TravelMo
      </div>
    </div>
  </section>
)

export default Hero;