import type { User } from '../features/user/userTypes';

export interface LoginRequestBody {
  login: string;
  password: string;
}

export interface LoginSuccessResponse {
  user: User;
  accessToken: string;
  message: string;
}

export interface LoginErrorResponse {
  message: string;
}
