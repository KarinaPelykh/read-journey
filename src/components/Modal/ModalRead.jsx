import PropTypes from 'prop-types';
import { Buttons } from '../Button/Button';
import { Overlay, Modal, ButtonClose } from './ModalWindow.styled';
import icons from '../../images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReadBook } from '../../redux/books/operations';
import { useNavigate } from 'react-router-dom';
export const ModalRead = ({ open, toggle, children, id, variant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelAddBookRead = () => {
    dispatch(addReadBook({ id }));
    navigate('/reading');

    if (open) {
      document.body.style.overflow = 'auto';
    }
  };
  useEffect(() => {
    const handelKeyEscape = e => {
      if (e.code === 'Escape') {
        toggle();
        document.body.style.overflow = 'auto';
      }
    };
    document.addEventListener('keydown', handelKeyEscape);
    return () => {
      document.removeEventListener('keydown', handelKeyEscape);
    };
  }, [toggle]);

  const handelCloseClick = e => {
    if (e.target === e.currentTarget) {
      toggle();
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <Overlay onClick={handelCloseClick}>
      {open && (
        <Modal variant={variant}>
          <ButtonClose onClick={toggle}>
            <svg width="20" height="20">
              <use xlinkHref={icons + '#close'}></use>
            </svg>
          </ButtonClose>

          <>
            {children}

            <Buttons
              onClick={handelAddBookRead}
              prop="Start reading"
              variant="buttonModal"
            />
          </>
        </Modal>
      )}
    </Overlay>
  );
};

ModalRead.propTypes = {
  children: PropTypes.any,
  id: PropTypes.number,
  open: PropTypes.bool,
  toggle: PropTypes.func,
  variant: PropTypes.any,
};
