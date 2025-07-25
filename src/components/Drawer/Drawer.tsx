import {
  NAVBAR_CONTENT,
  type NavigationSection,
} from '../../constants/navbarContents';

import DrawerSectionsList from '../DrawerSectionsList/DrawerSectionsList';

import styles from './Drawer.module.css';

interface DrawerProps {
  isShown: boolean;
  hideDrawer: () => void;
  linksList: NavigationSection[];
}

const Drawer = ({ isShown, hideDrawer }: DrawerProps) => {
  return (
    <div className={`${styles.drawer} ${isShown ? styles.open : ''}`}>
      <CloseIcon hideDrawer={hideDrawer}></CloseIcon>
      <DrawerSectionsList sectionsList={NAVBAR_CONTENT}></DrawerSectionsList>
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
