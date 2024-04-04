import { useSelector } from 'react-redux';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const icLoggedIn = useSelector(isLoggedInSelect);
  const location = useLocation();

  if (icLoggedIn) {
    return <Navigate to={location.state?.from ?? '/'} />;
  }
  return children;
};
