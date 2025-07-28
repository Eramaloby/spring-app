import { type User } from '../features/user/userTypes';

export interface LoginRequestBody {
  login: string;
  password: string;
}

export interface LoginSuccessResponse {
  message: string;
  user: User;
}

export interface LoginErrorResponse {
  message: string;
}
