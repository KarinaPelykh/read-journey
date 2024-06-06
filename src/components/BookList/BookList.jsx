import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/operations';
import { booksSelector } from '../../redux/books/selectors';
import { ListBook } from './BookList.styled';
import { isLoggedInSelect } from '../../redux/auth/selectors';
import { Pagination } from '../Pagination/Pagination';
import { BookItem } from '../BookItem/BookItem';
import { useAppSelector } from '../../hooks/hooks';

export const BookList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);
  const bookSelector = useAppSelector(booksSelector);
  const totalPage = bookSelector.totalPages;
  const { results } = bookSelector;

  const isLoggedIn = useAppSelector(isLoggedInSelect);
  const dispatch = useDispatch();

  const handelSize = () => {
    setSizeWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handelSize);

    return () => {
      window.removeEventListener('resize', handelSize);
    };
  }, []);

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

  const handelPrevious = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  const handelNext = () => {
    if (page === 3) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <>
      <Pagination
        previous={handelPrevious}
        next={handelNext}
        page={page}
        totalPage={totalPage}
      />
      <ListBook>
        {results?.map(item => (
          <BookItem
            key={item._id}
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
