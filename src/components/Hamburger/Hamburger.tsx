import React, { useState } from 'react';
import styles from './Hamburger.module.css';
import Drawer from '../Drawer/Drawer';

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
      <Drawer isShown={drawerShown} hideDrawer={hideDrawer}></Drawer>
    </>
  );
};

export default Hamburger;
