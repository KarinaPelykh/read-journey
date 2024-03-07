import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/operations";
import { booksSelector } from "../../redux/books/selectors";
import { Author, BookImg, ListBook, Title } from "./BookList.styled";
import { isLoggedInSelect } from "../../redux/auth/selectors";

export const BookList = () => {
  const bookSelector = useSelector(booksSelector);
  const isLoggedIn = useSelector(isLoggedInSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(fetchBooks());
  }, [dispatch, isLoggedIn]);

  return (
    <ListBook>
      {bookSelector.results?.map((item) => (
        <li key={item._id}>
          <BookImg src={item.imageUrl} />
          <Title>{item.title}</Title>
          <Author>{item.author}</Author>
        </li>
      ))}
    </ListBook>
  );
};
