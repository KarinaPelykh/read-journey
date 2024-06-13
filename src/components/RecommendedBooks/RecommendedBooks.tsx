import { Text, TextLibrary, WrapperBooks } from './RecommendedBooks.styled';
import { BookList } from '../BookList/BookList';
import { useLocation } from 'react-router-dom';
import { BookFilter } from '../Filter/BookFilter/BookFilter';
import { useSelector } from 'react-redux';
import { filterSelector } from '../../redux/filter/selectors';
import { MyBook } from '../MyBook/MyBook';
import { Selector } from '../Select/Select';

export const RecommendedBooks = () => {
  const location = useLocation();
  const localUser = location.pathname === '/library';
  const user = location.pathname === '/reading';
  const filterBook = useSelector(filterSelector);
  console.log('filterBook', filterBook);

  return (
    <WrapperBooks>
      {user ? (
        <>
          <Text>My reading</Text>
          <MyBook />
        </>
      ) : !localUser ? (
        <>
          <Text>Recommended</Text>
          {filterBook?.results ? <BookFilter /> : <BookList />}
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
