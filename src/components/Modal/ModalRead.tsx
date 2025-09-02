import { Buttons } from '@/shared/ui/Button/Button';
import { Overlay, Modal, ButtonClose } from './ModalWindow.styled';
import { ReactNode } from 'react';
import { addReadBook } from '@/redux/books/operations';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/hooks';
import { closeModalByKeyBoard } from './utils/closeModalByKeyBoard';
import { Icon } from '@/shared/ui/svg/Svg';

type ModalReadProps = {
  children: ReactNode;
  id: string;
  open: boolean;
  toggle: () => void;
  variant?: string;
};

export const ModalRead = ({
  open,
  toggle,
  children,
  id,
  variant,
}: ModalReadProps) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handelAddBookRead = () => {
    dispatch(addReadBook({ id }));
    navigate('/reading');
  };

  const closeByClick = closeModalByKeyBoard(toggle);

  return (
    <Overlay onClick={closeByClick}>
      {open && (
        <Modal $variant={variant}>
          <ButtonClose onClick={toggle}>
            <Icon iconName="close" />
          </ButtonClose>
          {children}
          <Buttons
            onClick={handelAddBookRead}
            prop="Start reading"
            variant="buttonModal"
          />
        </Modal>
      )}
    </Overlay>
  );
};

// svg  size  width="20" height="20"
