import { useState, useEffect, useRef } from 'react';

import styles from './SearchProducts.module.css';

import type { Product } from '../../constants/productsBlockContent';

interface SearchProductsProps {
  products: Product[];
  setProducts: (filteredProducts: Product[]) => void;
}

const SearchProducts = ({ products, setProducts }: SearchProductsProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      performSearch(searchTerm, products);
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm, products]);

  const performSearch = (currentSearchTerm: string, allProducts: Product[]) => {
    const term = currentSearchTerm.toLowerCase().trim();
    const filteredProducts = allProducts.filter((product) => {
      const nameMatches = product.name.toLowerCase().includes(term);
      const descriptionMatches = product.description
        .toLowerCase()
        .includes(term);
      return nameMatches || descriptionMatches;
    });
    setProducts(filteredProducts);
  };

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
