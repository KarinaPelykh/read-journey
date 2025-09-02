import { ReactNode } from 'react';
import { Buttons } from '@/shared/ui/Button/Button';
import { Overlay, Modal, ButtonClose, Text } from './ModalWindow.styled';
import { addBooksWithRecommended } from '@/redux/books/operations';
import { newBooksSelector } from '@/redux/books/selectors';
import images from '/images/pngwing.com.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { closeModalByKeyBoard } from './utils/closeModalByKeyBoard';
import { Icon } from '@/shared/ui/svg/Svg';

type ModalWindowProps = {
  children: ReactNode;
  id?: string;
  open: boolean;
  title?: string;
  toggle: () => void;
  variant?: string;
};

export const ModalWindow = ({
  children,
  open,
  toggle,
  id,
  title,
  variant,
}: ModalWindowProps) => {
  const bookNew = useAppSelector(newBooksSelector);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handelAddBook = () => {
    dispatch(addBooksWithRecommended({ id }));
    navigate('/library');
  };

  const closeByClick = closeModalByKeyBoard(toggle);

  const isBookAdded = bookNew.some((book: any) => book.title === title);

  return (
    <Overlay onClick={closeByClick}>
      {open && (
        <Modal $variant={variant as string}>
          <ButtonClose onClick={toggle}>
            <Icon iconName="close" />
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
