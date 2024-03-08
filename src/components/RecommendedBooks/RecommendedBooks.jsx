import { Text, WrapperBooks } from "./RecommendedBooks.styled";
import { BookList } from "../BookList/BookList";
export const RecommendedBooks = () => {
  return (
    <WrapperBooks>
      <Text>Recommended</Text>
      <BookList />
    </WrapperBooks>
  );
};
