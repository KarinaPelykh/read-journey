import { AddBook } from './AddBooks/AddBooks';
import { Recommendations } from './Recommendations/Recommendations/Recommendations';

export const MyLibrarySidebar = () => {
  return (
    <>
      <AddBook />
      <Recommendations />
    </>
  );
};
