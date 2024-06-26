import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../redux/auth/operations';
import { Buttons } from '../Button/Button';
import { UserNav } from '../Header/UserNav/UserNav';
import { toast } from 'react-toastify';
import icon from '../../images/sprite.svg';
import { Menu, Modal, Svg } from './BurgerMenu.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { FC } from 'react';
import { MyKnownError } from '../../type/Book.type';

interface BurgerMenu {
  open: boolean;
  toggle: () => void;
}

export const BurgerMenu: FC<BurgerMenu> = ({ open, toggle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      .catch(error => toast.error(error.message));
  };

  return (
    <>
      <Modal className={open ? 'open' : 'close'}>
        <Menu>
          <button onClick={toggle}>
            <Svg>
              <use xlinkHref={icon + '#close'}></use>
            </Svg>
          </button>
          <UserNav variant="burger-menu" />
          <Buttons onClick={handelLogout} variant="log-out" prop={'Log out'} />
        </Menu>
      </Modal>
    </>
  );
};
