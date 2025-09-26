import { deleteBook } from '@/redux/books/operations';
import { ButtonDelete } from './MyLibraryItem.styled';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { toast } from 'react-toastify';
import { Icon } from '@/shared/ui/svg/Svg';
import { Card } from '@/entities/card/Card';

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
      <Card
        variant="library-list"
        title={title}
        author={author}
        image={imageUrl ? imageUrl : '/images/image.png'}
        pages={totalPages}
        id={id}
      >
        <ButtonDelete
          onClick={e => {
            e.stopPropagation();
            handleDeleteBook();
          }}
        >
          <Icon iconName="trash" variant="trash-2" />
        </ButtonDelete>
      </Card>
    </>
  );
};
