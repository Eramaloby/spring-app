import Hamburger from '../Hamburger/Hamburger';
import NavigationLinksList from '../NavigationLinksList/NavigationLinksList';

import style from './NavigationLinks.module.css';

const NavigationLinks = () => {
  return (
    <nav className={style['nav-links']}>
      <Hamburger></Hamburger>
      <NavigationLinksList></NavigationLinksList>
    </nav>
  );
};

export default NavigationLinks;
