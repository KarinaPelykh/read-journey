import { Buttons } from '@/shared/ui/btn/Button';
import { UserNav } from '../user-nav/UserNav';
import { Menu, Modal } from './BurgerMenu.styled';
import { Icon } from '@/shared/ui/svg/Svg';
import { useLogOut } from '../../api/useLogOut';
import { closeModalByKeyBoard } from '@/components/Modal/api/closeModalByKeyBoard';

type BurgerMenuProps = {
  open: boolean;
  close: () => void;
  toggle: () => void;
};

export const BurgerMenu = ({ open, close, toggle }: BurgerMenuProps) => {
  const handelLogout = useLogOut();

  const logoutAndCloseMenu = () => {
    handelLogout();
    close();
  };

  const handelCloseClick = closeModalByKeyBoard(toggle);

  return (
    <Modal className={open ? 'open' : 'close'} onClick={handelCloseClick}>
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
