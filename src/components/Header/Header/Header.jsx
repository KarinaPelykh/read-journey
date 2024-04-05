import { UserBar } from '../UserBar/UserBar';
import { Buttons } from '../../Button/Button';
import { logOutThunk } from '../../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { LogoMain } from '../../Logo/Logo';
import { UserNav } from '../UserNav/UserNav';
import { HeaderDiv, Nav } from './Header.styled';
import { isLoggedInSelect } from '../../../redux/auth/selectors';
import { AuthNav } from '../../AuthNav/AuthNav';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonMenu } from '../../BurgerMenu/ButtonMenu/ButtonMenu';
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const locationUser =
    location.pathname === '/login' || location.pathname === '/register';
  const isLoggedIn = useSelector(isLoggedInSelect);
  const userNav = location.pathname === '/';
  const handelLogout = () => {
    dispatch(logOutThunk())
      .then(() => {
        navigate('/');
        toast.success('You Log-out', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        });
      })
      .catch(error => toast.error(error));
  };
  return (
    <>
      {!locationUser && (
        <HeaderDiv>
          <Nav>
            <LogoMain variant="logo-header" />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
            <UserBar />
            {!isLoggedIn ? null : (
              <Buttons
                onClick={handelLogout}
                variant="log-out"
                prop={'Log out'}
              />
            )}
            {userNav ? null : <ButtonMenu />}
          </Nav>
        </HeaderDiv>
      )}
    </>
  );
};
