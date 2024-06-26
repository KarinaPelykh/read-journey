import { FilterForm } from '../Filter/FilterForm/FilterForm';
import { LibraryOverview } from '../LibraryOverview/LibraryOverview';
import { Quote } from '../Quote/Quote';

export const FilterOnRecommendedPage = () => {
  return (
    <>
      <FilterForm />
      <LibraryOverview />
      <Quote />
    </>
  );
};
