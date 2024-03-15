import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./pages/Registration/Registration";

import { HomePage } from "./pages/Home/HomePage";
import { Layout } from "./components/Layout/Layout";
import { MyLibrary } from "./pages/MyLibrary/MyLibrary";
import { Recommended } from "./pages/Recommended/Recommended";
import { Reading } from "./pages/Reading/Reading";
import { LoginPage } from "./pages/Login/Login";
import { PrivateRoute } from "./hoc/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./hoc/PublicRoute/PublicRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { refresh } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isrRefresh = useSelector(refresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isrRefresh ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
          <Route path="reading" element={<Reading />} />
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
    </div>
  );
}

export default App;
