import React from 'react';

import ArrowDownSvg from '../ArrowDownSvg/ArrowDownSvg';

import styles from './DropdownToggle.module.css';

interface DropdownToggleProps {
  label: string;
}

const DropdownToggle = ({ label }: DropdownToggleProps) => {
  return (
    <span className={styles['dropdown-toggle']}>
      {label}
      <ArrowDownSvg></ArrowDownSvg>
    </span>
  );
};

export default DropdownToggle;
