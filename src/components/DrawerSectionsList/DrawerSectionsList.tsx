import { useState } from 'react';

import type { NavigationSection, NavigationItem } from '../../constants/navbarContents';

import DropdownToggle from '../DropdownToggle/DropdownToggle';
import DropdownItem from '../DropdownItem/DropdownItem';

import styles from './DrawerSectionsList.module.css';

interface DrawerSectionProps {
  sectionsList: NavigationSection[];
}

const DrawerSectionsList = ({ sectionsList }: DrawerSectionProps) => {
  const [selected, setSelected] = useState('');
  const handleToggle = (label: string) => {
    if (selected === label) {
      setSelected('');
    } else {
      setSelected(label);
    }
  };
  return (
    <ul className={styles['drawer-section']}>
      {sectionsList.map((sectionItem) => (
        <DrawerSectionItem
          sectionItem={sectionItem}
          selected={selected}
          handleToggle={handleToggle}
          key={sectionItem.label}
        ></DrawerSectionItem>
      ))}
    </ul>
  );
};

export default DrawerSectionsList;

interface DrawerSectionItemProps {
  sectionItem: NavigationSection;
  selected: string;
  handleToggle: (label: string) => void;
}

const DrawerSectionItem = ({ sectionItem, selected, handleToggle }: DrawerSectionItemProps) => {
  const hasDropdown = sectionItem.data.length !== 0;
  const isSelected = selected === sectionItem.label;

  return (
    <li
      className={`${styles['drawer-section__item']} ${
        hasDropdown ? styles['has-dropdown'] : ''
      } ${isSelected ? styles.show : ''}`}
      onClick={() => handleToggle(sectionItem.label)}
    >
      {hasDropdown ? (
        <>
          <DropdownToggle
            label={sectionItem.label}
            className='section-item-span'
            arrowClassName='in-drawer'
          ></DropdownToggle>
          <DrawerDropdownMenu data={sectionItem.data}></DrawerDropdownMenu>
        </>
      ) : (
        <span className={styles['section-item-span']}>{sectionItem.label}</span>
      )}
    </li>
  );
};

interface DrawerDropdownMenuProps {
  data: NavigationItem[];
}

const DrawerDropdownMenu = ({ data }: DrawerDropdownMenuProps) => {
  return (
    <ul className={styles['dropdown-menu']}>
      {data.map((item) => (
        <DropdownItem item={item} key={item.label}></DropdownItem>
      ))}
    </ul>
  );
};
