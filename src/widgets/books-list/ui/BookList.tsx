import { ListBook } from './BookList.styled';

import { NotFound } from './NotFound';
import { BookCard } from '@/entities/book-card/BookCard';

type Book = {
  author: string;
  imageUrl: string;
  title: string;
  totalPages: number;
  _id: string;
};

export const BookList = ({ books }: { books: Book[] }) => {
  return (
    <ListBook>
      {books.length ? (
        books.map((item: Book) => (
          <BookCard
            key={item._id}
            id={item._id}
            img={item.imageUrl}
            title={item.title}
            author={item.author}
            pages={item.totalPages}
          />
        ))
      ) : (
        <NotFound />
      )}
    </ListBook>
  );
};
