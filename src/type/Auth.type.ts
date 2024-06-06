export interface MyKnownError {
  errorMessage: string;
}

export interface AuthResponse {
  email: string;
  name: string;
  refreshToken: string;
  token: string;
}
export interface AuthCredential {
  email: string;
  name: string;
  password: string;
}
export type LoginCredential = Omit<AuthCredential, 'name'>;
export interface State {
  user: {
    name: string;
    email: string;
  };
  token: string;
  error: null | string;
  loading: boolean;
  isLoggedIn: boolean;
  isRefresh: boolean;
}

export type StateFunction = {
  error: null | string | unknown;
  loading: boolean;
  isLoggedIn: boolean;
  isRefresh: boolean;
};
