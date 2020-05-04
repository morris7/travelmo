import React from 'react';

import './Footer.scss';

const ROOT_CLASSNAME = 'Footer';

const Footer: React.FunctionComponent = () => {
  const classes = '';

  return (
    <footer className={`${ROOT_CLASSNAME}`}>
      <ul className={`${ROOT_CLASSNAME}__list`}>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <a href="/contact">contact</a>
        </li>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <a href="/contact">phone</a>
        </li>
        <li className={`${ROOT_CLASSNAME}__list-item`}>
          <a href="/contact">something</a>
        </li>
      </ul >
    </footer >
  );
}

export default Footer;