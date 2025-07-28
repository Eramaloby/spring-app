import { useState } from 'react';
import styles from './Hamburger.module.css';
import Drawer from '../Drawer/Drawer';
import { NAVBAR_CONTENT } from '../../constants/navbarContents';

const Hamburger = () => {
  const [drawerShown, setDrawerShown] = useState(false);
  const hideDrawer = () => {
    setDrawerShown(false);
  };
  return (
    <>
      <div
        className={styles.hamburger}
        onClick={() => {
          setDrawerShown(true);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer isShown={drawerShown} hideDrawer={hideDrawer} linksList={NAVBAR_CONTENT}></Drawer>
    </>
  );
};

export default Hamburger;
