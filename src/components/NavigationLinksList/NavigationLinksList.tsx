import type { NavigationSection } from '../../constants/navbarContents';
import NavigationLinksItem from '../NavigationLinksItem/NavigationLinksItem';

import style from './NavigationLinksList.module.css';

interface NavigationLinksListProps {
  linksList: NavigationSection[];
}

const NavigationLinksList = ({ linksList }: NavigationLinksListProps) => {
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
