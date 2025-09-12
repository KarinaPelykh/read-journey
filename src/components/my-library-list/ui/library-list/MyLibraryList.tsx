import { newBooksSelector } from '@/redux/books/selectors';

import {
  // Greeting,
  MyListBook,
  // SpanGreeting,
  // TextGreeting,
} from './MyLibrary.styled';
// import { ModalWindow } from '../Modal/ModalWindow';
import { MyLibraryItem } from '../library-item/MyLibraryItem';
import { getBookByReadingStatus } from '@/helpers/sortedBook';
import { useAppSelector } from '@/shared/hooks/hooks';
// import { useToggle } from '@/shared/hooks/useToggle';
import { EmptyBookList } from '../empty-list/EmptyBookList';

type MyLibraryListProps = {
  status: string;
};

export const MyLibraryList = ({ status }: MyLibraryListProps) => {
  const newBook = useAppSelector(newBooksSelector);

  const books = getBookByReadingStatus(status, newBook);

  // const { isOpen, toggle } = useToggle();

  return (
    <>
      {newBook.length ? (
        <MyListBook>
          {books?.map(book => (
            <MyLibraryItem key={book._id} book={book} />
          ))}
        </MyListBook>
      ) : (
        <EmptyBookList />
      )}

      {/* {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} variant="min-modal">
          <img width="68" height="70" src="/images/hand.png" />
          <TextGreeting>Good job</TextGreeting>
          <Greeting>
            Your book is now in <SpanGreeting>the library </SpanGreeting>! The
            joy knows no bounds and now you can start your training
          </Greeting>
        </ModalWindow>
      )} */}
    </>
  );
};
