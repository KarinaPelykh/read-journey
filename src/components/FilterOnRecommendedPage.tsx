import { Quote } from '@/shared/ui/Quote/Quote';
import { FilterForm } from './Filter/FilterForm/FilterForm';
import { LibraryOverview } from './LibraryOverview/LibraryOverview';

export const FilterOnRecommendedPage = () => {
  return (
    <>
      <FilterForm />
      <LibraryOverview />
      <Quote />
    </>
  );
};
