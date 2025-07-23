import NavigationLinksItem from '../NavigationLinksItem/NavigationLinksItem';

import style from './NavigationLinksList.module.css';

import { useAppSelector } from '../../hooks/useAppHooks';

const NavigationLinksList = () => {
  const linksList = useAppSelector((state) => state.navbar.navbarContent);
  return (
    <ul className={style['nav-links__list']}>
      {linksList.map((linksItem) => (
        <NavigationLinksItem
          linksItem={linksItem}
          key={linksItem.label}
        ></NavigationLinksItem>
      ))}
    </ul>
  );
};

export default NavigationLinksList;
