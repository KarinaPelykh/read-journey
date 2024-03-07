import { Text, WrapperBooks } from "./RecommendedBooks.styled";

export const RecommendedBooks = ({ children }) => {
  return (
    <WrapperBooks>
      <Text>Recommended</Text>
      {children}
    </WrapperBooks>
  );
};
