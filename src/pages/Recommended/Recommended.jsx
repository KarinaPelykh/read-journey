import styled from 'styled-components';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';

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
