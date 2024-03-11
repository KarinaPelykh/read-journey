import { useSelector } from "react-redux";
import { filterSelector } from "../../../redux/filter/selectors";
import { Author, BookImg, Title } from "./BookFilter.styled";

export const BookFilter = () => {
  const filterBook = useSelector(filterSelector);

  return (
    <div>
      {filterBook?.results?.map((item) => (
        <div key={item._id}>
          <BookImg src={item.imageUrl} />
          <Title>{item.title}</Title>
          <Author>{item.author}</Author>
        </div>
      ))}
    </div>
  );
};
