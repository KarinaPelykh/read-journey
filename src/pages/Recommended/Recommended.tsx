import { Dashboard } from '@/widgets/dashboard/Dashboard';
import { RecommendedBooks } from '@/components/RecommendedBooks/RecommendedBooks';

import { RecommendedSidebar } from '@/components/RecommendedSidebar';

import { Div } from './Recommended.styled';

export const Recommended = () => {
  return (
    <Div>
      <Dashboard>
        <RecommendedSidebar />
      </Dashboard>
      <RecommendedBooks />
    </Div>
  );
};
