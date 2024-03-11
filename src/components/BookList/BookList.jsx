import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/operations";
import { booksSelector } from "../../redux/books/selectors";
import { Author, BookImg, ListBook, Title } from "./BookList.styled";
import { isLoggedInSelect } from "../../redux/auth/selectors";
import { Pagination } from "../Pagination/Pagination";

export const BookList = () => {
  const bookSelector = useSelector(booksSelector);

  const isLoggedIn = useSelector(isLoggedInSelect);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(fetchBooks({ page }));
  }, [dispatch, isLoggedIn, page]);

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
      <Pagination previous={handelPrevious} next={handelNext} page={page} />
      <ListBook>
        {bookSelector.results?.map((item) => (
          <li key={item._id}>
            <BookImg src={item.imageUrl} />
            <Title>{item.title}</Title>
            <Author>{item.author}</Author>
          </li>
        ))}
      </ListBook>
    </>
  );
};
