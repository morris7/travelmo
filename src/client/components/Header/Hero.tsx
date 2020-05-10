import React from 'react';

import './Hero.scss';
import Carousel, { ECarouelAnimation } from '../Carousel';

const Hero: React.FunctionComponent = () => (
  <section className="Hero relative flex">

    <Carousel className="Hero" animate={ECarouelAnimation.ZoomOut} >
      <img src="/test.jpg" />
      <img src="/test2.jpg" />
      <img src="/heroImageTriptic.png" />
      <img src="/hero4.jpg" />
      <img src="/hero5.jpg" />
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