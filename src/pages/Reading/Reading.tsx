import { Dashboard } from '../../components/Dashboard/Dashboard';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';
import { Div } from './Reading.styled';

export const Reading = () => {
  return (
    <Div>
      <Dashboard />
      <RecommendedBooks />
    </Div>
  );
};
