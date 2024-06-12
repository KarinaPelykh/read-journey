import React, { MouseEvent } from 'react';
import { Buttons } from '../Button/Button';
import { Overlay, Modal, ButtonClose } from './ModalWindow.styled';
import icons from '../../images/sprite.svg';
import { ReactNode, useEffect } from 'react';
import { addReadBook } from '../../redux/books/operations';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';

interface ModalRead {
  children: ReactNode;
  id?: string;
  open: boolean;
  toggle: () => void;
  variant?: string | null;
}
export const ModalRead = ({
  open,
  toggle,
  children,
  id,
  variant,
}: ModalRead) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handelAddBookRead = () => {
    dispatch(addReadBook({ id }));
    navigate('/reading');

    if (open) {
      document.body.style.overflow = 'auto';
    }
  };
  useEffect(() => {
    const handelKeyEscape = (e: KeyboardEvent) => {
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

  const handelCloseClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggle();
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <Overlay onClick={handelCloseClick}>
      {open && (
        <Modal $variant={variant || null}>
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
