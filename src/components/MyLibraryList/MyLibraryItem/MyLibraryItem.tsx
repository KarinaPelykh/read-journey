import book from '/images/img-book.png';
import icon from '/images/sprite.svg';

import { deleteBook } from '@/redux/books/operations';
import {
  Author,
  BookImg,
  ButtonDelete,
  QuantityPages,
  Title,
  WrapperItem,
} from './MyLibraryItem.styled';
import { useAppDispatch } from '@/hooks/hooks';
import { toast } from 'react-toastify';
import { useToggle } from '@/hooks/useToggle';
import { ModalRead } from '@/components/Modal/ModalRead';

type MyLibraryItemProps = {
  author: string;
  id: string;
  img: string;
  pages: number;
  title: string;
};

export const MyLibraryItem = ({
  id,
  img,
  title,
  author,
  pages,
}: MyLibraryItemProps) => {
  const { toggle, isOpen } = useToggle();

  const dispatch = useAppDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook({ id }))
      .unwrap()
      .then(() => {
        toast.success('You deleted book', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark',
        });
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <>
      <li>
        <BookImg onClick={toggle} src={img ? img : book} />
        <WrapperItem>
          <div>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </div>
          <ButtonDelete onClick={handleDeleteBook}>
            <svg width="14" height="14">
              <use xlinkHref={icon + '#trash'}></use>
            </svg>
          </ButtonDelete>
        </WrapperItem>
      </li>

      {isOpen && (
        <ModalRead open={isOpen} toggle={toggle} id={id}>
          <BookImg src={img ? img : book} />
          <Title>{title}</Title>

          <Author>{author}</Author>
          <QuantityPages>{pages} pages</QuantityPages>
        </ModalRead>
      )}
    </>
  );
};
