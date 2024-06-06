import PropTypes from 'prop-types';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { Children } from '../PrivateRoute/PrivateRoute';
import { useAppSelector } from '../../hooks/hooks';

export const PublicRoute = ({ children }: Children) => {
  const isLoggedIn = useAppSelector(isLoggedInSelect);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to={location.state?.from ?? '/'} />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.any,
};
