import { HeaderDiv, Nav } from './Header.styled';
import { Logo } from '@/shared/ui/Logo/Logo';
import { UserNav } from '@/widgets/header/user-nav/UserNav';
import { UserBar } from '@/widgets/header/user-bar/UserBar';
import { Buttons } from '@/shared/ui/Button/Button';
import { ButtonMenu } from '@/widgets/header/btn-burger/ButtonMenu';

import { useLogOut } from '../api/useLogOut';
import { useLocation } from 'react-router-dom';
import { BurgerMenu } from '../burger-menu/BurgerMenu';
import { useToggle } from '@/hooks/useToggle';

const routes = ['/login', '/register'];

export const Header = () => {
  const { pathname } = useLocation();

  const handelLogout = useLogOut();

  const { isOpen, open, close } = useToggle();

  return (
    <>
      {!routes.includes(pathname) && (
        <HeaderDiv>
          <Nav>
            <Logo variant="logo-header" />
            <UserNav />
            <UserBar />
            <Buttons onClick={handelLogout} variant="log-out" prop="Log out" />
            <ButtonMenu handelOpen={open} />
            <BurgerMenu open={isOpen} close={close} />
          </Nav>
        </HeaderDiv>
      )}
    </>
  );
};
