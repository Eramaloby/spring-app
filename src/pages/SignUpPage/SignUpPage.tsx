import styles from './SignUpPage.module.css';

import { useSignUpLogic } from '../../hooks/useSignUpLogic';
import { useForm } from '../../hooks/useForm';

const SignUpPage = () => {
  const [formData, handleChange] = useForm({
    firstName: '',
    lastName: '',
    age: '',
    username: '',
    password: '',
    repeatPassword: '',
  });

  const { handleSignUp, isLoading, backendErrors } = useSignUpLogic();

  const hasError = (fieldName: string) => backendErrors[fieldName];

  const getErrorMessage = (fieldName: string) =>
    hasError(fieldName) ? (
      <p className={styles['error-message-field']}>{backendErrors[fieldName]}</p>
    ) : null;

  return (
    <div className={styles['auth-page-container']}>
      <div className={styles['auth-form-card']}>
        <h2>Sign Up Page</h2>
        <form onSubmit={(e) => handleSignUp(e, formData)}>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {getErrorMessage('firstName')}
          </div>
          <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {getErrorMessage('lastName')}
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input type='number' id='age' value={formData.age} onChange={handleChange} required />
            {getErrorMessage('age')}
          </div>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            {getErrorMessage('username')}
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            {getErrorMessage('password')}
          </div>
          <div>
            <label htmlFor='repeatPassword'>Repeat Password:</label>
            <input
              type='password'
              id='repeatPassword'
              value={formData.repeatPassword}
              onChange={handleChange}
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
