import { booksSelector } from '@/redux/books/selectors';
import { List } from './ListBookPicksWidget.styled';
import { useAppSelector } from '@/shared/hooks/hooks';
import { Card } from '@/entities/card/Card';

type ListRecommends = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
};

export const ListBookPicksWidget = () => {
  const bookRecommended = useAppSelector(booksSelector);

  const cutBookRecommended = bookRecommended.results.slice(0, 3);

  return (
    <List>
      {cutBookRecommended.map((item: ListRecommends) => (
        <Card
          variant="widget"
          key={item._id}
          image={item.imageUrl}
          title={item.title}
          author={item.author}
        />
      ))}
    </List>
  );
};
