import { Quote } from '@/shared/ui/passage/Quote';
import { LibraryOverview } from './LibraryOverview/ui/LibraryOverview';
import { FilterForm } from '@/features/filter-books/ui/FilterForm';

export const RecommendedSidebar = () => {
  return (
    <>
      <FilterForm />
      <LibraryOverview />
      <Quote />
    </>
  );
};
