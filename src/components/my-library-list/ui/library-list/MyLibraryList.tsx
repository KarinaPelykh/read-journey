import { newBooksSelector } from '@/redux/books/selectors';

import { MyListBook } from './MyLibrary.styled';
import { MyLibraryItem } from '../library-item/MyLibraryItem';
import { getBookByReadingStatus } from '@/helpers/sortedBook';
import { useAppSelector } from '@/shared/hooks/hooks';
import { EmptyBookList } from '../empty-list/EmptyBookList';

type MyLibraryListProps = {
  status: string;
};

export const MyLibraryList = ({ status }: MyLibraryListProps) => {
  const newBook = useAppSelector(newBooksSelector);

  const books = getBookByReadingStatus(status, newBook);

  return (
    <>
      {newBook.length ? (
        <MyListBook>
          {books?.map(book => {
            return <MyLibraryItem key={book._id} book={book} />;
          })}
        </MyListBook>
      ) : (
        <EmptyBookList />
      )}
    </>
  );
};
