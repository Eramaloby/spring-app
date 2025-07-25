import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import SearchProducts from '../../components/SearchProducts/SearchProducts';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main />
      <SearchProducts />
      <ProductsSection />
    </>
  );
};

export default HomePage;
