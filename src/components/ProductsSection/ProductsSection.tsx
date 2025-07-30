import style from './ProductsSection.module.css';

import ProductCard from '../ProductCard/ProductCard';

import { useAppSelector } from '../../hooks/useAppHooks';

const ProductsSection = () => {
  const productsToShow = useAppSelector((state) => state.productsList.products);
  return (
    <div className={style['products-section']}>
      {productsToShow.length !== 0 ? (
        productsToShow.map((product) => <ProductCard product={product} key={product.name} />)
      ) : (
        <p>No projects matching search terms</p>
      )}
    </div>
  );
};

export default ProductsSection;
