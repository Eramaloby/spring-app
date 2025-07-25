import Hamburger from '../Hamburger/Hamburger';
import NavigationLinksList from '../NavigationLinksList/NavigationLinksList';

import style from './NavigationLinks.module.css';

import { NAVBAR_CONTENT } from '../../constants/navbarContents';

const NavigationLinks = () => {
  return (
    <nav className={style['nav-links']}>
      <Hamburger />
      <NavigationLinksList linksList={NAVBAR_CONTENT} />
    </nav>
  );
};

export default NavigationLinks;
