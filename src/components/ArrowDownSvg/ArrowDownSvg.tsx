import styles from './ArrowDown.module.css';

interface ArrowDownSvgProps {
  className: string;
}

const ArrowDownSvg = ({ className }: ArrowDownSvgProps) => {
  return (
    <svg
      className={`${styles['arrow-down']} ${
        className !== '' ? styles[className] : ''
      }`}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
    >
      <polyline points='6 9 12 15 18 9'></polyline>
    </svg>
  );
};

export default ArrowDownSvg;
