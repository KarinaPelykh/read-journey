import { Text, TextLibrary, WrapperBooks } from './RecommendedBooks.styled';
import { BookList } from '../BookList/BookList';
import { useLocation } from 'react-router-dom';
import { MyBook } from '../MyBook/MyBook';
import { Selector } from '../Select/Select';

export const RecommendedBooks = () => {
  const location = useLocation();

  const isLibraryPage = location.pathname === '/library';

  const isReadingPage = location.pathname === '/reading';

  // const filteredBook = useSelector(filterSelector);

  return (
    <WrapperBooks>
      {isReadingPage ? (
        <>
          <Text>My reading</Text>
          <MyBook />
        </>
      ) : !isLibraryPage ? (
        <>
          <Text>Recommended</Text>
          <BookList />

          {/* {filteredBook?.results ? <BookFilter /> : <BookList />} */}
        </>
      ) : (
        <>
          <TextLibrary>My library</TextLibrary>
          <Selector />
        </>
      )}
    </WrapperBooks>
  );
};
