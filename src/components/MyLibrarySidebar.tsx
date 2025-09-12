import { BookPicksWidget } from '@/widgets/book-widget/ui/book-picks-widget/BookPicksWidget';
import { AddBook } from '../features/add-book-form/ui/AddBooks';

export const MyLibrarySidebar = () => {
  return (
    <>
      <AddBook />
      <BookPicksWidget />
    </>
  );
};
