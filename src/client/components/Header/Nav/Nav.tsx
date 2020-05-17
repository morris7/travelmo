import React from 'react'
import classNames from 'classnames';
import './Nav.scss';
import Logo from './Logo';
import SocialMediaNav from './SocialMedia';
import PrimaryNav from './PrimaryNav';

interface INavProps {
  className?: string;
}

const ROOT_CLASSNAME = 'Nav';

const Nav: React.FunctionComponent<INavProps> = (props) => {
  const classes = classNames(ROOT_CLASSNAME, props.className);

  return (
    <section className={`${classes} ${ROOT_CLASSNAME}__container`}>
      <PrimaryNav className={`${ROOT_CLASSNAME}__PrimaryNav`} />
      <Logo className={`${ROOT_CLASSNAME}__Logo`} />
      <SocialMediaNav className={`${ROOT_CLASSNAME}__SocialMediaNav`} />
    </section>
  )
}

export default Nav
