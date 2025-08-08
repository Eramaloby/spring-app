import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppHooks';

import { useLoginMutation } from '../../services/authApi';
import { loginSuccess, userLoading, userError } from '../../features/user/userSlice';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [performLogin, { isLoading, isError, error: loginError }] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLoading());

    try {
      const result = await performLogin({ login, password }).unwrap();

      dispatch(loginSuccess(result.user));

      navigate('/');
    } catch (err: unknown) {
      const errorMessage: string = 'Login error.';

      console.error('Login failed:', err);
      dispatch(userError(errorMessage));
    }
  };

  const displayErrorMessage = () => {
    if (!isError || !loginError) return null;

    if ('status' in loginError) {
      const errMsg = 'error' in loginError ? loginError.error : JSON.stringify(loginError.data);
      return errMsg;
    }
    return loginError.message;
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
              id='username'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor={styles['password']}>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isError && <p className={styles['error-message']}>{displayErrorMessage()}</p>}
          <button type='submit' disabled={isLoading}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
