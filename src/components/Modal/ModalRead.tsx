import { Buttons } from '@/shared/ui/Button/Button';
import { Overlay, Modal, ButtonClose } from './ModalWindow.styled';
import icons from '/images/sprite.svg';
import { ReactNode } from 'react';
import { addReadBook } from '@/redux/books/operations';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/hooks';
import { Svg } from '../../widgets/header/burger-menu/BurgerMenu.styled';
import { closeModalByKeyBoard } from './utils/closeModalByKeyBoard';

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
            <Svg width="20" height="20">
              <use xlinkHref={icons + '#close'}></use>
            </Svg>
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
