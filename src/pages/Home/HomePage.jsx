// import { BookList } from "../../components/BookList/BookList";
import { Container } from "../../components/Container/Container.styled";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
import { Div } from "./HomePage.style";

export const HomePage = () => {
  return (
    <Container>
      <Div>
        <Dashboard />
        <RecommendedBooks />
        {/* <BookList /> */}
      </Div>
    </Container>
  );
};
