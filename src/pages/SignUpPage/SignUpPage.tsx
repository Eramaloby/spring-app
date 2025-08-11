import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppHooks';

import { useSignUpMutation } from '../../services/authApi';
import { loginSuccess, userLoading, userError } from '../../features/user/userSlice';
import type { SignUpFieldError } from '../../types/signup.types';

import styles from './SignUpPage.module.css';

interface BackendErrorResponse {
  errors: SignUpFieldError[];
}

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [backendErrors, setBackendErrors] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [performSignUp, { isLoading }] = useSignUpMutation();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLoading());

    try {
      const result = await performSignUp({
        firstName,
        lastName,
        age: parseInt(age, 10),
        username,
        password,
        repeatPassword,
      }).unwrap();

      dispatch(loginSuccess(result.user));

      navigate('/');
    } catch (err: unknown) {
      console.error('Sign-up failed:', err);

      if (
        typeof err === 'object' &&
        err !== null &&
        'errors' in err &&
        Array.isArray((err as BackendErrorResponse).errors)
      ) {
        const errorData = (err as BackendErrorResponse).errors;

        const errorObject = errorData.reduce(
          (acc, error) => {
            if (error.path) {
              acc[error.path] = error.msg;
            }
            return acc;
          },
          {} as { [key: string]: string }
        );
        setBackendErrors(errorObject);
      } else {
        const errorMessage: string = 'Sign-up error.';
        dispatch(userError(errorMessage));
      }
    }
  };

  const hasError = (fieldName: string) => backendErrors[fieldName];

  const getErrorMessage = (fieldName: string) =>
    hasError(fieldName) ? (
      <p className={styles['error-message-field']}>{backendErrors[fieldName]}</p>
    ) : null;

  return (
    <div className={styles['auth-page-container']}>
      <div className={styles['auth-form-card']}>
        <h2>Sign Up Page</h2>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {getErrorMessage('firstName')}
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {getErrorMessage('lastName')}
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {getErrorMessage('age')}
          </div>
          <div>
            <label htmlFor='login'>Username:</label>
            <input
              type='text'
              id='login'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {getErrorMessage('login')}
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {getErrorMessage('password')}
          </div>
          <div>
            <label htmlFor='repeatPassword'>Repeat Password:</label>
            <input
              type='password'
              id='repeatPassword'
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
            {getErrorMessage('repeatPassword')}
          </div>
          {hasError('general') && (
            <p className={styles['error-message']}>{backendErrors['general']}</p>
          )}
          <button type='submit' disabled={isLoading}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
