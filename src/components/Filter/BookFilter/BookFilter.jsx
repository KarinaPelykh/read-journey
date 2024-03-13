import { useSelector } from "react-redux";
import { filterSelector } from "../../../redux/filter/selectors";

import { BookItemFilter } from "../BookItemFilter/BookItemFilter";

export const BookFilter = () => {
  const filterBook = useSelector(filterSelector);

  return (
    <div>
      {filterBook?.results?.map((item) => (
        <BookItemFilter
          key={item._id}
          id={item._id}
          img={item.imageUrl}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
};
