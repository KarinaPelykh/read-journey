import { Quote } from '@/shared/ui/passage/Quote';
import { FilterForm } from '@/features/filter-books/ui/FilterForm';
import { SetupGuide } from '@/widgets/setup-guide/ui/SetupGuide';

export const RecommendedSidebar = () => {
  return (
    <>
      <FilterForm />
      <SetupGuide />
      <Quote />
    </>
  );
};
