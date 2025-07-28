import { useState, useCallback, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

import styles from './SearchProducts.module.css';

import { useGetProductsQuery } from '../../services/productsApi';

import { type Product } from '../../constants/productsBlockContent';

interface SearchProductsProps {
  setProductsToShow: (product: Product[]) => void;
}

const SearchProducts = ({ setProductsToShow }: SearchProductsProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [querySearchTerm, setQuerySearchTerm] = useState('');

  const updateQuerySearchTerm = useCallback(() => {
    setQuerySearchTerm(searchTerm);
  }, [searchTerm]);

  useDebounce(updateQuerySearchTerm, 300);

  const { data: productsData, isError, error } = useGetProductsQuery(querySearchTerm);

  useEffect(() => {
    if (isError) {
      console.error('Projects searching error', error); // eslint-disable-line no-console
      setProductsToShow([]);
    } else if (productsData) {
      setProductsToShow(productsData);
    }
  }, [productsData, isError, error, setProductsToShow]);

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
