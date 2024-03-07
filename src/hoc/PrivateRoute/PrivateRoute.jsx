import { useSelector } from "react-redux";
import { isLoggedInSelect } from "../../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  const location = useLocation();
  console.log("log with private", location);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};
