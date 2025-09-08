import { useEffect, useState } from 'react';
import { fetchBooks } from '@/redux/books/operations';
import { ListBook } from './BookList.styled';
import { useAppDispatch } from '@/shared/hooks/hooks';

import { useResetFilter } from '../api/useResetFilter';
import { useSetLimitOfBooks } from '../api/useSetLimitOfBooks';
import { useGetFilteredData } from '../api/useGetFilteredData';
import { NotFound } from './NotFound';
import { BookCard } from '@/entities/book-card/BookCard';
import { Pagination } from '@/shared/ui/pagination/Pagination';

type Book = {
  author: string;
  imageUrl: string;
  title: string;
  totalPages: number;
  _id: string;
};

export const BookList = () => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const dispatch = useAppDispatch();

  useSetLimitOfBooks(setLimit);

  const books = useGetFilteredData();

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, page, limit]);

  useResetFilter();

  return (
    <>
      {books.length <= 1 ? null : <Pagination setPage={setPage} page={page} />}
      <ListBook>
        {books.length ? (
          books.map((item: Book) => (
            <BookCard
              key={item._id}
              id={item._id}
              img={item.imageUrl}
              title={item.title}
              author={item.author}
              pages={item.totalPages}
            />
          ))
        ) : (
          <NotFound />
        )}
      </ListBook>
    </>
  );
};
