import { Quote } from '@/shared/ui/quote/Quote';
import { LibraryOverview } from './LibraryOverview/LibraryOverview';
import { FilterForm } from '@/features/filter-books/FilterForm/FilterForm';

export const RecommendedSidebar = () => {
  return (
    <>
      <FilterForm />
      <LibraryOverview />
      <Quote />
    </>
  );
};
