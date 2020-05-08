import React from 'react';

import './Footer.scss';

const ROOT_CLASSNAME = 'Footer';

const fullYear = new Date().getFullYear();

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={`${ROOT_CLASSNAME}`}>
      <ul className={`${ROOT_CLASSNAME}__list`}>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <p className={`${ROOT_CLASSNAME}__list-item--text`}>copyright © {fullYear}</p>
        </li>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <a href="/privacy">privacy policy</a>
        </li>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <a href="/contact">contact</a>
        </li>
      </ul >
    </footer >
  );
}

export default Footer;