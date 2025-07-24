import { useState, useCallback } from 'react';

import useDebounce from '../../hooks/useDebounce';

import styles from './SearchProducts.module.css';

import { useAppSelector, useAppDispatch } from '../../hooks/useAppHooks';
import { setProductsToShow } from '../../store/actions';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useAppSelector((state) => state.products.productsContent);
  const dispatch = useAppDispatch();

  const debouncedSearch = useCallback(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setProductsToShow(filtered));
  }, [searchTerm, products, dispatch]);

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
