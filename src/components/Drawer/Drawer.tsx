import DrawerSectionsList from '../DrawerSectionsList/DrawerSectionsList';

import styles from './Drawer.module.css';

import { useAppSelector } from '../../hooks/useAppHooks';

interface DrawerProps {
  isShown: boolean;
  hideDrawer: () => void;
}

const Drawer = ({ isShown, hideDrawer }: DrawerProps) => {
  const linksList = useAppSelector((state) => state.navbar.navbarContent);
  return (
    <div className={`${styles.drawer} ${isShown ? styles.open : ''}`}>
      <CloseIcon hideDrawer={hideDrawer}></CloseIcon>
      <DrawerSectionsList sectionsList={linksList}></DrawerSectionsList>
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
