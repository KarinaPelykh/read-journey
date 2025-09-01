import { Navigate, Route, Routes } from 'react-router-dom';
import { RegistrationPage } from './pages/Registration/Registration';

import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';
import { isLoggedInSelect, refresh } from './redux/auth/selectors';
import { Loader } from './shared/ui/Loader/Loader';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { LoginPage } from './pages/Login/Login';
import { Reading } from './pages/Reading/Reading';
import { MyLibrary } from './pages/MyLibrary/MyLibrary';
import { Recommended } from './pages/Recommended/Recommended';
import { Layout } from './shared/ui/Layout';
import { PublicRoute } from './hoc/PublicRoute';
import { PrivateRoute } from './hoc/PrivateRoute';

function App() {
  const dispatch = useAppDispatch();

  const isrRefresh = useAppSelector(refresh);

  const isLoggedIn = useAppSelector(isLoggedInSelect);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isrRefresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/recommended" />
              ) : (
                <Navigate to="/register" />
              )
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="reading"
            element={
              <PrivateRoute>
                <Reading />
              </PrivateRoute>
            }
          />
          <Route
            path="library"
            element={
              <PrivateRoute>
                <MyLibrary />
              </PrivateRoute>
            }
          />
          <Route
            path="recommended"
            element={
              <PrivateRoute>
                <Recommended />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
