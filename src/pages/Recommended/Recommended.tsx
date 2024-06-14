import styled from 'styled-components';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';
import { Div } from './Recommended.styled';

export const Recommended = () => {
  return (
    <Div>
      <Dashboard />
      <RecommendedBooks />
    </Div>
  );
};
