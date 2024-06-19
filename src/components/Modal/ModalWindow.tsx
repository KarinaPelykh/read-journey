import React, { FC, MouseEvent, ReactNode } from 'react';
import { Buttons } from '../Button/Button';
import { Overlay, Modal, ButtonClose, Text } from './ModalWindow.styled';
import icons from '../../images/sprite.svg';
import { useEffect } from 'react';
import { addBooksWithRecommended } from '../../redux/books/operations';
import { newBooksSelector } from '../../redux/books/selectors';
import images from '../../images/pngwing.com.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Svg } from '../BurgerMenu/BurgerMenu.styled';

interface ModalWindow {
  children: ReactNode;
  id: string;
  open: boolean;
  title?: string;
  toggle: () => void;
  variant?: string;
}
export const ModalWindow: FC<ModalWindow> = ({
  children,
  open,
  toggle,
  id,
  title,
  variant,
}) => {
  const bookNew = useAppSelector(newBooksSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handelAddBook = () => {
    dispatch(addBooksWithRecommended({ id }));
    navigate('/library');
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

  const isBookAdded = bookNew.some((book: any) => book.title === title);
  return (
    <Overlay onClick={handelCloseClick}>
      {open && (
        <Modal $variant={variant as string}>
          <ButtonClose onClick={toggle}>
            <Svg>
              <use xlinkHref={icons + '#close'}></use>
            </Svg>
          </ButtonClose>
          {isBookAdded ? (
            <div>
              <Text>Book added choose another</Text>
              <img src={images} />
            </div>
          ) : (
            <>
              {children}

              <Buttons
                prop="Add to library"
                variant="buttonModal"
                onClick={handelAddBook}
              />
            </>
          )}
        </Modal>
      )}
    </Overlay>
  );
};
