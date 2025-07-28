import styles from './ProductCard.module.css';

import type { Product } from '../../constants/productsBlockContent';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles['product-card']}>
      <ProductIcon name={product.name} src={product.src}></ProductIcon>
      <ProductDescription description={product.description}></ProductDescription>
      <ProductVersion
        currentVersion={product.currentVersion}
        versionsCount={product.versionsCount}
      ></ProductVersion>
    </div>
  );
};

export default ProductCard;

interface ProductIconProps {
  name: string;
  src: string;
}

const ProductIcon = ({ name, src }: ProductIconProps) => {
  return (
    <div className={styles['product-icon']}>
      <img src={src} alt={name}></img>
      <h3 className={styles['product-title']}>{name}</h3>
    </div>
  );
};

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return <p className={styles['product-description']}>{description}</p>;
};

interface ProductVersionProps {
  currentVersion: string;
  versionsCount: number;
}

const ProductVersion = ({ currentVersion, versionsCount }: ProductVersionProps) => {
  return (
    <div className={styles['product-version']}>
      <span className={styles['version-badge']}>{currentVersion}</span>
      <span>{`+${versionsCount} versions`}</span>
    </div>
  );
};
