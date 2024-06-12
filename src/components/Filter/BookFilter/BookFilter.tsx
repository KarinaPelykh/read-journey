import { filterSelector } from '../../../redux/filter/selectors';
import { BookItemFilter } from '../BookItemFilter/BookItemFilter';
import { useAppSelector } from '../../../hooks/hooks';
interface Book {
  author: string;
  _id: string;
  imageUrl: string;
  title: string;
}
export const BookFilter = () => {
  const filterBook = useAppSelector(filterSelector);

  return (
    <div>
      {filterBook?.results?.map((item: Book) => (
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
