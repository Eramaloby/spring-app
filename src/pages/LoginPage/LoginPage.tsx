import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppHooks';
import { setUserIsAuthenticated } from '../../store/actions';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (username === 'admin' && password === '1234') {
      dispatch(setUserIsAuthenticated());
      navigate('/');
    } else {
      setError('Wrong username or password!');
    }
  };

  return (
    <div className={styles['auth-page-container']}>
      <div className={styles['auth-form-card']}>
        <h2>Authorization Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor={styles['username']}>User name:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={styles['password']}>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles['error-message']}>{error}</p>}
          <button type='submit'>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
