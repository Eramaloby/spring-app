import React from 'react';
import type { NavigationSection } from '../../constants/navbarContents';
import type { NavigationItem } from '../../constants/navbarContents';

import style from './NavigationLinksItem.module.css';

import DropdownToggle from '../DropdownToggle/DropdownToggle';
import DropdownItem from '../DropdownItem/DropdownItem';

interface NavigationLinksItemProps {
  linksItem: NavigationSection;
}

const NavigationLinksItem = ({ linksItem }: NavigationLinksItemProps) => {
  return linksItem.data.length !== 0 ? (
    <li className={`${style['nav-links__item']} ${style['has-dropdown']}`}>
      <DropdownToggle label={linksItem.label}></DropdownToggle>

      <DropdownMenu data={linksItem.data}></DropdownMenu>
    </li>
  ) : (
    <li>
      <span>{linksItem.label}</span>
    </li>
  );
};

interface DropdownMenuProps {
  data: NavigationItem[];
}

const DropdownMenu = ({ data }: DropdownMenuProps) => {
  return (
    <ul className={style['dropdown-menu']}>
      {data.map((item) => (
        <DropdownItem item={item} key={item.label}></DropdownItem>
      ))}
    </ul>
  );
};

export default NavigationLinksItem;
