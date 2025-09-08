import { AddBook } from '../features/add-book-form/ui/AddBooks';
import { Recommendations } from './Recommendations/Recommendations/Recommendations';

export const MyLibrarySidebar = () => {
  return (
    <>
      <AddBook />
      <Recommendations />
    </>
  );
};
