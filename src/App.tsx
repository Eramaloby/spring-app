import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ProductsSection from './components/ProductsSection/ProductsSection';
import SearchProducts from './components/SearchProducts/SearchProducts';
import { PRODUCTS_BlOCK_CONTENT } from './constants/productsBlockContent';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(
    PRODUCTS_BlOCK_CONTENT
  );
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <SearchProducts
        products={PRODUCTS_BlOCK_CONTENT}
        setProducts={setFilteredProducts}
      ></SearchProducts>
      <ProductsSection products={filteredProducts}></ProductsSection>
    </>
  );
}

export default App;
