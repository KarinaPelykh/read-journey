import { ReactNode } from 'react';
import { Overlay, Modal, ButtonClose } from './ModalWindow.styled';
import { newBooksSelector } from '@/redux/books/selectors';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/shared/hooks/hooks';
import { closeModalByKeyBoard } from '../../api/closeModalByKeyBoard';
import { Icon } from '@/shared/ui/svg/Svg';
import { BookAdded } from '../book-added/BookAdded';
import { ContentModal } from '../content-modal/ContentModal';

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
            <BookAdded />
          ) : (
            <ContentModal id={id}>{children}</ContentModal>
          )}
        </Modal>
      )}
    </Overlay>
  );
};
