import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import SearchProducts from '../../components/SearchProducts/SearchProducts';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import { useState } from 'react';
import { type Product } from '../../constants/productsBlockContent';

const HomePage = () => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  return (
    <>
      <Navbar />
      <Main />
      <SearchProducts setProductsToShow={setProductsToShow} />
      <ProductsSection productsToShow={productsToShow} />
    </>
  );
};

export default HomePage;
