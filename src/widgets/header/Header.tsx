import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { HeaderDiv, Nav } from './Header.styled';
import { LogoMain } from '@/shared/ui/Logo/Logo';
import { UserNav } from '@/widgets/header/user-nav/UserNav';
import { UserBar } from '@/widgets/header/user-bar/UserBar';
import { Buttons } from '@/shared/ui/Button/Button';
import { ButtonMenu } from '@/widgets/header/btn-burger/ButtonMenu';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { isLoggedInSelect } from '@/redux/auth/selectors';
import { logOutThunk } from '@/redux/auth/operations';

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
                prop="Log out"
              />
            )}
            {isLoggedIn ? <ButtonMenu /> : null}
          </Nav>
        </HeaderDiv>
      )}
    </>
  );
};
