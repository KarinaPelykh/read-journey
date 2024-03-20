import { Text, WrapperBooks } from "./RecommendedBooks.styled";
import { BookList } from "../BookList/BookList";
import { useLocation } from "react-router-dom";
import { BookFilter } from "../Filter/BookFilter/BookFilter";
import { useSelector } from "react-redux";
import { filterSelector } from "../../redux/filter/selectors";
import { MyLibraryList } from "../MyLibraryList/MyLibraryList";
import { Select } from "../Select/Select";
import { MyBook } from "../MyBook/MyBook";

export const RecommendedBooks = () => {
  const location = useLocation();
  const localUser = location.pathname === "/library";
  const user = location.pathname === "/reading";
  const filterBook = useSelector(filterSelector);

  return (
    <WrapperBooks>
      {user ? (
        <>
          <Text>My reading</Text>
          <MyBook />
        </>
      ) : !localUser ? (
        <>
          <Text>Recommended</Text>
          {filterBook?.results ? <BookFilter /> : <BookList />}
        </>
      ) : (
        <>
          <Text>My library</Text>
          <Select />
          <MyLibraryList />
        </>
      )}
    </WrapperBooks>
  );
};
