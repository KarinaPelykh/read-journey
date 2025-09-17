import { ReactNode, useEffect, useRef, useState } from 'react';
import { Buttons } from '@/shared/ui/btn/Button';
import { Overlay, Modal, ButtonClose, Text } from './ModalWindow.styled';
import { addBooksWithRecommended, addReadBook } from '@/redux/books/operations';
import { newBooksSelector } from '@/redux/books/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { closeModalByKeyBoard } from './utils/closeModalByKeyBoard';
import { Icon } from '@/shared/ui/svg/Svg';

type ModalWindowProps = {
  children: ReactNode;
  id: string;
  open: boolean;
  toggle: () => void;
  variant?: string;
  title?: string;
};

export const ModalWindow = ({
  children,
  open,
  toggle,
  id,
  variant,
  title,
}: ModalWindowProps) => {
  const bookNew = useAppSelector(newBooksSelector);

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handelAddBook = () => {
    dispatch(addBooksWithRecommended({ id }));
    navigate('/library', { state: { bookAdded: true } });
  };

  const handelAddToRead = () => {
    dispatch(addReadBook({ id }));
    navigate('/reading');
  };

  const closeByClick = closeModalByKeyBoard(toggle);

  const isBookAdded = bookNew.some((book: any) => book.title === title);

  return (
    <Overlay onClick={closeByClick} $variant={variant}>
      {open && (
        <Modal $variant={variant}>
          <ButtonClose onClick={toggle}>
            <Icon iconName="close" />
          </ButtonClose>

          {isBookAdded && pathname !== '/library' ? (
            <div>
              <Text>Book added choose another</Text>
              <img src="/images/pngwing.com.png" alt="image" />
            </div>
          ) : (
            <>
              {children}

              <Buttons
                prop={
                  pathname === '/library' ? 'Start reading' : 'Add to library'
                }
                variant="buttonModal"
                onClick={
                  pathname === '/library' ? handelAddToRead : handelAddBook
                }
              />
            </>
          )}
        </Modal>
      )}
    </Overlay>
  );
};
