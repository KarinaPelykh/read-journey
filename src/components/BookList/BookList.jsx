import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/operations";
import { booksSelector } from "../../redux/books/selectors";
import { ListBook } from "./BookList.styled";
import { isLoggedInSelect } from "../../redux/auth/selectors";
import { Pagination } from "../Pagination/Pagination";
import { BookItem } from "../BookItem/BookItem";

export const BookList = () => {
  const [page, setPage] = useState(1);

  const bookSelector = useSelector(booksSelector);
  const { results } = bookSelector;
  console.log(results);
  const isLoggedIn = useSelector(isLoggedInSelect);
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
        {results?.map((item) => (
          <BookItem
            key={item._id}
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
