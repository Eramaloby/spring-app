import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { NAVBAR_CONTENT } from '../../constants/navbarContents';
import NavigationLinksList from '../NavigationLinksList/NavigationLinksList';

import style from './NavigationLinks.module.css';

const NavigationLinks = () => {
  return (
    <nav className={style['nav-links']}>
      <Hamburger></Hamburger>
      <NavigationLinksList linksList={NAVBAR_CONTENT}></NavigationLinksList>
    </nav>
  );
};

export default NavigationLinks;
