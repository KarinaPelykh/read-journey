export interface MyKnownError {
  errorMessage: string;
}

export interface State {
  user: {
    name: string;
    email: string;
  };
  token: string;
  error: null;
  loading: boolean;
  isLoggedIn: boolean;
  isRefresh: boolean;
}
