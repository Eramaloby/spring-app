import './App.css';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ProductsSection from './components/ProductsSection/ProductsSection';
import SearchProducts from './components/SearchProducts/SearchProducts';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Main></Main>
      <SearchProducts></SearchProducts>
      <ProductsSection></ProductsSection>
    </Provider>
  );
}

export default App;
