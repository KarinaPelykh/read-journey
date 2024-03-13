import { Text, WrapperBooks } from "./RecommendedBooks.styled";
import { BookList } from "../BookList/BookList";
import { useLocation } from "react-router-dom";
import { BookFilter } from "../Filter/BookFilter/BookFilter";
import { useSelector } from "react-redux";
import { filterSelector } from "../../redux/filter/selectors";
import { MyLibraryList } from "../MyLibraryList/MyLibraryList";

export const RecommendedBooks = () => {
  const location = useLocation();
  const localUser = location.pathname === "/library";
  const filterBook = useSelector(filterSelector);
  console.log(filterBook);
  return (
    <WrapperBooks>
      {!localUser ? (
        <>
          <Text>Recommended</Text>
          {filterBook?.results ? <BookFilter /> : <BookList />}
        </>
      ) : (
        <>
          <Text>My library</Text>
          <MyLibraryList />
        </>
      )}
    </WrapperBooks>
  );
};
