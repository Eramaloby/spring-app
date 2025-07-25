import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import LoginPage from './pages/LoginPage/LoginPage';
import RouteWrapper from './pages/utils/RouteWrapper/RouteWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <RouteWrapper>
              <HomePage />
            </RouteWrapper>
          }
        />
        <Route
          path='/login'
          element={
            <RouteWrapper guestOnly={true}>
              <LoginPage />
            </RouteWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
