import { booksSelector } from '@/redux/books/selectors';
import { Author, Img, List, Title } from './ListBookPicksWidget.styled';
import { useAppSelector } from '@/shared/hooks/hooks';

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
        <li key={item._id}>
          <Img src={item.imageUrl} />
          <Title>{item.title}</Title>
          <Author>{item.author}</Author>
        </li>
      ))}
    </List>
  );
};
