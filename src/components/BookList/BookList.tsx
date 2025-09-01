import { useEffect, useState } from 'react';
import { fetchBooks } from '@/redux/books/operations';
import { booksSelector } from '@/redux/books/selectors';
import { ListBook } from './BookList.styled';
import { isLoggedInSelect } from '@/redux/auth/selectors';
import { Pagination } from '../Pagination/Pagination';
import { BookItem } from '../BookItem/BookItem';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useWindowSize } from '@/hooks/useWindowSize';
import { filterSelector } from '@/redux/filter/selectors';

export type ReadBook = {
  author: string;
  imageUrl: string;
  owner: string;
  progress: [];
  status: string;
  timeLeftToRead: { hours: null; minutes: null; seconds: null };
  title: string;
  totalPages: number;
  _id: string;
};

export const BookList = () => {
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const { results } = useAppSelector(booksSelector);

  const isLoggedIn = useAppSelector(isLoggedInSelect);

  const dispatch = useAppDispatch();

  const { sizeWindow } = useWindowSize();

  useEffect(() => {
    if (sizeWindow < 768) {
      setLimit(2);
    } else if (sizeWindow > 768 && sizeWindow < 1440) {
      setLimit(8);
    } else {
      setLimit(10);
    }
  }, [sizeWindow]);

  useEffect(() => {
    isLoggedIn && dispatch(fetchBooks({ page, limit }));
  }, [dispatch, isLoggedIn, page, limit]);

  const filterBook = useAppSelector(filterSelector);

  const f = filterBook?.results[0].title.toLowerCase() || '';

  const d = f
    ? results.filter((book: { title: string }) =>
        book.title.toLowerCase().includes(f)
      )
    : results;

  return (
    <>
      <Pagination setPage={setPage} page={page} />
      <ListBook>
        {d.map((item: ReadBook, index) => (
          <BookItem
            key={index}
            id={item._id}
            img={item.imageUrl}
            title={item.title}
            author={item.author}
            pages={item.totalPages}
          />
        ))}
      </ListBook>
    </>
  );
};
