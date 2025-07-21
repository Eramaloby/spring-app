import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ProductsSection from './components/ProductsSection/ProductsSection';
import { PRODUCTS_BlOCK_CONTENT } from './constants/productsBlockContent';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <ProductsSection products={PRODUCTS_BlOCK_CONTENT}></ProductsSection>
    </>
  );
}

export default App;
