import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import { useAppSelector } from './hooks/useAppHooks';

import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated ? <HomePage /> : <Navigate to='/login' replace />
          }
        />
        <Route
          path='login'
          element={
            isAuthenticated ? <Navigate to='/' replace /> : <LoginPage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
