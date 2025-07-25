import DrawerSectionsList from '../DrawerSectionsList/DrawerSectionsList';

import styles from './Drawer.module.css';

import type { NavigationSection } from '../../constants/navbarContents';

interface DrawerProps {
  isShown: boolean;
  hideDrawer: () => void;
  linksList: NavigationSection[];
}

const Drawer = ({ isShown, hideDrawer, linksList }: DrawerProps) => {
  return (
    <div className={`${styles.drawer} ${isShown ? styles.open : ''}`}>
      <CloseIcon hideDrawer={hideDrawer} />
      <DrawerSectionsList sectionsList={linksList} />
    </div>
  );
};

export default Drawer;

interface CloseIconProps {
  hideDrawer: () => void;
}

const CloseIcon = ({ hideDrawer }: CloseIconProps) => {
  return (
    <div className={styles['close-icon-wrapper']} onClick={hideDrawer}>
      <div className={styles['close-icon']}></div>
    </div>
  );
};
