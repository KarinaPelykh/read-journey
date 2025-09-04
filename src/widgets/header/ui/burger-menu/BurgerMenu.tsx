import { Buttons } from '@/shared/ui/button/Button';
import { UserNav } from '../user-nav/UserNav';
import { Menu, Modal } from './BurgerMenu.styled';
import { Icon } from '@/shared/ui/svg/Svg';
import { useLogOut } from '../../api/useLogOut';

type BurgerMenuProps = {
  open: boolean;
  close: () => void;
};

export const BurgerMenu = ({ open, close }: BurgerMenuProps) => {
  const handelLogout = useLogOut();

  const logoutAndCloseMenu = () => {
    handelLogout();
    close();
  };

  return (
    <Modal className={open ? 'open' : 'close'}>
      <Menu>
        <button onClick={close}>
          <Icon iconName="close" />
        </button>
        <UserNav variant="burger-menu" />
        <Buttons
          onClick={logoutAndCloseMenu}
          variant="log-out"
          prop="Log out"
        />
      </Menu>
    </Modal>
  );
};
