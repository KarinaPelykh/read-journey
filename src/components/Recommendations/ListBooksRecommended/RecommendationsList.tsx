import { booksSelector } from '@/redux/books/selectors';
import { Author, Img, List, Title } from './RecommendationsList.styled';
import { useAppSelector } from '@/hooks/hooks';

type ListRecommends = {
  _id: string;
  imageUrl: string;
  title: string;
  author: string;
};

export const RecommendationsList = () => {
  const bookRecommended = useAppSelector(booksSelector);

  const cutBookRecommended = bookRecommended.results.slice(0, 3);
  console.log(cutBookRecommended);

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
