import React from 'react';

import style from './ProductsSection.module.css';

import type { Product } from '../../constants/productsBlockContent';

import ProductCard from '../ProductCard/ProductCard';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <div className={style['products-section']}>
      {products.map((product) => (
        <ProductCard product={product} key={product.name}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsSection;
