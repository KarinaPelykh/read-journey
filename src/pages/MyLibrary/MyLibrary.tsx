import { Dashboard } from '../../components/Dashboard/Dashboard';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';
import { Div } from './MyLibrary.styled';
export const MyLibrary = () => {
  return (
    <Div>
      <Dashboard />
      <RecommendedBooks />
    </Div>
  );
};
