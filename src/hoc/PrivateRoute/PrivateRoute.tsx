import PropTypes from 'prop-types';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
export type Children = {
  children: React.ReactNode;
};
export const PrivateRoute = ({ children }: Children) => {
  const isLoggedIn = useAppSelector(isLoggedInSelect);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={'/login'} state={{ from: location }} />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
