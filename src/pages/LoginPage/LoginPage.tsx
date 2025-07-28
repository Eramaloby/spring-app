import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { isRejectedWithValue } from '@reduxjs/toolkit';

import {
  isFetchBaseQueryError,
  isSerializedError,
  isHttpError,
  isNetworkError,
} from '../utils/typeGuards/typeGuards';

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
      let errorMessage: string = 'Unknown login error.';

      if (isRejectedWithValue(err)) {
        if (isFetchBaseQueryError(err)) {
          if (isHttpError(err)) {
            if (err.data && typeof err.data === 'object' && 'message' in err.data) {
              errorMessage = (err.data as { message: string }).message;
            }
          } else if (isNetworkError(err)) {
            errorMessage = err.error;
          }
        } else if (isSerializedError(err)) {
          if (typeof err.message === 'string') {
            errorMessage = err.message;
          }
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      console.error('Login failed:', err); // eslint-disable-line no-console
      dispatch(userError(errorMessage));
    }
  };

  const displayErrorMessage = () => {
    if (!isError || !loginError) return null;

    if (isFetchBaseQueryError(loginError)) {
      if (isHttpError(loginError)) {
        if (
          loginError.data &&
          typeof loginError.data === 'object' &&
          'message' in loginError.data
        ) {
          return (loginError.data as { message: string }).message;
        }
      } else if (isNetworkError(loginError)) {
        return loginError.error;
      }
    } else if (isSerializedError(loginError)) {
      if (typeof loginError.message === 'string') {
        return loginError.message;
      }
    }
    return 'Unknown login error.';
  };

  return (
    <div className={styles['auth-page-container']}>
      <div className={styles['auth-form-card']}>
        <h2>Authorization Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor={styles['username']}>User name:</label>
            <input type='text' value={login} onChange={(e) => setLogin(e.target.value)} required />
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
