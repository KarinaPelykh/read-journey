import { useSelector } from "react-redux";
import { booksSelector } from "../../../redux/books/selectors";
import { Author, Img, List, Title } from "./RecommendationsList.styled";

export const RecommendationsList = () => {
  const bookRecommended = useSelector(booksSelector);
  const CutBookRecommended = bookRecommended.results.slice(0, 3);
  return (
    <List>
      {CutBookRecommended.map((item) => (
        <li key={item._id}>
          <Img src={item.imageUrl} />
          <Title>{item.title}</Title>
          <Author>{item.author}</Author>
        </li>
      ))}
    </List>
  );
};
