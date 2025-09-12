import { deleteBook } from '@/redux/books/operations';
import {
  Author,
  Image,
  ButtonDelete,
  QuantityPages,
  Title,
  WrapperItem,
} from './MyLibraryItem.styled';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';
import { useToggle } from '@/shared/hooks/useToggle';
import { ModalRead } from '@/components/Modal/ModalRead';
import { Icon } from '@/shared/ui/svg/Svg';

type Book = {
  author: string;
  _id: string;
  imageUrl: string;
  totalPages: number;
  title: string;
};

type MyLibraryItemProps = {
  book: Book;
};

export const MyLibraryItem = ({ book }: MyLibraryItemProps) => {
  const { _id: id, imageUrl, title, author, totalPages } = book;

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
        <Image
          onClick={toggle}
          src={imageUrl ?? '/images/img-book.png'}
          alt="book"
          width={137}
          height={208}
        />
        <WrapperItem>
          <div>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </div>
          <ButtonDelete onClick={handleDeleteBook}>
            <Icon iconName="trash" variant="trash-2" />
          </ButtonDelete>
        </WrapperItem>
      </li>

      {isOpen && (
        <ModalRead open={isOpen} toggle={toggle} id={id}>
          <Image
            src={imageUrl ?? '/images/img-book.png'}
            alt="book"
            width={137}
            height={208}
          />
          <Title>{title}</Title>
          <Author>{author}</Author>
          <QuantityPages>{totalPages} pages</QuantityPages>
        </ModalRead>
      )}
    </>
  );
};
