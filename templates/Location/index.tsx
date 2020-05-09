import React from 'react';
import Tracking from '../../src/client/components/Tracking';
import Header from '../../src/client/components/Header/Header';
import Footer from '../../src/client/components/Footer';
import './Location.scss';

interface ILocationLayoutProps {
  className?: string;
}

const ROOT_CLASSNAME = 'LocationLayout';

const LocationLayout: React.FunctionComponent<ILocationLayoutProps> = ({ children }) => (
  <Tracking>
    <main className={`${ROOT_CLASSNAME}__layout-container`}>
      <Header showHero={false} />
      {children}
      <Footer />
    </main>
  </Tracking>
);

export default LocationLayout;