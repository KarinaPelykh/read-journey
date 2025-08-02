import { Buttons } from '../../Button/Button';
import { logOutThunk } from '../../../redux/auth/operations';
import { HeaderDiv, Nav } from './Header.styled';
import { isLoggedInSelect } from '../../../redux/auth/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonMenu } from '../../BurgerMenu/ButtonMenu/ButtonMenu';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { UserNav } from '../UserNav/UserNav';
import { UserBar } from '../UserBar/UserBar';
import { LogoMain } from '../../Logo/Logo';

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const locationUser =
    location.pathname === '/login' || location.pathname === '/register';

  const isLoggedIn = useAppSelector(isLoggedInSelect);

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
            <UserNav variant="" />
            <UserBar />
            {!isLoggedIn ? null : (
              <Buttons
                onClick={handelLogout}
                variant="log-out"
                prop={'Log out'}
              />
            )}
            {(userNav && isLoggedIn) || !userNav ? <ButtonMenu /> : null}
          </Nav>
        </HeaderDiv>
      )}
    </>
  );
};
