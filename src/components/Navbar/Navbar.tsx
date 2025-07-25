import Logo from '../Logo/Logo';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavigationLinks />
    </div>
  );
};

export default Navbar;
