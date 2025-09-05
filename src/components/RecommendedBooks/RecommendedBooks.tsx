import { Text, TextLibrary, WrapperBooks } from './RecommendedBooks.styled';
import { useLocation } from 'react-router-dom';
import { MyBook } from '../MyBook/MyBook';
import { CustomSelect } from '../../widgets/select/ui/CustomSelect';
import { BookList } from '@/widgets/books-list/ui/BookList';
export const RecommendedBooks = () => {
  const location = useLocation();

  const isLibraryPage = location.pathname === '/library';

  const isReadingPage = location.pathname === '/reading';

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
        </>
      ) : (
        <>
          <TextLibrary>My library</TextLibrary>
          <CustomSelect />
        </>
      )}
    </WrapperBooks>
  );
};
