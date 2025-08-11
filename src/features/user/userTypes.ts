export interface User {
  login: string;
  password?: string;
}

export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  accessToken: string | null;
}
