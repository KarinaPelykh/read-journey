import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/operations";
import { booksSelector } from "../../redux/books/selectors";
import { Author, BookImg, ListBook, Title } from "./BookList.styled";

export const BookList = () => {
  const bookSelector = useSelector(booksSelector);
  console.log(bookSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

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
