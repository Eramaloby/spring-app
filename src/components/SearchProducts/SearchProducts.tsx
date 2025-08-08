import { useState, useCallback, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

import styles from './SearchProducts.module.css';

import { useAppDispatch } from '../../hooks/useAppHooks';
import { setProducts } from '../../features/products/productsSlice';

import { useGetProductsQuery } from '../../services/productsApi';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [querySearchTerm, setQuerySearchTerm] = useState('');

  const dispatch = useAppDispatch();

  const updateQuerySearchTerm = useCallback(() => {
    setQuerySearchTerm(searchTerm);
  }, [searchTerm]);

  useDebounce(updateQuerySearchTerm, 300);

  const { data: productsData, isError, error } = useGetProductsQuery(querySearchTerm);

  useEffect(() => {
    if (isError) {
      console.error('Projects searching error', error);
      dispatch(setProducts([]));
    } else if (productsData) {
      dispatch(setProducts(productsData));
    }
  }, [productsData, isError, error, dispatch]);

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
