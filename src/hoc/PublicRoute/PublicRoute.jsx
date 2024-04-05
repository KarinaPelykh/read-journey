import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to={location.state?.from ?? '/'} />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.any,
};
