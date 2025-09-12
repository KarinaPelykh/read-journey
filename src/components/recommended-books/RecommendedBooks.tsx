import { useAppDispatch } from '@/shared/hooks/hooks';
import { Text, WrapperBooks } from './RecommendedBooks.styled';
import { Pagination } from '@/shared/ui/pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSetLimitOfBooks } from '@/widgets/books-list/api/useSetLimitOfBooks';
import { useGetFilteredData } from '@/widgets/books-list/api/useGetFilteredData';
import { fetchBooks } from '@/redux/books/operations';
import { BookList } from '@/widgets/books-list/ui/BookList';

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
      <Text>Recommended</Text>
      {books.length <= 1 ? null : <Pagination setPage={setPage} page={page} />}
      <BookList books={books} />
    </WrapperBooks>
  );
};
