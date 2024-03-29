import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../redux/auth/operations';
import { Buttons } from '../Button/Button';
import { UserNav } from '../Header/UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import icon from '../../images/sprite.svg';
import { Menu, Modal } from './BurgerMenu.styled';
export const BurgerMenu = ({ open, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogout = () => {
    dispatch(logOutThunk()).then(() => {
      navigate('/');
      toast
        .success('You Log-out', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        })
        .catch(error => toast.error(error));
    });
  };

  return (
    <>
      <Modal className={open ? 'open' : 'close'}>
        <Menu>
          <button onClick={toggle}>
            <svg width="28" height="28">
              <use xlinkHref={icon + '#close'}></use>
            </svg>
          </button>
          <UserNav variant="burger-menu" />
          <Buttons onClick={handelLogout} variant="log-out" prop={'Log out'} />
        </Menu>
      </Modal>
    </>
  );
};
