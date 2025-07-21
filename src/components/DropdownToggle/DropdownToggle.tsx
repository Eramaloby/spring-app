import ArrowDownSvg from '../ArrowDownSvg/ArrowDownSvg';

import styles from './DropdownToggle.module.css';

interface DropdownToggleProps {
  label: string;
  className?: string;
  arrowClassName?: string;
}

const DropdownToggle = ({
  label,
  className = '',
  arrowClassName = '',
}: DropdownToggleProps) => {
  return (
    <span className={`${styles['dropdown-toggle']} ${styles[className]}`}>
      {label}
      <ArrowDownSvg className={arrowClassName}></ArrowDownSvg>
    </span>
  );
};

export default DropdownToggle;
