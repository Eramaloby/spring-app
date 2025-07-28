import style from './ProductsSection.module.css';

import ProductCard from '../ProductCard/ProductCard';

import type { Product } from '../../constants/productsBlockContent';

interface ProductsSectionProps {
  productsToShow: Product[];
}

const ProductsSection = ({ productsToShow }: ProductsSectionProps) => {
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
