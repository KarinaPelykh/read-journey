import { Card } from '@/entities/card/Card';
import { ListBook } from './BookList.styled';

import { NotFound } from './NotFound';

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
          <Card
            key={item._id}
            image={item.imageUrl}
            title={item.title}
            author={item.author}
            pages={item.totalPages}
            id={item._id}
          />
        ))
      ) : (
        <NotFound />
      )}
    </ListBook>
  );
};
