import type { NavigationItem } from '../../constants/navbarContents';

import styles from './DropdownItem.module.css';

interface DropdownItemProps {
  item: NavigationItem;
}

const DropdownItem = ({ item }: DropdownItemProps) => {
  return (
    <li className={item.isLast ? styles['last-item'] : ''}>
      {item.isHeader ? (
        <span className={styles['subsection-header']}>{item.label}</span>
      ) : (
        <a href='#'>{item.label}</a>
      )}
    </li>
  );
};

export default DropdownItem;
