import type { User } from '../features/user/userTypes';

export interface SignUpRequestBody {
  username: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  age: number;
}

export interface SignUpSuccessResponse {
  user: User;
  accessToken: string;
  message: string;
}

export interface SignUpErrorResponse {
  message: string;
}

export interface SignUpFieldError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
