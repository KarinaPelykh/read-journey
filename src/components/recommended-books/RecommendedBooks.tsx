import { useAppDispatch } from '@/shared/hooks/hooks';
import { Text, WrapperBooks, Div } from './RecommendedBooks.styled';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { useEffect, useState } from 'react';
import { useGetFilteredData } from '@/widgets/books-list/api/useGetFilteredData';
import { fetchBooks } from '@/redux/books/operations';
import { BookList } from '@/widgets/books-list/ui/BookList';
import { useSetLimitOfBooks } from '@/shared/ui/pagination/api/useSetLimitOfBooks';

export const RecommendedBooks = () => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const dispatch = useAppDispatch();

  useSetLimitOfBooks(setLimit);

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, page, limit]);

  const books = useGetFilteredData();

  return (
    <WrapperBooks>
      <Div>
        <Text>Recommended</Text>
        {!(books.length <= 1) && <Pagination setPage={setPage} page={page} />}
      </Div>

      <BookList books={books} />
    </WrapperBooks>
  );
};
