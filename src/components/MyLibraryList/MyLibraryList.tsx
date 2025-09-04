import { newBooksSelector } from '@/redux/books/selectors';
import Images from '/images/bookDefault.png';
// import hand from '@/images/hand.png';

import {
  // Greeting,
  MyListBook,
  Span,
  // SpanGreeting,
  Text,
  // TextGreeting,
  Wrapper,
} from './MyLibrary.styled';
// import { ModalWindow } from '../Modal/ModalWindow';
import { MyLibraryItem } from './MyLibraryItem/MyLibraryItem';
import { getVisibleTasks } from '@/helpers/sortedBook';
import { useAppSelector } from '@/shared/hooks/hooks';
import { useToggle } from '@/shared/hooks/useToggle';

type MyLibraryListProps = {
  status: string;
};

export const MyLibraryList = ({ status }: MyLibraryListProps) => {
  const newBook = useAppSelector(newBooksSelector);

  const visible = getVisibleTasks(status, newBook);

  // const [books, setBooks] = useState(newBook.length);

  // const g = () => {
  //   setBooks(prevState => (prevState < books ? books : prevState));
  // };

  const { isOpen, toggle } = useToggle();

  return (
    <>
      {newBook.length !== 0 ? (
        <MyListBook>
          {visible.map(item => (
            <MyLibraryItem
              key={item._id as string}
              id={item._id as string}
              img={item.imageUrl}
              title={item.title}
              author={item.author}
              pages={item.totalPages}
            />
          ))}
        </MyListBook>
      ) : (
        <Wrapper>
          <div>
            <img width="130" height="130" src={Images} alt="book" />
          </div>
          <Text>
            To start training, add <Span>some of your books</Span> or from the
            recommended ones
          </Text>
        </Wrapper>
      )}

      {/* {isOpen && (
        <ModalWindow open={isOpen} toggle={toggle} variant="min-modal">
          <img width="68" height="70" src={hand} />
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
