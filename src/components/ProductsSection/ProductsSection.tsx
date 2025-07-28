import style from './ProductsSection.module.css';

import ProductCard from '../ProductCard/ProductCard';

import { useAppSelector } from '../../hooks/useAppHooks';

const ProductsSection = () => {
  const products = useAppSelector((state) => state.products.productsToShow);
  return (
    <div className={style['products-section']}>
      {products.length !== 0 ? (
        products.map((product) => <ProductCard product={product} key={product.name}></ProductCard>)
      ) : (
        <p>No projects matching search terms</p>
      )}
    </div>
  );
};

export default ProductsSection;
