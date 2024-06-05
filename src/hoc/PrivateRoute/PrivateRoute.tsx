import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
export type Children = {
  children: React.ReactNode;
};
export const PrivateRoute = ({ children }: Children) => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={'/login'} state={{ from: location }} />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
