import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAppDispatch } from './useAppHooks';
import { useSignUpMutation } from '../services/authApi';
import { loginSuccess, userError, userLoading } from '../features/user/userSlice';
import type { SignUpFieldError } from '../types/signup.types';

interface BackendErrorResponse {
  errors: SignUpFieldError[];
}

interface FormDataState {
  firstName: string;
  lastName: string;
  age: string;
  username: string;
  password: string;
  repeatPassword: string;
}

function isBackendErrorResponse(err: unknown): err is BackendErrorResponse {
  return typeof err === 'object' && err !== null && 'errors' in err && Array.isArray(err.errors);
}

const useSignUpLogic = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [performSignUp, { isLoading }] = useSignUpMutation();
  const [backendErrors, setBackendErrors] = useState<{ [key: string]: string }>({});

  const handleSignUp = async (e: React.FormEvent, formData: FormDataState) => {
    e.preventDefault();
    dispatch(userLoading());
    setBackendErrors({});

    try {
      const result = await performSignUp({
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: parseInt(formData.age, 10),
        username: formData.username,
        password: formData.password,
        repeatPassword: formData.repeatPassword,
      }).unwrap();

      dispatch(loginSuccess(result.user));
      navigate('/');
    } catch (err: unknown) {
      console.error('Sign-up failed:', err);

      if (isBackendErrorResponse(err)) {
        const errorData = err.errors;

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

  return { handleSignUp, isLoading, backendErrors };
};

export { useSignUpLogic };
