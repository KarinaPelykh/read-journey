import styled from 'styled-components';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';
import { Dashboard } from '../../components/Dashboard/Dashboard';

export const Recommended = () => {
  return (
    <Div>
      <Dashboard />
      <RecommendedBooks />
    </Div>
  );
};
const Div = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
