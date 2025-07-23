import { useState, useCallback } from 'react';

import useDebounce from '../../utils/useDebounce';

import styles from './SearchProducts.module.css';

import type { Product } from '../../constants/productsBlockContent';

interface SearchProductsProps {
  products: Product[];
  setProducts: (filteredProducts: Product[]) => void;
}

const SearchProducts = ({ products, setProducts }: SearchProductsProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  }, [searchTerm, products, setProducts]);

  useDebounce(debouncedSearch, 300);

  return (
    <>
      <div className={styles['search-wrapper']}>
        <input
          className={styles['search-input']}
          type='text'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder='Search products'
        />
      </div>
    </>
  );
};

export default SearchProducts;
