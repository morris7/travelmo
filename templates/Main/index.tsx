import React from 'react';
import classNames from 'classnames';
import Tracking from '../../src/client/components/Tracking';
import Header from '../../src/client/components/Header/Header';
import Footer from '../../src/client/components/Footer';

interface IMainLayoutProps {
  className?: string;
}

const ROOT_CLASSNAME = 'MainLayout';

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({ children }) => (
  <Tracking>
    <main className={`${ROOT_CLASSNAME}__container`}>
      <Header />
      {children}
      <Footer />
    </main>
  </Tracking>
);

export default MainLayout;