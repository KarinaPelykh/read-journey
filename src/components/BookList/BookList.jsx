import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/operations";
import { booksSelector } from "../../redux/books/selectors";

export const BookList = () => {
  const bookSelector = useSelector(booksSelector);
  console.log(bookSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <ul>
      {bookSelector.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
