import { Container } from "../../components/Container/Container.styled";
import styled from "styled-components";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { RecommendedBooks } from "../../components/RecommendedBooks/RecommendedBooks";
export const MyLibrary = () => {
  return (
    <Container>
      <Div>
        <Dashboard />
        <RecommendedBooks />
      </Div>
    </Container>
  );
};

const Div = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
