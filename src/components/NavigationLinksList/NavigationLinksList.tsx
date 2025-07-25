import NavigationLinksItem from '../NavigationLinksItem/NavigationLinksItem';

import style from './NavigationLinksList.module.css';

import type { NavigationSection } from '../../constants/navbarContents';

interface NavigationLinksListProps {
  linksList: NavigationSection[];
}

const NavigationLinksList = ({ linksList }: NavigationLinksListProps) => {
  return (
    <ul className={style['nav-links__list']}>
      {linksList.map((linksItem) => (
        <NavigationLinksItem linksItem={linksItem} key={linksItem.label} />
      ))}
    </ul>
  );
};

export default NavigationLinksList;
